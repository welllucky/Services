"use client";

import { AddNewIssueButton, Header, Loading, NoContent } from "@/components";
import { InfoDisplay } from "@/components/InfoDisplay";
import { PageContainer } from "@/styles";
import { issueApi } from "@/utils";
import { useRouter } from "next/navigation";
import { MainContainer } from "../pesquisa/styles";
import { ButtonWrapper } from "./styles";

const MyCallsPage = () => {
  const { push } = useRouter();
  const { data, isLoading } = issueApi.getIssues();
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
            <MainContainer $hasContent={!!issuesQuantity}>
              {data?.length ? (
                data.map((issue) => (
                  <InfoDisplay
                    key={issue.id}
                    id={issue.id}
                    nome={issue.resume}
                    date={issue.date}
                    $status="Registrado"
                    isUpdated
                  />
                ))
              ) : (
                <NoContent
                  alt="caixa vazia"
                  title="Não há chamados no momento."
                />
              )}
            </MainContainer>
            <ButtonWrapper>
              {issuesQuantity < 5 ? (
                <AddNewIssueButton
                  onClick={() => push("/abrir-chamado")}
                  $styles={{ hasShadow: true }}
                />
              ) : null}
            </ButtonWrapper>
          </>
        )}
      </PageContainer>
    </>
  );
};

export { MyCallsPage };
