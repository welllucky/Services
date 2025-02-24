"use client";

import { CreateAccountDto, CreateAccountSchema } from "@/types";
import { useAuth } from "@/utils";
import { accountApi, enterpriseApi } from "@/utils/apis";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useShallow } from "zustand/react/shallow";
import { registerStore } from "./register.store";

const defaultErrorMessage = "Error creating account";

export const useRegister = () => {
  const { signIn } = useAuth();
  const methods = useForm<CreateAccountDto>({
    resolver: zodResolver(CreateAccountSchema),
    mode: "onChange",
  });

  const {
    rolesOptions,
    sectorsOptions,
    selectedSector,
    setRolesOptions,
    setSectorsOptions,
    setSelectedSector,
  } = registerStore(
    useShallow((state) => ({
      selectedSector: state.selectedSector,
      setSelectedSector: state.setSelectedSector,
      sectorsOptions: state.sectorsOptions,
      setSectorsOptions: state.setSectorsOptions,
      rolesOptions: state.rolesOptions,
      setRolesOptions: state.setRolesOptions,
    })),
  );

  const selectedSectorValue = methods.watch("sector");

  const { data: sectors } = enterpriseApi.getSectors(!sectorsOptions.length);
  const { data: roles } = enterpriseApi.getRolesBySector({
    sectorId: selectedSector,
    shouldFetch: Boolean(selectedSector),
  });

  useEffect(() => {
    if (sectors?.data?.length && !selectedSector) {
      setSectorsOptions(sectors);
    }

    if (roles?.data?.length) {
      setRolesOptions(roles);
    }
  }, [roles, sectors, selectedSector, setRolesOptions, setSectorsOptions]);

  useEffect(() => {
    if (selectedSectorValue) {
      setSelectedSector(selectedSectorValue);
    }
  }, [selectedSectorValue, setSelectedSector]);

  const createAccount = async (accountData: CreateAccountDto) => {
    try {
      toast.loading("Creating account...");

      const { status, error, message } = await accountApi.create({
        data: accountData,
      });

      if (status === 201) {
        toast.dismiss();
        toast.success(message ?? "Account created successfully");
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

  return {
    createAccount,
    roles: rolesOptions,
    sectors: sectorsOptions,
    methods,
    selectedSector,
  };
};
