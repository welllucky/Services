"use client";

import { ISignIn } from "@/types/";
import { SignInSchema } from "@/types/Interfaces/User";
import { linkUserSession } from "@/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { LoginPageUI } from "./UI";

const LoginPage = () => {
  const {
    register,
    formState,
    // handleSubmit,
    watch,
  } = useForm<ISignIn>({
    shouldUnregister: true,
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
    resetOptions: {
      keepDefaultValues: true,
      keepSubmitCount: false,
    },
    reValidateMode: "onChange",
    shouldFocusError: true,
    resolver: zodResolver(SignInSchema),
  });

  const { errors } = formState;

  const email = watch("email");
  const password = watch("password");

  const loginCallback = async () => {
    console.log({
      email,
      password,
      errors,
    });
    // handleSubmit(async (data) => {
    try {
      await signIn("credentials", {
        email,
        password,
        redirectTo: "/",
      });

      await linkUserSession(email, password);

      toast.success("Seja bem vindo!");
    } catch (error) {
      console.log({ error });
      toast.error("Email ou senha inválidos");
    }
    // });
  };

  return (
    <LoginPageUI
      formState={formState}
      register={register}
      loginAction={loginCallback}
    />
  );
};

export { LoginPage };
