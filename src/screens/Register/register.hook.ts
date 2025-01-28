"use client";

import { CreateAccountDto } from "@/types";
import { useAuth } from "@/utils";
import { accountApi } from "@/utils/apis";
import toast from "react-hot-toast";

const defaultErrorMessage = "Error creating account";

export const useRegister = () => {
  const { signIn } = useAuth();

  const createAccount = async (accountData: CreateAccountDto) => {
    try {
      toast.loading("Creating account...");

      const { status, error, message } = await accountApi.create({
        data: accountData,
      });

      if (status === 201) {
        toast.dismiss();
        toast.success(message || "Account created successfully");
        signIn(accountData?.email, accountData.password);
        return;
      }

      toast.dismiss();
      const errorMessage: string =
        (error?.message as string) ||
        (error?.message as string[])[0] ||
        defaultErrorMessage;

      toast.error(errorMessage);
    } catch {
      toast.error(defaultErrorMessage);
    }
  };

  return { createAccount };
};
