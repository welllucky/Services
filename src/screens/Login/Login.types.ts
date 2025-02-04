import { ISignIn } from "@/types";
import { AuthContextProps } from "@/utils";
import { Control, FormState } from "react-hook-form";
import toast from "react-hot-toast";

export type FormControl = Control<ISignIn>;

export type LoginSearchParams = {
  redirectTo?: string;
  error?: string;
  code?: string;
};

export interface LoginFormProps {
  loginAction: () => void;
  isValid: boolean;
  control: FormControl;
}

export interface LoginUIProps
  extends Pick<LoginFormProps, "control" | "loginAction"> {
  formState: FormState<ISignIn>;
  pageIsLoading?: boolean;
}

export interface LoginPageProps {
  searchParams: LoginSearchParams;
}

export interface UseLoginProps {
  toast: typeof toast;
  searchParams: LoginSearchParams;
  useAuth: () => AuthContextProps;
}
