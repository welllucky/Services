"use client";

import { CreateAccountDto, CreateAccountSchema } from "@/types";
import { accountApi } from "@/utils/apis";
import toast from "react-hot-toast";

export const useRegister = () => {
  const createAccount = async (accountData: CreateAccountDto) => {
    const { error: dataError } = CreateAccountSchema.safeParse(accountData);

    if (dataError) {
      dataError.errors.map((error) => toast.error(error.message));
      return { validationError: dataError.errors };
    }

    const { data, status, error } = await accountApi.create({ data: accountData });

    if (status === 201) {
      toast.success("Account created successfully");
      return { data };
    }

    toast.error("Error creating account");
    return { error };
  };

  return { createAccount };
};
