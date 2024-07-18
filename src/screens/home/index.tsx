"use client";

import { Header, Loading, NoContent } from "@/components/";
import { AddNewIssueButton } from "@/components/common/Buttons";
import { InfoDisplay } from "@/components/InfoDisplay";
import { PageContainer } from "@/styles";
import { SS_KEY_USER_PREVIOUS_PAGE, dataFormatter, issueApi } from "@/utils";
import { useRouter } from "next/navigation";
import { useTheme } from "styled-components";
import { MainContainer } from "../pesquisa/styles";
import { ButtonWrapper } from "./styles";

const Homepage = () => {
  const theme = useTheme();
  const { push } = useRouter();
  const { data, isLoading } = issueApi.getIssues();
  const issuesQuantity = data?.length ?? 0;

  if (isLoading) {
    return <Loading overlayOn={false} />;
  }

  return (
    <>
      <Header
        userName="Colaborador"
        pageTittle="Meus chamados"
        issueQuantify={issuesQuantity}
      />
      <PageContainer>
        <MainContainer $hasContent={issuesQuantity !== 0}>
          {data?.length ? (
            data.map((issue) => (
              <InfoDisplay
                key={issue?.id}
                id={issue?.id}
                nome={issue?.description}
                date={dataFormatter(issue.date)}
                $status="Registrado"
                isUpdated={false}
              />
            ))
          ) : (
            <NoContent
              alt="caixa vazia"
              title="Não há chamados no momento."
              color={theme.colors.neutral["5"]}
            />
          )}
        </MainContainer>
        <ButtonWrapper>
          {issuesQuantity < 5 ? (
            <AddNewIssueButton
              $styles={{ hasShadow: true }}
              onClick={() => {
                sessionStorage.setItem(SS_KEY_USER_PREVIOUS_PAGE, "home");
                push("/abrir-chamado");
              }}
            />
          ) : null}
        </ButtonWrapper>
      </PageContainer>
    </>
  );
};

export { Homepage };
