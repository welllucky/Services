"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";

import { authErrorMessages } from "@/constraints";
import { appMonitoringClient } from "@/implementations/client";
import { ISignIn, SignInSchema } from "@/types";

import { UseLoginProps } from "./Login.types";

const useLogin = ({ searchParams, toast, useAuth }: UseLoginProps) => {
  const { error: pageError, redirectTo } = searchParams;
  const { signIn, error } = useAuth();

  // Breadcrumb para início do processo de login
  appMonitoringClient.addBreadcrumb({
    message: "Login form initialized",
    category: "auth",
    level: "info",
    data: {
      hasPageError: !!pageError,
      redirectTo: redirectTo || "default",
    },
  });

  const { control, formState, setError, clearErrors, resetField, getValues } =
    useForm<ISignIn>({
      defaultValues: {
        email: "",
        password: "",
      },
      mode: "onChange",
      reValidateMode: "onChange",
      shouldFocusError: true,
      resolver: zodResolver(SignInSchema),
    });

  const getCustomErrorMessage = (errorType?: string) => {
    return (
      authErrorMessages[`${errorType}`]?.message ||
      authErrorMessages.Default.message
    );
  };

  const loginError = useMemo(() => pageError ?? error, [error, pageError]);

  useEffect(() => {
    if (loginError) {
      appMonitoringClient.addBreadcrumb({
        message: "Login error detected",
        category: "auth.error",
        level: "error",
        data: {
          errorType: loginError,
          errorMessage: getCustomErrorMessage(loginError),
        },
      });

      appMonitoringClient.captureException(`Login error: ${loginError}`, {
        tags: {
          errorType: "next-auth",
          source: "login_hook",
        },
      });

      toast.error(getCustomErrorMessage(loginError));
    }
  }, [clearErrors, error, loginError, resetField, setError, toast]);

  const handleAsyncLogin = async () => {
    try {
      const email = getValues("email");
      const password = getValues("password");

      appMonitoringClient.addBreadcrumb({
        message: "Login attempt started",
        category: "auth.login",
        level: "info",
        data: {
          email: email ? `${email.substring(0, 3)}***` : "empty",
          hasPassword: !!password,
          redirectTo: redirectTo ?? "/",
        },
      });

      if (!email || !password) {
        appMonitoringClient.addBreadcrumb({
          message: "Login validation failed",
          category: "auth.validation",
          level: "warning",
          data: {
            missingEmail: !email,
            missingPassword: !password,
          },
        });
        throw new Error("Email e senha são obrigatórios");
      }

      const result = await signIn(email, password, redirectTo ?? "/");

      if (!result.successfully) {
        const errorType = result.error || "CredentialsSignin";
        const errorMessage = getCustomErrorMessage(errorType);

        appMonitoringClient.addBreadcrumb({
          message: "Login failed",
          category: "auth.login",
          level: "error",
          data: {
            errorType,
            errorMessage,
          },
        });

        appMonitoringClient.captureException("Login failed for user", {
          tags: {
            errorType,
            email: `${email.substring(0, 3)}***`,
            source: "login_handler",
          },
        });

        setError("email", {
          message: errorMessage,
          type: "value",
        });

        setError("password", {
          message: errorMessage,
          type: "value",
        });
      } else {
        appMonitoringClient.addBreadcrumb({
          message: "Login successful",
          category: "auth.login",
          level: "info",
          data: {
            email: `${email.substring(0, 3)}***`,
            redirectTo: redirectTo ?? "/",
          },
        });
      }
    } catch (err) {
      const errorMessage = getCustomErrorMessage("Default");

      appMonitoringClient.addBreadcrumb({
        message: "Login exception caught",
        category: "auth.error",
        level: "error",
        data: {
          errorMessage,
        },
      });

      appMonitoringClient.captureException(err, {
        tags: {
          source: "login_handler",
          action: "handleAsyncLogin",
        },
      });

      toast.error(errorMessage);
    }
  };

  return {
    control,
    formState,
    handleAsyncLogin,
    getCustomErrorMessage,
  };
};

export default useLogin;
