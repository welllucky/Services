import { ReactElement, useCallback, useState } from "react";
import { Check, Question } from "@phosphor-icons/react";
import { useTheme } from "styled-components";
import { CustomButton } from "@/components";
import { useModalStore } from "@/utils";
import { buildTestIds } from "@/utils/functions";
import {
  ConfirmModalWrapper,
  ConfirmModalText,
  ConfirmModalButtons,
} from "./styles";
import { CustomModal, ModalProps } from "..";

interface ConfirmModalProps extends ModalProps {
  successIcon?: ReactElement;
  confirmationIcon?: ReactElement;
  successText: string;
  confirmationText?: string;
  hasBackButton?: boolean;
  mode?: "confirm" | "vitrine";
  confirmCallBack?: () => void;
}

const ConfirmModal = ({
  successIcon,
  successText,
  confirmationIcon,
  confirmationText,
  hasBackButton,
  mode = "confirm",
  confirmCallBack,
  ...props
}: ConfirmModalProps) => {
  const theme = useTheme();
  const shouldCloseModal = useModalStore((state) => state.close);
  const [changeToVitrine, setChangeToVitrine] = useState<boolean>(
    mode === "vitrine",
  );

  const modalCallBack = useCallback(() => {
    if (!changeToVitrine) setChangeToVitrine(true);

    setTimeout(() => {
      if (confirmCallBack) confirmCallBack();
      shouldCloseModal();
    }, 2000);
  }, []);

  return (
    <CustomModal
      shouldCloseOnOverlayClick
      shouldCloseOnEsc
      backgroundColor="transparent"
      {...props}
      testId="modal-success">
      <ConfirmModalWrapper
        $wasConfirmed={changeToVitrine}
        $shouldHavePaddingBottom={changeToVitrine}>
        {changeToVitrine
          ? successIcon ?? (
          <Check
            color={theme.colors.neutral.default}
            size="6rem"
            alt="sinal de confirmação"
              />
          )
          : confirmationIcon ?? (
          <Question
            color={theme.colors.neutral.default}
            size="6rem"
            alt="sinal de confirmação"
              />
          )}
        <ConfirmModalText {...buildTestIds("confirm-modal-text")}>
          {changeToVitrine ? successText : confirmationText}
        </ConfirmModalText>
        {!changeToVitrine && (
          <ConfirmModalButtons $gap="1rem">
            {hasBackButton && (
              <CustomButton
                {...buildTestIds("confirm-modal-back-button")}
                text="Voltar"
                color={theme.colors.neutral.default}
                $backgroundColor="transparent"
                height="60px"
                mode="outlined"
                $borderColor={theme.colors.neutral.default}
                onClick={shouldCloseModal}
              />
            )}
            <CustomButton
              {...buildTestIds("confirm-modal-confirm-button")}
              text="Confirmar"
              color={theme.colors.neutral.default}
              $backgroundColor={theme.colors.primary.default}
              height="40px"
              mode="filled"
              onClick={modalCallBack}
              $borderColor={theme.colors.neutral.default}
            />
          </ConfirmModalButtons>
        )}
      </ConfirmModalWrapper>
    </CustomModal>
  );
};

export { ConfirmModal };
