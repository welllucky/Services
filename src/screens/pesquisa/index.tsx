"use client";

import { useState } from "react";
import { SearchBar } from "../../components/SearchBar";
import { MainContainer, SearchContainer } from "./styles";
import { Loading } from "../../components/Loading";
import { NoContent, Header, IssueMobile } from "@/components";
import { IssueMobileProps } from "@/types";
import { useTheme } from "styled-components";
import { PageContainer } from "@/styles";

const SearchPage = ({
  searchResults
}: {
  searchResults: IssueMobileProps[];
}) => {
  const theme = useTheme();
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <>
      <Header userName={"Colaborador"} />
      <SearchContainer>
        <SearchBar getInputValue={(value: string) => setSearch(value)} />
      </SearchContainer>
      <PageContainer>
        {isLoading ? (
          <Loading overlayOn={false} />
        ) : (
          <>
            <MainContainer $hasContent={!!searchResults}>
              {searchResults?.length ? (
                searchResults.map((issue) => {
                  return (
                    <IssueMobile
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
                  title="Pesquise pelo seu chamado"
                  color={theme.colors.neutral["55"]}
                />
              )}
            </MainContainer>
          </>
        )}
      </PageContainer>
    </>
  );
};

export { SearchPage };
