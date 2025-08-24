import { useMemo } from "react";
import { ControllerFieldState } from "react-hook-form";

import { InputStatus } from "@/types";

interface InputHookProps {
  value: unknown;
  fieldState: ControllerFieldState;
  status: InputStatus;
  errorText?: string;
  isDisabled?: boolean;
}

export const useCustomInput = ({
  fieldState,
  value,
  status,
  errorText,
  isDisabled,
}: InputHookProps) => {
  const dateFieldSuccessValidation =
    typeof value !== "undefined" && value !== null && value !== "";

  const hasErrorState = useMemo(
    () =>
      Boolean(
        status === "invalid" || Boolean(fieldState.error || fieldState.invalid),
      ),
    [fieldState.error, fieldState.invalid, status],
  );

  const hasSuccessState = useMemo(() => {
    return (
      Boolean(status === "valid" || dateFieldSuccessValidation) &&
      !hasErrorState
    );
  }, [status, dateFieldSuccessValidation, hasErrorState]);

  const errorMessageText = useMemo(
    () =>
      errorText ??
      fieldState?.error?.message ??
      fieldState?.error?.root?.message,
    [fieldState.error?.message, fieldState.error?.root?.message, errorText],
  );

  const internalStatus: InputStatus = useMemo(() => {
    if (isDisabled) return "disabled";
    if (hasErrorState) return "invalid";
    if (hasSuccessState) return "valid";
    if (status === "warning") return "warning";
    return "none";
  }, [hasErrorState, hasSuccessState, isDisabled, status]);

  return {
    hasErrorState,
    hasSuccessState,
    errorMessageText,
    internalStatus,
  };
};
