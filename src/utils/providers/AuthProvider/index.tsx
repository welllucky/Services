/* eslint-disable no-unused-vars */

"use client";

import { cookie } from "@/implementations/client";
import { InvalidLoginError, UserNotExist } from "@/server/models/Errors";
import { AuthErrorMessage, IHttpError, IUser } from "@/types";
import { CS_KEY_ACCESS_TOKEN, LS_KEY_USER_DATA } from "@/utils/alias";
import { closeSession, createSession, getUser } from "@/utils/functions";
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
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const storedAccessToken = cookie.get(CS_KEY_ACCESS_TOKEN) ?? "";
    if (!storedAccessToken) {
      router.push("/login");
    }
  }, [router]);

  const signIn = useCallback(
    async (email: string, password: string, redirectTo?: string) => {
      try {
        setIsLoading(true);
        const { accessToken: newToken, error: sessionError } =
          await createSession(email, password);

        const { error: userError, user: rawUser } = await getUser(
          newToken ?? "",
        );

        const signInError = sessionError || userError;

        if (!newToken || signInError) {
          setIsLoading(false);
          const errorMessage =
            (signInError as IHttpError).message ??
            AuthErrorMessage.UserNotExist;

          setError(errorMessage);

          if (errorMessage === AuthErrorMessage.UserNotExist) {
            throw new UserNotExist();
          }

          throw new InvalidLoginError();
        }

        setAccessToken(newToken);

        const savedUserData = {
          register: rawUser?.register ?? "",
          name: rawUser?.name ?? "",
          email: rawUser?.email ?? "",
          isBanned: rawUser?.isBanned ?? false,
          canCreateTicket: rawUser?.canCreateTicket ?? false,
          canResolveTicket: rawUser?.canResolveTicket ?? false,
          role: rawUser?.role ?? "",
          sector: rawUser?.sector ?? "",
          lastConnection: rawUser?.lastConnection ?? null,
        };

        setUser(savedUserData);
        localStorage.setItem(LS_KEY_USER_DATA, JSON.stringify(savedUserData));

        setIsAuthenticated(true);

        router.push(redirectTo ?? "/");
      } catch {
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    },
    [router],
  );

  const signOut = useCallback(async () => {
    setIsLoading(true);
    setUser(null);
    setIsAuthenticated(false);
    cookie.remove(CS_KEY_ACCESS_TOKEN);
    localStorage.removeItem(LS_KEY_USER_DATA);
    await closeSession();
    router.push("/login");
  }, [router]);

  // const updateUserData = async () => {
  // };

  useEffect(() => {
    try {
      const storedAccessToken = cookie.get(CS_KEY_ACCESS_TOKEN) ?? "";
      const storedUserDataString =
        localStorage?.getItem(LS_KEY_USER_DATA) ?? "";
      const storedUserData = storedUserDataString
        ? JSON.parse(storedUserDataString)
        : {};

      setIsLoading(true);

      if (storedUserData) {
        setUser({
          register: storedUserData?.register ?? "",
          name: storedUserData?.name ?? "",
          email: storedUserData?.email ?? "",
          isBanned: storedUserData?.isBanned ?? false,
          canCreateTicket: storedUserData?.canCreateTicket ?? false,
          canResolveTicket: storedUserData?.canResolveTicket ?? false,
          role: storedUserData?.role ?? "",
          sector: storedUserData?.sector ?? "",
          lastConnection: storedUserData?.lastConnection ?? null,
        });

        if (storedUserData.isBanned) {
          signOut();
        }

        if (storedUserData.lastConnection) {
          const lastConnectionDate = new Date(storedUserData.lastConnection);
          const currentDate = new Date();
          const diffTime = Math.abs(
            currentDate.getTime() - lastConnectionDate.getTime(),
          );
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

          if (diffDays > 4) {
            signOut();
          }
        }
      }

      if (storedAccessToken) {
        setIsAuthenticated(true);
        setAccessToken(storedAccessToken);
      }
    } finally {
      setIsLoading(false);
    }
  }, [accessToken, isLoading, router, signOut]);

  const memoizedValue = useMemo(
    (): AuthContextProps => ({
      isAuthenticated,
      user,
      signOut,
      signIn,
      isLoading,
      accessToken,
      error,
    }),
    [accessToken, error, isAuthenticated, isLoading, signIn, signOut, user],
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
