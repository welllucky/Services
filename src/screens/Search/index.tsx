"use client";

import { searchApi, useAuth } from "@/utils";
import { useDebounce } from "@uidotdev/usehooks";
import { useMemo, useState } from "react";
import SearchPageUI from "./UI";

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 900);

  const { accessToken } = useAuth();

  const { data: result, isLoading } = searchApi.getSearch(
    debouncedSearchTerm,
    accessToken ?? "",
    Boolean(debouncedSearchTerm && accessToken),
  );

  const searchResults = useMemo(() => result?.data, [result]);

  return (
    <SearchPageUI
      setSearchTerm={setSearchTerm}
      searchResults={searchResults}
      searchTerm={searchTerm}
      isLoading={Boolean(isLoading)}
    />
  );
};

export default SearchPage;
