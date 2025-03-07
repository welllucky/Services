import { useAuth } from "@/utils/providers/AuthProvider";
import toast from "react-hot-toast";
import useLogin from "./Login.hook";
import { LoginPageProps } from "./Login.types";
import LoginPageUI from "./UI";

const LoginPage = ({ searchParams }: LoginPageProps) => {
  const { control, formState, loginAction, isLoading } = useLogin({
    searchParams,
    toast,
    useAuth,
  });

  return (
    <LoginPageUI
      formState={formState}
      control={control}
      loginAction={loginAction}
      pageIsLoading={isLoading}
    />
  );
};

export default LoginPage;
