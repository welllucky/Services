import { CustomButton } from "@/components";
import toast from "react-hot-toast";

interface LoginButtonProps {
  isDisabled: boolean;
  onAsyncLogin: () => Promise<void>;
}

export const LoginButton = ({ isDisabled, onAsyncLogin }: LoginButtonProps) => {
  const handleAsyncLogin = async () => {
    const toastId = toast.loading("Realizando login...");

    try {
      await onAsyncLogin();
    } finally {
      toast.dismiss(toastId);
    }
  };

  return (
    <CustomButton
      $backgroundColor="#EA374D"
      color="#fff"
      type="button"
      text="Entrar"
      loadingText="Entrando..."
      height="2.6rem"
      width="100%"
      disabled={isDisabled}
      onAsyncClick={handleAsyncLogin}
    />
  );
};
