import {
  LS_KEY_1_TICKET_RECORD,
  SS_KEY_USER_PREVIOUS_PAGE,
} from "@/constraints";
import { IOpenTicketForm } from "@/types";
import { useCallback, useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import toast from "react-hot-toast";

export const useOpenTicket = () => {
  const [formData, setFormData] = useState<IOpenTicketForm>(
    {} as IOpenTicketForm,
  );
  const {
    control,
    setValue,
    getValues,
    formState: { errors, isValid, isValidating },
  } = useFormContext<IOpenTicketForm>();

  const recoverFormData = useCallback(() => {
    const isFromOutsideForm =
      (sessionStorage.getItem(SS_KEY_USER_PREVIOUS_PAGE) as string) !== "form";

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

      if (isFromOutsideForm) {
        toast.success("Dados recuperados com sucesso!");
      }
    }
  }, [setValue]);

  useEffect(() => {
    if (isValid && !isValidating) {
      localStorage.setItem(
        LS_KEY_1_TICKET_RECORD,
        JSON.stringify({ ...getValues() }),
      );
    }
  }, [getValues, isValid, isValidating]);

  return {
    recoverFormData,
    control,
    errors,
    isValid,
    isValidating,
    formData,
  };
};
