"use client";

import { authErrorMessages } from "@/constraints";
import { appMonitoringClient } from "@/implementations/client";
import { ISignIn, SignInSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { UseLoginProps } from "./Login.types";

const useLogin = ({ searchParams, toast, useAuth }: UseLoginProps) => {
  const { error: pageError, redirectTo } = searchParams;
  const { signIn, error } = useAuth();
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
      toast.error(getCustomErrorMessage(loginError));
    }
  }, [clearErrors, error, loginError, resetField, setError, toast]);

  const handleAsyncLogin = async () => {
    try {
    const email = getValues("email");
    const password = getValues("password");
      if (!email || !password) {
        throw new Error("Email e senha são obrigatórios");
      }

      const result = await signIn(email, password, redirectTo ?? "/");

      if (!result.successfully) {
        const errorType = result.error || "CredentialsSignin";
        const errorMessage = getCustomErrorMessage(errorType);

        setError("email", {
          message: errorMessage,
          type: "value",
        });

        setError("password", {
          message: errorMessage,
          type: "value",
        });
      }
    } catch (err) {
      const errorMessage = getCustomErrorMessage("Default");
      toast.error(errorMessage);
      appMonitoringClient.captureException(errorMessage, {
        data: {
          rootError: err,
        },
      });
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
