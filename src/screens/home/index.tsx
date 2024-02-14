"use client";

import { AddNewIssueButton } from "@/components/common/Buttons";
import { IssueMobile } from "@/components/CalledMobile";
import { Header } from "@/components";
import { ButtonWrapper } from "./styles";
import { PageContainer } from "@/styles";
import { Loading } from "@/components/Loading";
import { MainContainer } from "../pesquisa/styles";
import { NoContent } from "@/components";
import { useTheme } from "styled-components";
import { chamado, dataFormatter } from "@/utils";
import { useRouter } from "next/navigation";

const Homepage = () => {
  const theme = useTheme();
  const { push } = useRouter();
  const { data, isLoading } = chamado.getChamados();
  const issuesQuantity = data?.length || 0;
  
  console.log(data);
  return (
    <>
      <Header
        userName={"Colaborador"}
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
                data.map((issue) => {
                  return (
                    <IssueMobile
                      key={issue?.id}
                      id={issue?.id}
                      nome={issue?.description}
                      date={dataFormatter(issue?.date)}
                      $status={"Registrado"}
                      isUpdated={false}
                    />
                  );
                })
              ) : (
                <NoContent
                  alt="caixa vazia"
                  title="Não há chamados no momento."
                  color={theme.colors.neutral["55"]}
                />
              )}
            </MainContainer>
            <ButtonWrapper>
              {issuesQuantity < 5 ? (
                <AddNewIssueButton
                  styles={{ hasShadow: true }}
                  onClick={() => push("/abrir-chamado")}
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
