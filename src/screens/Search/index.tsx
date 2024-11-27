"use client";

import { searchApi } from "@/utils";
import { useDebounce } from "@uidotdev/usehooks";
import { useState } from "react";
import { SearchPageUI } from "./UI";

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 900);

  const { data: searchResults, isLoading } = searchApi.getSearch(
    debouncedSearchTerm,
    !!debouncedSearchTerm,
  );

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
