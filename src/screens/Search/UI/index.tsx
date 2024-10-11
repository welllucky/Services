import { Header } from "@/components";
import { SearchResponse } from "@/utils/apis/Search";
import { Content, SearchBarComponent } from "./components";

type SearchPageUIProps = {
  // eslint-disable-next-line no-unused-vars
  setSearchTerm: (value: string) => void;
  searchResults: SearchResponse;
  searchTerm: string;
  isLoading: boolean;
};

const SearchPageUI = ({
  setSearchTerm,
  searchResults,
  searchTerm,
  isLoading,
}: SearchPageUIProps) => (
  <>
    <Header userName="Colaborador" />
    <SearchBarComponent getInputValue={setSearchTerm} />
    <Content
      isLoading={isLoading}
      searchResults={searchResults}
      searchTerm={searchTerm}
    />
  </>
);

export { SearchPageUI };
