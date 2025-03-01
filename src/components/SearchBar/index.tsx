"use client";

import { SearchIcon } from "@/assets";
import { ChangeEvent, useState } from "react";
import { StyledSearchBar, StyledSearchBarContainer } from "./styles";

interface SearchBarProps {
  // eslint-disable-next-line no-unused-vars
  getInputValue: (value: string) => void;
}

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const SearchBar = ({ getInputValue }: SearchBarProps) => {
  const [search, setSearch] = useState("");

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target?.value);
    getInputValue(event.target?.value);
  };

  return (
    <StyledSearchBarContainer
      $borderColor="#7AC143"
      $padding="0 .4rem 0 .8rem ">
      <SearchIcon
        color="#5A8F19"
        size="1.4rem"
        type="bold"
      />
      <StyledSearchBar
        onChange={handleSearch}
        value={search}
        type="text"
        placeholder="Pesquise o nome ou id do chamado"
        fontSize="0.9rem"
      />
    </StyledSearchBarContainer>
  );
};

export { SearchBar };
