"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useShallow } from "zustand/react/shallow";

import { appMonitoringClient } from "@/implementations/client";
import { CreateAccountDto, CreateAccountSchema } from "@/types";
import { useAuth } from "@/utils";
import { accountApi, enterpriseApi } from "@/utils/apis";

import { registerStore } from "./register.store";

const defaultErrorMessage = "Error creating account";

export const useRegister = () => {
  const { signIn } = useAuth();

  // Breadcrumb para início do registro
  appMonitoringClient.addBreadcrumb({
    message: "Register form initialized",
    category: "auth.register",
    level: "info",
  });

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
      appMonitoringClient.addBreadcrumb({
        message: "Sectors loaded for registration",
        category: "auth.register.data",
        level: "info",
        data: {
          sectorsCount: sectors.data.length,
        },
      });
      setSectorsOptions(sectors.data);
    }

    if (positions?.data?.length) {
      appMonitoringClient.addBreadcrumb({
        message: "Positions loaded for registration",
        category: "auth.register.data",
        level: "info",
        data: {
          positionsCount: positions.data.length,
          selectedSector,
        },
      });
      setPositionsOptions(positions.data);
    }
  }, [positions, sectors, setPositionsOptions, setSectorsOptions, selectedSector]);

  useEffect(() => {
    if (selectedSectorValue) {
      appMonitoringClient.addBreadcrumb({
        message: "Sector selected during registration",
        category: "auth.register.interaction",
        level: "info",
        data: {
          selectedSector: selectedSectorValue,
        },
      });
      setSelectedSector(selectedSectorValue);
    }
  }, [selectedSectorValue, setSelectedSector]);

  const createAccount = async (accountData: CreateAccountDto) => {
    const toastId = toast.loading("Criando conta...");

    appMonitoringClient.addBreadcrumb({
      message: "Account creation started",
      category: "auth.register.submit",
      level: "info",
      data: {
        email: accountData.email ? `${accountData.email.substring(0, 3)}***` : "empty",
        name: accountData.name ? `${accountData.name.substring(0, 3)}***` : "empty",
        sector: accountData.sector || "not_selected",
        position: accountData.position || "not_selected",
      },
    });

    try {
      const { status, error } = await accountApi.create({
        data: accountData,
      });

      if (status === 201) {
        appMonitoringClient.addBreadcrumb({
          message: "Account created successfully",
          category: "auth.register.success",
          level: "info",
          data: {
            email: `${accountData.email.substring(0, 3)}***`,
            autoSignIn: true,
          },
        });

        appMonitoringClient.addBreadcrumb({
          message: "New account created successfully",
          category: "auth.register.success",
          level: "info",
          data: {
            source: "register_hook",
            action: "create_account",
            status: "success",
          },
        });

        signIn(accountData?.email, accountData.password);
        return;
      }

      const errorMessage: string =
        (error?.message as string) ||
        (error?.message as string[])[0] ||
        defaultErrorMessage;

      appMonitoringClient.addBreadcrumb({
        message: "Account creation failed",
        category: "auth.register.error",
        level: "error",
        data: {
          status,
          errorMessage,
          email: `${accountData.email.substring(0, 3)}***`,
        },
      });

      appMonitoringClient.captureException(`Account creation failed: ${errorMessage}`, {
        tags: {
          source: "register_hook",
          action: "create_account",
          status: "failed",
          ...(status && {httpStatus: status}),
        },
      });

      toast.error(errorMessage);
    } catch (err) {
      appMonitoringClient.addBreadcrumb({
        message: "Account creation exception",
        category: "auth.register.error",
        level: "error",
        data: {
          email: `${accountData.email.substring(0, 3)}***`,
        },
      });

      appMonitoringClient.captureException(err, {
        tags: {
          source: "register_hook",
          action: "create_account",
        },
      });

      toast.error(defaultErrorMessage);
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
