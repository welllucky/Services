import { CustomButton } from "@/components";

interface LoginButtonProps {
  isDisabled: boolean;
  callback: () => void;
}

export const LoginButton = ({ isDisabled, callback }: LoginButtonProps) => (
  <CustomButton
    $backgroundColor="#EA374D"
    color="#fff"
    onClick={callback}
    type="button"
    text="Entrar"
    height="2.6rem"
    width="100%"
    disabled={isDisabled}
  />
);
