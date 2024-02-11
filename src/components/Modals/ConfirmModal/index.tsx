import { ReactElement, useCallback, useState } from "react";
import { CustomModal, ModalProps } from "..";
import { Check, Question } from "@phosphor-icons/react";
import {
  ConfirmModalWrapper,
  ConfirmModalText,
  ConfirmModalButtons
} from "./styles";
import { useTheme } from "styled-components";
import { CustomButton } from "@/components";
import { useModalStore } from "@/utils";

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
    mode === "vitrine"
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
                size={"6rem"}
                alt="sinal de confirmação"
              />
            )
          : confirmationIcon ?? (
              <Question
                color={theme.colors.neutral.default}
                size={"6rem"}
                alt="sinal de confirmação"
              />
            )}
        <ConfirmModalText>
          {changeToVitrine ? successText : confirmationText}
        </ConfirmModalText>
        {!changeToVitrine && (
          <ConfirmModalButtons $gap="1rem">
            {hasBackButton && (
              <CustomButton
                text="Voltar"
                color={theme.colors.neutral.default}
                $backgroundColor="transparent"
                height="40px"
                mode="outlined"
                $$borderColor={theme.colors.neutral.default}
                onClick={shouldCloseModal}
              />
            )}
            <CustomButton
              text="Confirmar"
              color={theme.colors.neutral.default}
              $backgroundColor={theme.colors.green.default}
              height="40px"
              mode="filled"
              onClick={modalCallBack}
              $$borderColor={theme.colors.neutral.default}
            />
          </ConfirmModalButtons>
        )}
      </ConfirmModalWrapper>
    </CustomModal>
  );
};

export { ConfirmModal };
