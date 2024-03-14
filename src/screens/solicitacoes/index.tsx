"use client";

import { NoContent, Header, IssueDisplay, Loading } from "@/components";
import { MainContainer } from "../pesquisa/styles";
import { PageContainer } from "@/styles";
import { useTheme } from "styled-components";
import { IssueDisplayData } from "../home/data";

const RequestsPage = () => {
  const theme = useTheme();
  const isLoading = false;
  const listaChamados = IssueDisplayData;

  return (
    <>
      <Header
        userName={"Colaborador"}
        pageTittle="Chamados solicitados"
      />
      <PageContainer>
        {isLoading ? (
          <Loading overlayOn={false} />
        ) : (
          <MainContainer $hasContent={!!listaChamados}>
            {listaChamados?.length ? (
              listaChamados.map((issue) => {
                return (
                  <IssueDisplay
                    color="#9EDC72"
                    $borderColor="#61A12F"
                    key={issue.id}
                    id={issue.id}
                    nome={issue.nome}
                    date={issue.date}
                    $status={issue.$status}
                    isUpdated={issue.isUpdated}
                  />
                );
              })
            ) : (
              <NoContent
                alt="caixa vazia"
                title="Não há solicitações no momento."
                color={theme.colors.neutral["55"]}
              />
            )}
          </MainContainer>
        )}
      </PageContainer>
    </>
  );
};

export { RequestsPage };
