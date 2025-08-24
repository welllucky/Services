"use client";

import { useRouter } from "next/navigation";
import {
  signIn as systemSignIn,
  signOut as systemSignOut,
  useSession,
} from "next-auth/react";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { LS_KEY_USER_DATA } from "@/constraints";
import { IAppMonitoring, IUser } from "@/types";
import { closeSession } from "@/utils/functions";

interface AuthProviderProps {
  children: ReactNode;
  appMonitoring: IAppMonitoring
}

export interface AuthContextProps {
  isAuthenticated: boolean;
  user: IUser | null;
  // eslint-disable-next-line no-unused-vars
  signOut: (soft?: boolean) => Promise<void>;
  signIn: (
    // eslint-disable-next-line no-unused-vars
    email: string,
    // eslint-disable-next-line no-unused-vars
    password: string,
    // eslint-disable-next-line no-unused-vars
    redirectTo?: string,
  ) => Promise<{
    successfully: boolean;
    error: string;
    status?: number;
    url?: string | null;
  }>;
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
  error: "",
  signOut: () => Promise.resolve(),
  signIn: () =>
    Promise.resolve({
      successfully: false,
      error: "",
    }),
  update: () => Promise.resolve(),
});

export const AuthProvider = ({ children, appMonitoring }: AuthProviderProps) => {
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
    appMonitoring.setUser(null);
    sessionStorage.removeItem(LS_KEY_USER_DATA);
    await closeSession(data?.accessToken ?? "");
    await systemSignOut({
      redirectTo: "/login",
      redirect: true,
    });
  }, [appMonitoring, data?.accessToken, resetStates]);

  const signIn = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
    async (email: string, password: string, redirectTo?: string) => {
      let errorType = "CredentialsSignin";
      resetStates();

      try {
        setIsLoading(true);
        const result = await systemSignIn("credentials", {
          email,
          password,
          redirect: false,
        });

        if (result?.error) {
          // Se o erro vem como "CredentialsSignin: Read more at..." extrair apenas o tipo
          if (typeof result.error === "string") {
            errorType = result.error.split(":")[0].trim() || "CredentialsSignin";
          } else {
            errorType = result.error;
          }

          setError(errorType);
          return {
            successfully: false,
            error: errorType,
            status: result?.status,
            url: result?.url,
          };
        }

        if (result?.ok) {
          setIsAuthenticated(true);
          router.push(redirectTo ?? "/");
          return {
            successfully: true,
            error: "",
            status: result?.status,
            url: result?.url,
          };
        }

        setError(errorType);
        return {
          successfully: false,
          error: errorType,
          status: result?.status,
          url: result?.url,
        };
      } catch (err) {
        const internalError = (err as Error).message;
        setError(internalError);
        setUser(null);
        return {
          successfully: false,
          error: internalError,
        };
      } finally {
        setIsLoading(false);
      }
    },
    [resetStates, router],
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
      appMonitoring.setUser({
        id: data?.user?.register,
        email: data?.user?.email,
        username: data?.user?.name,
        canCreateTicket: data?.user?.canCreateTicket,
        canResolveTicket: data?.user?.canResolveTicket,
        isBanned: data?.user?.isBanned,
      });
      sessionStorage.setItem(LS_KEY_USER_DATA, JSON.stringify(data.user));
    }

    if (user && !data && status === "unauthenticated") {
      resetStates();
      setUser(null);
      setIsAuthenticated(false);
      appMonitoring.setUser(null);
      sessionStorage.removeItem(LS_KEY_USER_DATA);
    }
  }, [appMonitoring, data, resetStates, status, user]);

  const memoizedValue = useMemo(
    (): AuthContextProps => ({
      isAuthenticated,
      user,
      signOut,
      signIn,
      update,
      isLoading,
      error,
      accessToken: data?.accessToken,
    }),
    [
      data?.accessToken,
      error,
      isAuthenticated,
      isLoading,
      signIn,
      signOut,
      update,
      user,
    ],
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
