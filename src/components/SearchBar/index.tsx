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

  return (
    <StyledSearchBarContainer
      $borderColor="#7AC143"
      padding="0 .4rem 0 .8rem ">
      <SearchIcon
        color="#5A8F19"
        height="1.4rem"
        width="1.4rem"
      />
      <StyledSearchBar
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setSearch(event.target?.value);
          getInputValue(event.target?.value);
        }}
        value={search}
        type="text"
        placeholder="Pesquise o nome ou id do chamado "
      />
      {/* <Divider
				color="#7AC143"
				width="0.3rem"
				height="60%"
			/>
			<Image
				src={filter}
				width="25"
				height="25"
				alt="Filtro"
			/> */}
    </StyledSearchBarContainer>
  );
};

export { SearchBar };
