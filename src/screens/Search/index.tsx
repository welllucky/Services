"use client";

import { searchApi } from "@/utils";
import { SearchResponse } from "@/utils/apis/Search";
import { useDebounce } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";
import { SearchPageUI } from "./UI";

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResponse>(
    {} as SearchResponse,
  );
  const debouncedSearchTerm = useDebounce(searchTerm, 900);

  const { data, isLoading } = searchApi.getSearch(
    debouncedSearchTerm,
    !!debouncedSearchTerm,
  );

  useEffect(() => {
    if (data?.result) {
      setSearchResults(data);
    } else if (debouncedSearchTerm === "") {
      setSearchResults({} as SearchResponse);
    }
  }, [data, debouncedSearchTerm]);

  return (
    <SearchPageUI
      setSearchTerm={setSearchTerm}
      searchResults={searchResults}
      searchTerm={searchTerm}
      isLoading={isLoading}
    />
  );
};

export { SearchPage };
