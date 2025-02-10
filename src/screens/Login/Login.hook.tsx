import { authErrorMessages } from "@/constraints";
import { ISignIn, SignInSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { UseLoginProps } from "./Login.types";

export const useLogin = ({ searchParams, toast, useAuth }: UseLoginProps) => {
  const { error: pageError, redirectTo } = searchParams;
  const { signIn, isLoading, error, isAuthenticated, user } = useAuth();
  const {
    control,
    formState,
    handleSubmit,
    setError,
    clearErrors,
    resetField,
  } = useForm<ISignIn>({
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
      setTimeout(() => {
        setError("root", {
          message: getCustomErrorMessage(loginError),
          type: "value",
        });
        toast.error(getCustomErrorMessage(loginError));
      }, 800);
    }
  }, [clearErrors, error, loginError, resetField, setError, toast]);

  const loginCallback = handleSubmit((data) => {
    try {
      toast.promise(signIn(data.email, data.password, redirectTo ?? "/"), {
        loading: "Loading...",
        success: "Login realized with success!",
        error: "Error to login, please try again",
      });

      if (isAuthenticated) toast.success(`Bem-vindo ${user?.name}!`);
    } catch (err) {
      toast.error((err as Error).message || "Erro ao fazer login");
    }
  });

  return {
    control,
    formState,
    loginAction: loginCallback,
    isLoading,
    getCustomErrorMessage,
  };
};
