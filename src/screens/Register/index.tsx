"use client";

import { useRegister } from "./register.hook";
import { RegisterPageUI } from "./UI";

// export interface RegisterPageProps {}

export const RegisterPage = () => {
  const { createAccount } = useRegister();

  return <RegisterPageUI onCreateAccount={createAccount} />;
};
