"use client";

import { AddNewIssueButton } from "@/components/common/Buttons";
import { IssueDisplay, Loading, Header, NoContent } from "@/components";
import { PageContainer } from "@/styles";
import { useTheme } from "styled-components";
import { SS_KEY_USER_PREVIOUS_PAGE, chamado, dataFormatter } from "@/utils";
import { useRouter } from "next/navigation";
import { MainContainer } from "../pesquisa/styles";
import { ButtonWrapper } from "./styles";

const Homepage = () => {
  const theme = useTheme();
  const { push } = useRouter();
  const { data, isLoading } = chamado.getChamados();
  const issuesQuantity = data?.length ?? 0;
  return (
    <>
      <Header
        userName="Colaborador"
        pageTittle="Meus chamados"
        issueQuantify={issuesQuantity}
      />
      <PageContainer>
        {isLoading ? (
          <Loading overlayOn={false} />
        ) : (
          <>
            <MainContainer $hasContent={issuesQuantity !== 0}>
              {data?.length ? (
                data.map((issue) => (
                  <IssueDisplay
                    key={issue?.id}
                    id={issue?.id}
                    nome={issue?.description}
                    date={dataFormatter(issue?.date)}
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
          </>
        )}
      </PageContainer>
    </>
  );
};

export { Homepage };
