import { NoContent, Skeleton } from "@/components";
import { PageContainer } from "@/styles";
import { SearchResponse } from "@/utils/apis/Search.api";
import { useMemo } from "react";
import { Results } from "./results";
import { MainContainer } from "./styles";

interface ContentProps {
  isLoading: boolean;
  searchResults?: SearchResponse;
  searchTerm: string;
}

export const Content = ({
  isLoading,
  searchResults,
  searchTerm,
}: ContentProps) => {
  const hasContent = useMemo(
    () => Boolean(searchResults?.length),
    [searchResults],
  );

  const isEmpty = useMemo(() => searchTerm.length === 0, [searchTerm]);

  const showNoResults = useMemo(
    () => !isLoading && !hasContent && !isEmpty,
    [isLoading, hasContent, isEmpty],
  );

  const showEmptyContent = useMemo(
    () => isEmpty && !hasContent,
    [isEmpty, hasContent],
  );

  const showResults = useMemo(
    () => !isLoading && hasContent,
    [isLoading, hasContent],
  );

  return (
    <PageContainer>
      {isLoading && searchTerm ? (
        <Skeleton
          type="page"
          quantity={5}
        />
      ) : (
        <MainContainer $centerContent={!showResults}>
          {showResults && <Results result={searchResults} />}

          {showNoResults && (
            <NoContent
              alt="Sem resultados"
              title="Nenhum chamado encontrado"
            />
          )}

          {showEmptyContent && (
            <NoContent
              alt="caixa vazia"
              title="Procure por chamados e solicitações"
            />
          )}
        </MainContainer>
      )}
    </PageContainer>
  );
};
