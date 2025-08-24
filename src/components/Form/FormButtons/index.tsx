"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { useTheme } from "styled-components";

import { CustomButton } from "@/components/common/Buttons/Button";
import { buildTestIds } from "@/utils/functions";

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
  nextPage,
  onClickNextButton,
  onClickBackButton,
  canBack = true,
  canNext = true,
  hasBackButton = true,
  $hasSeparator = true,
}: FormButtonsProps) => {
  const theme = useTheme();
  const { back, push } = useRouter();

  const backButtonFn = useCallback(() => {
    if (onClickBackButton) onClickBackButton();
    back();
  }, [back, onClickBackButton]);

  const nextButtonFn = useCallback(() => {
    if (onClickNextButton) {
      onClickNextButton();
    } else {
      push(nextPage);
    }
  }, [nextPage, onClickNextButton, push]);

  return (
    <FormButtonsContainer
      $hasSeparator={$hasSeparator}
      {...buildTestIds("form-buttons-container")}>
      <ButtonsContainer
        $gap="8px"
        {...buildTestIds("form-buttons")}>
        {hasBackButton && (
          <CustomButton
            color={theme.colors.neutral["15"]}
            $backgroundColor={theme.colors.neutral["15"]}
            disabled={!canBack}
            height="40px"
            mode="outlined"
            text="Voltar"
            onClick={backButtonFn}
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
          onClick={nextButtonFn}
          {...buildTestIds("next-button-form-buttons")}
        />
      </ButtonsContainer>
    </FormButtonsContainer>
  );
};

export { FormButtons };
