"use client";

import { CustomButton } from "@/components";
import { buildTestIds } from "@/utils/functions";
import { useRouter } from "next/navigation";
import { ButtonsContainer, FormButtonsContainer } from "./styles";

interface FormButtonsProps {
  canBack?: boolean;
  canNext?: boolean;
  nextPage: string;
  hasBackButton?: boolean;
  $hasSeparator?: boolean;
  onClickNextButton?: () => void;
  onClickBackButton?: () => void;
}

const FormButtons = ({
  canBack = true,
  canNext = true,
  hasBackButton = true,
  nextPage,
  $hasSeparator = true,
  onClickNextButton,
  onClickBackButton
}: FormButtonsProps) => {
  const { back, push } = useRouter();
  return (
    <FormButtonsContainer
      $hasSeparator={$hasSeparator}
      {...buildTestIds("form-buttons-container")}>
      <ButtonsContainer $gap="8px" {...buildTestIds("form-buttons")}>
        {hasBackButton && (
          <CustomButton
            disabled={!canBack}
            height="40px"
            mode="outlined"
            text="Voltar"
            onClick={() => {
              if (onClickBackButton) onClickBackButton();
              back();
            }}
            {...buildTestIds("back-button-form-buttons")}
          />
        )}

        <CustomButton
          type="submit"
          $backgroundColor="#7AC143"
          color="white"
          text="Próximo"
          height="40px"
          disabled={!canNext}
          onClick={() => {
            if (onClickNextButton) {
              onClickNextButton();
            } else {
              push(nextPage);
            }
          }}
          {...buildTestIds("next-button-form-buttons")}
        />
      </ButtonsContainer>
    </FormButtonsContainer>
  );
};

export { FormButtons };
