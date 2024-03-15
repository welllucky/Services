"use client";

import {
  AddNewIssueButton,
  IssueDisplay,
  Loading,
  Header,
  NoContent,
} from "@/components";
import { PageContainer } from "@/styles";
import { useRouter } from "next/navigation";
import { chamado } from "@/utils";
import { MainContainer } from "../pesquisa/styles";
import { ButtonWrapper } from "./styles";

function MyCallsPage() {
  const { push } = useRouter();
  const { data, isLoading } = chamado.getChamados();
  const issuesQuantity = data?.length || 0;
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
                  <IssueDisplay
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
                  styles={{ hasShadow: true }}
                />
              ) : null}
            </ButtonWrapper>
          </>
        )}
      </PageContainer>
    </>
  );
}

export { MyCallsPage };
