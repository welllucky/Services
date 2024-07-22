"use client";

import { useState } from "react";

import EyeIcon from "@/assets/Icons/eye.svg";
import EyeClosedIcon from "@/assets/Icons/eyeClosed.svg";
import Lock from "@/assets/Icons/png/Lock.png";
import LoginIcon from "@/assets/Icons/login.svg";
import LoginDisabledIcon from "@/assets/Icons/loginDisabled.svg";
import Link from "next/link";
import { CustomInput, CustomButton, Loading } from "@/components";
import EmailIcon from "@/assets/Icons/png/MailIcon.png";
import ClearIcon from "@/assets/Icons/png/ClearIcon.png";
import { useForm } from "react-hook-form";
import Image from "next/image";
import {
  ButtonSection,
  ForgotPassword,
  ForgotPasswordContainer,
  FormContainer,
  InputSection,
  LoginMobile,
  Logo,
  ScreenContainer,
  TextMobile,
} from "./styles";

interface UserLoginProps {
  email: string;
  password: string;
}

const LoginPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const isInactiveButton = false;

  const {
    register,
    formState: { errors, isLoading },
    watch,
  } = useForm<UserLoginProps>({
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
  });

  const emailWatcher = watch("email");
  const passwordWatcher = watch("password");

  return (
    <ScreenContainer>
      {isLoading && <Loading overlayOn />}
      <LoginMobile>
        <Logo>
          <Image
            src="/public/Icon.png"
            alt="Services"
          />
        </Logo>
        <FormContainer>
          <TextMobile>Entrar</TextMobile>
          <InputSection>
            <CustomInput
              register={register}
              id="email"
              type="email"
              placeholder="Digite o seu email"
              $status={
                errors.email
                  ? "invalid"
                  : emailWatcher.length
                    ? "valid"
                    : "none"
              }
              trailingButton={{ icon: ClearIcon, alt: "Limpar" }}
              leadingButton={{ icon: EmailIcon, alt: "Email" }}
              errorText={errors.email?.message}
            />

            <CustomInput
              id="password"
              register={register}
              type={passwordVisible ? "text" : "password"}
              placeholder="Digite a sua senha"
              trailingButton={{
                icon: passwordVisible ? EyeClosedIcon : EyeIcon,
                alt: "Limpar",
                onClick: () => setPasswordVisible(!passwordVisible),
              }}
              leadingButton={{
                icon: Lock,
                alt: "Email",
                size: 24,
              }}
              height="58px"
              $status={
                errors.password
                  ? "invalid"
                  : passwordWatcher.length
                    ? "valid"
                    : "none"
              }
              errorText={errors.password?.message}
            />
          </InputSection>
          <ForgotPasswordContainer>
            <ForgotPassword href="/recuperar">Esqueci a Senha</ForgotPassword>
          </ForgotPasswordContainer>
        </FormContainer>
        <ButtonSection>
          <CustomButton
            $backgroundColor="#EA374D"
            color="#fff"
            onClick={() => alert("Logado!")}
            type="submit"
            text="Entrar"
            alt="ícone de entrar"
            height="2.6rem"
            disabled={isInactiveButton}
            icon={isInactiveButton ? LoginDisabledIcon : LoginIcon}
          />
          <span>OU</span>
          <p>
            Não possui uma conta?
            {" "}
            <Link href="/cadastro">Cadastre-se </Link>
          </p>
        </ButtonSection>
      </LoginMobile>
    </ScreenContainer>
  );
};

export { LoginPage };
