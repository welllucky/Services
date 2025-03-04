import { Loading } from "@/components";
import { PageContainer } from "@/styles";
import { SearchResponse } from "@/utils/apis/Search.api";
import { useMemo } from "react";
import { EmptyContent } from "./empty";
import { NoResults } from "./noResults";
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
    () => Boolean(searchResults?.result?.length),
    [searchResults],
  );

  const isEmpty = useMemo(() => searchTerm.length === 0, [searchTerm]);

  return (
    <PageContainer>
      {isLoading && searchTerm ? (
        <Loading $overlayOn={false} />
      ) : (
        <MainContainer>
          <Results result={searchResults?.result} />
          <NoResults showNoResults={!hasContent && !isEmpty} />
          <EmptyContent isEmpty={isEmpty && !hasContent} />
        </MainContainer>
      )}
    </PageContainer>
  );
};
