"use client";

/* eslint-disable react/no-array-index-key */
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import {
  Button,
  ButtonContainer,
  ContentContainer,
  Description,
  ErrorCode,
  PageContainer,
  Subtitle,
} from "./style";

const ServerError = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleRefresh = () => {
    startTransition(() => {
      router.refresh();
    });
  };

  const handleGoHome = () => {
    startTransition(() => {
      router.push("/");
    });
  };

  return (
    <PageContainer>
      <ContentContainer>
        <ErrorCode>500</ErrorCode>
        <Subtitle>Houston, temos um problema!</Subtitle>
        <Description>
          Nossos servidores encontraram um erro inesperado. Nossa equipe de
          engenheiros já foi notificada e está trabalhando para resolver o
          problema.
        </Description>

        <ButtonContainer>
          <Button
            $primary
            onClick={handleRefresh}
            disabled={isPending}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C14.8273 3 17.35 4.30655 19 6.34267"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19 2V6.5M19 6.5H14.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Tentar novamente
          </Button>
          <Button
            onClick={handleGoHome}
            disabled={isPending}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3 12L5 10M5 10L12 3L19 10M5 10V20C5 20.5523 5.44772 21 6 21H9M19 10L21 12M19 10V20C19 20.5523 18.5523 21 18 21H15M9 21C9.55228 21 10 20.5523 10 20V16C10 15.4477 10.4477 15 11 15H13C13.5523 15 14 15.4477 14 16V20C14 20.5523 14.4477 21 15 21M9 21H15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Ir para a página inicial
          </Button>
        </ButtonContainer>
      </ContentContainer>
    </PageContainer>
  );
};

export default ServerError;
