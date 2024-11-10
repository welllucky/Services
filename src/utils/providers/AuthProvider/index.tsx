/* eslint-disable no-unused-vars */

"use client";

import { InvalidLoginError, UserNotExist } from "@/server/models/Errors";
import { AuthErrorMessage, IHttpError, IUser } from "@/types";
import { cookie } from "@/utils/abstractions";
import { CS_KEY_ACCESS_TOKEN } from "@/utils/alias";
import { createSession, getUser } from "@/utils/functions";
import { useRouter } from "next/navigation";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextProps {
  isAuthenticated: boolean;
  user: IUser | null;
  signOut: () => void;
  signIn: (
    email: string,
    password: string,
    redirectTo?: string,
  ) => Promise<void>;
  isLoading: boolean;
  accessToken?: string;
  error: string;
}

const AuthContext = createContext<AuthContextProps>({
  isAuthenticated: false,
  user: null,
  isLoading: false,
  accessToken: "",
  signOut: () => {},
  signIn: async () => Promise.resolve(),
  error: "",
});

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [accessToken, setAccessToken] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const verifyUser = async () => {
      const token = cookie.get(CS_KEY_ACCESS_TOKEN);
      if (token) {
        setAccessToken(token);
        // const rawUser = JSON.parse(atob(accessToken)) as unknown as IUser;

        const { user: rawUser } = await getUser(token ?? "");

        if (rawUser) {
          setUser({
            register: rawUser?.register ?? "",
            name: rawUser?.name ?? "",
            email: rawUser?.email ?? "",
            isBanned: rawUser?.isBanned ?? false,
            canCreateTicket: rawUser?.canCreateTicket ?? false,
            canResolveTicket: rawUser?.canResolveTicket ?? false,
            role: rawUser?.role ?? "",
            sector: rawUser?.sector ?? "",
            lastConnection: rawUser?.lastConnection ?? null,
          });
          setIsAuthenticated(true);
        }

        if (rawUser?.isBanned) {
          setUser(null);
          setIsAuthenticated(false);
          cookie.remove(CS_KEY_ACCESS_TOKEN);
        }

        if (rawUser?.lastConnection) {
          const lastConnectionDate = new Date(rawUser.lastConnection);
          const currentDate = new Date();
          const diffTime = Math.abs(
            currentDate.getTime() - lastConnectionDate.getTime(),
          );
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

          if (diffDays > 4) {
            setUser(null);
            setIsAuthenticated(false);
            cookie.remove(CS_KEY_ACCESS_TOKEN);
            router.push("/login");
          }
        }
      }
    };
    verifyUser();
  }, [accessToken, router]);

  const signIn = useCallback(
    async (email: string, password: string, redirectTo?: string) => {
      try {
        setLoading(true);
        const { accessToken: token, error: sessionError } = await createSession(
          email,
          password,
        );

        const { error: userError, user: rawUser } = await getUser(token ?? "");

        const signInError = sessionError || userError;

        if (!token || signInError) {
          setLoading(false);
          const errorMessage =
            (signInError as IHttpError).message ??
            AuthErrorMessage.UserNotExist;

          setError(errorMessage);

          if (errorMessage === AuthErrorMessage.UserNotExist) {
            throw new UserNotExist();
          }

          throw new InvalidLoginError();
        }

        setAccessToken(token);

        setUser({
          register: rawUser?.register ?? "",
          name: rawUser?.name ?? "",
          email: rawUser?.email ?? "",
          isBanned: rawUser?.isBanned ?? false,
          canCreateTicket: rawUser?.canCreateTicket ?? false,
          canResolveTicket: rawUser?.canResolveTicket ?? false,
          role: rawUser?.role ?? "",
          sector: rawUser?.sector ?? "",
          lastConnection: rawUser?.lastConnection ?? null,
        });

        setIsAuthenticated(true);

        router.push(redirectTo ?? "/");
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    },
    [router],
  );

  const signOut = useCallback(() => {
    try {
      cookie.remove(CS_KEY_ACCESS_TOKEN);
      setLoading(true);
      setUser(null);
      setIsAuthenticated(false);
      router.push("/login");
    } finally {
      setLoading(false);
    }
  }, [router]);

  // const updateUserData = async () => {
  // };

  const memoizedValue = useMemo(
    (): AuthContextProps => ({
      isAuthenticated,
      user,
      signOut,
      signIn,
      isLoading: loading,
      accessToken,
      error,
    }),
    [accessToken, error, isAuthenticated, loading, signIn, signOut, user],
  );

  return (
    <AuthContext.Provider value={memoizedValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  if (!AuthContext) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return useContext(AuthContext);
};
