"use client";

import { IUser } from "@/types";
import { LS_KEY_USER_DATA } from "@/utils/alias";
import { closeSession } from "@/utils/functions";
import * as Sentry from "@sentry/nextjs";
import {
  signIn as systemSignIn,
  signOut as systemSignOut,
  useSession,
} from "next-auth/react";
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
  // eslint-disable-next-line no-unused-vars
  signOut: (soft?: boolean) => void;
  signIn: (
    // eslint-disable-next-line no-unused-vars
    email: string,
    // eslint-disable-next-line no-unused-vars
    password: string,
    // eslint-disable-next-line no-unused-vars
    redirectTo?: string,
  ) => Promise<void>;
  // eslint-disable-next-line no-unused-vars
  update: (userData: Partial<IUser>) => Promise<void>;
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
  update: async () => Promise.resolve(),
});

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const router = useRouter();
  const { data, status, update: updateUser } = useSession();

  const resetStates = useCallback(() => {
    setUser(null);
    setError("");
    setIsLoading(false);
    setIsAuthenticated(false);
  }, []);

  const signOut = useCallback(async () => {
    resetStates();
    Sentry.setUser(null);
    sessionStorage.removeItem(LS_KEY_USER_DATA);
    await closeSession(data?.user?.accessToken || "");
    await systemSignOut({
      redirectTo: "/login",
      redirect: true,
    });
  }, [data?.user.accessToken, resetStates]);

  const signIn = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
    async (email: string, password: string, redirectTo?: string) => {
      resetStates();
      try {
        setIsLoading(true);
        await systemSignIn("credentials", {
          email,
          password,
          redirect: true,
          redirectTo: redirectTo || "/",
        });
      } catch (err) {
        setError((err as Error).message);
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    },
    [resetStates],
  );

  const update = useCallback(
    async (userData: Partial<IUser>) => {
      await updateUser(userData);
    },
    [updateUser],
  );

  useEffect(() => {
    setIsAuthenticated(status === "authenticated");

    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [data, router, status]);

  useEffect(() => {
    if (!user && data?.user && status === "authenticated") {
      setUser(data.user);
      setIsAuthenticated(true);
      Sentry.setUser(data.user);
      sessionStorage.setItem(LS_KEY_USER_DATA, JSON.stringify(data.user));
    }

    if (user && !data && status === "unauthenticated") {
      resetStates();
      setUser(null);
      setIsAuthenticated(false);
      Sentry.setUser(null);
      sessionStorage.removeItem(LS_KEY_USER_DATA);
    }
  }, [data, resetStates, status, user]);

  const memoizedValue = useMemo(
    (): AuthContextProps => ({
      isAuthenticated,
      user,
      signOut,
      signIn,
      update,
      isLoading,
      error,
    }),
    [error, isAuthenticated, isLoading, signIn, signOut, update, user],
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
