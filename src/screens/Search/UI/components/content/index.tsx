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

const Content = ({ isLoading, searchResults, searchTerm }: ContentProps) => {
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
    <PageContainer $start={!(showNoResults || showEmptyContent)}>
      <MainContainer $centerContent={!showResults}>
        {isLoading && searchTerm && (
          <Skeleton
            type="page"
            quantity={5}
          />
        )}

        {showResults && <Results result={searchResults} />}

        {Boolean(showNoResults || showEmptyContent) && (
          <NoContent
            alt="Sem resultados"
            title={
              showNoResults
                ? "Nenhum chamado encontrado"
                : "Procure por chamados e solicitações"
            }
          />
        )}
      </MainContainer>
    </PageContainer>
  );
};

export { Content };
