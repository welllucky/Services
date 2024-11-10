"use client";

import { ISignIn, SignInSchema } from "@/types/";
import { useAuth } from "@/utils/providers/AuthProvider";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { LoginPageUI } from "./UI";

export interface LoginPageProps {
  error?: string;
  redirectTo?: string;
}

const LoginPage = ({ error, redirectTo }: LoginPageProps) => {
  const { signIn, isLoading } = useAuth();
  const { register, formState, handleSubmit } = useForm<ISignIn>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
    reValidateMode: "onChange",
    shouldFocusError: true,
    resolver: zodResolver(SignInSchema),
  });

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        toast.error("Houve um erro ao tentar fazer login, tente novamente");
      }, 200);
    }
  }, [error]);

  const loginCallback = handleSubmit(async (data) => {
    try {
      await signIn(data.email, data.password, redirectTo ?? "/");

      toast.success("Bem-vindo!");
    } catch {
      toast.error("Email ou senha inválidos");
    }
  });

  return (
    <LoginPageUI
      formState={formState}
      register={register}
      loginAction={loginCallback}
      pageIsLoading={isLoading}
    />
  );
};

export { LoginPage };
