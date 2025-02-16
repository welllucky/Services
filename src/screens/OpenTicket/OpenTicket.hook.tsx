import {
  LS_KEY_1_TICKET_RECORD,
  SS_KEY_USER_PREVIOUS_PAGE,
} from "@/constraints";
import { IOpenTicketForm } from "@/types";
import { issueApi, useModalStore, useTicketStore } from "@/utils";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import toast from "react-hot-toast";

export const useOpenTicket = () => {
  const { push } = useRouter();
  const [formData, setFormData] = useTicketStore((state) => [
    state.ticket,
    state.setTicket,
  ]);
  const [canRegisterIssue, setCanRegisterIssue] = useState(false);

  const {
    control,
    setValue,
    getValues,
    formState: { errors, isValid, isValidating },
  } = useFormContext<IOpenTicketForm>();

  const isModalOpen = useModalStore((state) => state.isOpen);

  const { data, error } = issueApi.createIssue(formData, canRegisterIssue);

  const recoverFormData = useCallback(
    (showToast?: boolean) => {
      const isFromOutsideForm =
        (sessionStorage.getItem(SS_KEY_USER_PREVIOUS_PAGE) as string) !==
        "form";

      const recoveredData = JSON.parse(
        localStorage.getItem(LS_KEY_1_TICKET_RECORD) as string,
      );

      if (recoveredData) {
        setFormData(recoveredData);
        setValue("resume", recoveredData?.resume, { shouldValidate: true });
        setValue("description", recoveredData?.description, {
          shouldValidate: true,
        });
        setValue("date", recoveredData?.date, { shouldValidate: true });
        setValue("type", recoveredData?.type, { shouldValidate: true });
        setValue("priority", recoveredData?.priority, {
          shouldValidate: true,
        });

        if (isFromOutsideForm && showToast) {
          toast.success("Dados recuperados com sucesso!");
        }
      }
    },
    [setValue],
  );

  const sendTicketRegister = useCallback(() => {
    setCanRegisterIssue(true);
  }, []);

  useEffect(() => {
    if (isValid && !isValidating) {
      localStorage.setItem(
        LS_KEY_1_TICKET_RECORD,
        JSON.stringify({ ...getValues() }),
      );
    }
  }, [getValues, isValid, isValidating]);

  useEffect(() => {
    if (data?.id) {
      setCanRegisterIssue(false);
      setTimeout(() => {
        push(`/ticket/${data?.id}`);
      }, 3000);
    }

    if (error) {
      toast.error("Erro ao registrar chamado. Tente novamente.");
      push("/");
    }

    return () => {
      setCanRegisterIssue(false);
    };
  }, [data?.id, error]);

  return {
    recoverFormData,
    control,
    errors,
    isValid,
    isValidating,
    formData,
    isModalOpen,
    sendTicketRegister,
  };
};
