"use client";

import { NoContent, Header, IssueDisplay } from "@/components";
import { IssueDisplayProps } from "@/types";
import { useTheme } from "styled-components";
import { PageContainer } from "@/styles";
import { Loading } from "../../components/Loading";
import { MainContainer, SearchContainer } from "./styles";
import { SearchBar } from "../../components/SearchBar";

const SearchPage = ({
  searchResults,
}: {
  searchResults: IssueDisplayProps[];
}) => {
  const theme = useTheme();
  const isLoading = false;
  const setSearch = (value: string) => value;

  return (
    <>
      <Header userName="Colaborador" />
      <SearchContainer>
        <SearchBar getInputValue={(value: string) => setSearch(value)} />
      </SearchContainer>
      <PageContainer>
        {isLoading ? (
          <Loading overlayOn={false} />
        ) : (
          <MainContainer $hasContent={!!searchResults}>
            {searchResults?.length ? (
              searchResults.map((issue) => (
                <IssueDisplay
                  key={issue.id}
                  id={issue.id}
                  nome={issue.nome}
                  date={issue.date}
                  $status={issue.$status}
                  isUpdated={issue.isUpdated}
                />
              ))
            ) : (
              <NoContent
                alt="caixa vazia"
                title="Pesquise pelo seu chamado"
                color={theme.colors.neutral["55"]}
              />
            )}
          </MainContainer>
        )}
      </PageContainer>
    </>
  );
};

export { SearchPage };
