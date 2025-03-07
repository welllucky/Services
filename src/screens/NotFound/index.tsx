"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { CustomButton } from "@/components";
import { CaretLeft, House } from "@phosphor-icons/react";
import { Row, theme } from "@/styles";
import Image from "next/image";
import { buildTestIds } from "@/utils";
import {
  ButtonContainer,
  ContentContainer,
  Description,
  ErrorCode,
  PageContainer,
  Subtitle,
} from "./style";

const NotFoundPage = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleGoHome = () => {
    startTransition(() => {
      router.push("/");
    });
  };

  const handleGoBack = () => {
    startTransition(() => {
      router.back();
    });
  };

  return (
    <PageContainer>
      <Row
        width="100%"
        $alignItems="start"
        height="fit-content"
        $isSmallClientMobile={false}>
        <Image
          width={48}
          height={48}
          alt="Services logo"
          src="/Icon.png"
          priority
        />
      </Row>

      <ContentContainer>
        <div>
          <ErrorCode {...buildTestIds("not-found-error-code")}>404</ErrorCode>
          <Subtitle {...buildTestIds("not-found-subtitle")}>
            Ops! Parece que você pegou a curva errada.
          </Subtitle>
          <Description {...buildTestIds("not-found-description")}>
            O lugar que você está procurando pode ter sido removido, renomeado
            ou talvez você esteja delirando.
          </Description>

          <ButtonContainer>
            <CustomButton
              {...buildTestIds("not-found-go-home-button")}
              onClick={handleGoHome}
              disabled={isPending}
              text="Voltar ao início"
              icon={<House size={24} />}
            />

            <CustomButton
              {...buildTestIds("not-found-go-back-button")}
              mode="outlined"
              text="Voltar"
              $backgroundColor={theme.colors.neutral.inverted}
              color={theme.colors.neutral.inverted}
              onClick={handleGoBack}
              disabled={isPending}
              icon={(
                <CaretLeft
                  color={theme.colors.neutral.inverted}
                  size={26}
                  weight="bold"
                />
              )}
            />
          </ButtonContainer>
        </div>
      </ContentContainer>
    </PageContainer>
  );
};

export default NotFoundPage;
