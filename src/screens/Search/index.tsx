"use client";

import { Header, NoContent } from "@/components";
import { TicketCard, TicketCardProps } from "@/components/TicketCard";
import { PageContainer } from "@/styles";
import { useTheme } from "styled-components";
import { Loading } from "../../components/Loading";
import { SearchBar } from "../../components/SearchBar";
import { MainContainer, SearchContainer } from "./styles";

const SearchPage = ({
  searchResults,
}: {
  searchResults: TicketCardProps[];
}) => {
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
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
          <MainContainer $hasContent={searchResults.length !== 0}>
            {searchResults?.length ? (
              searchResults.map((issue) => (
                <TicketCard
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
              />
            )}
          </MainContainer>
        )}
      </PageContainer>
    </>
  );
};

export { SearchPage };
