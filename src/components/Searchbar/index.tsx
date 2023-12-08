"use client";

import { useState } from "react";
import { SearchIcon } from "@/assets";
import filter from "@/assets/Images/Filter.png";
import { Divider, StyledSearchBar, StyledSearchBarContainer } from "./styles";

import Image from "next/image";

interface SearchBarProps {
	getInputValue: (value: string) => void;
}

const SearchBar = ({ getInputValue }: SearchBarProps) => {
	const [search, setSearch] = useState("");

	return (
		<StyledSearchBarContainer
			borderColor="#7AC143"
			padding="0 .8rem 0 1.2rem ">
			<SearchIcon
				color="#5A8F19"
				height="1.4rem"
				width="1.4rem"
			/>
			<StyledSearchBar
				onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
					setSearch(event.target.value)
				}
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
