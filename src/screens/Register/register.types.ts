import { CreateAccountDto } from "@/types";

// eslint-disable-next-line no-unused-vars
export type onCreateAccountType = (accountData: CreateAccountDto) => void;

export interface RegisterPageUIProps {
  // eslint-disable-next-line no-unused-vars
  onCreateAccount: onCreateAccountType;
}

export interface RegisterFormProps {
  // eslint-disable-next-line no-unused-vars
  onCreateAccount: onCreateAccountType;
}
