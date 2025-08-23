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
    positionsOptions,
    sectorsOptions,
    selectedSector,
    setPositionsOptions,
    setSectorsOptions,
    setSelectedSector,
  } = registerStore(
    useShallow((state) => ({
      selectedSector: state.selectedSector,
      setSelectedSector: state.setSelectedSector,
      sectorsOptions: state.sectorsOptions,
      setSectorsOptions: state.setSectorsOptions,
      positionsOptions: state.positionsOptions,
      setPositionsOptions: state.setPositionsOptions,
    })),
  );

  const selectedSectorValue = methods.watch("sector");

  const { data: sectors } = enterpriseApi.getSectors(sectorsOptions?.length === 0);
  const { data: positions } = enterpriseApi.getRolesBySector({
    sectorId: sectorsOptions?.find((sector) => sector.value === selectedSector)?.key,
    shouldFetch: Boolean(selectedSector),
  });

  useEffect(() => {
    if (sectors?.data?.length) {
      setSectorsOptions(sectors.data);
    }

    if (positions?.data?.length) {
      setPositionsOptions(positions.data);
    }
  }, [positions, sectors, setPositionsOptions, setSectorsOptions]);

  useEffect(() => {
    if (selectedSectorValue) {
      setSelectedSector(selectedSectorValue);
    }
  }, [selectedSectorValue, setSelectedSector]);

  const createAccount = async (accountData: CreateAccountDto) => {
    const toastId = toast.loading("Criando conta...");

    try {
      const { status, error } = await accountApi.create({
        data: accountData,
      });

      if (status === 201) {
      signIn(accountData?.email, accountData.password);
      return;
    }

    const errorMessage: string =
      (error?.message as string) ||
      (error?.message as string[])[0] ||
      defaultErrorMessage;

    toast.error(errorMessage);
    } finally {
      toast.dismiss(toastId);
    }
  };

  return {
    createAccount,
    positions: positionsOptions,
    sectors: sectorsOptions,
    methods,
    selectedSector,
  };
};
