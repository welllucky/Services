import { SearchBar } from "@/components";
import { SearchContainer } from "./styles";

type SearchBarProps = {
  // eslint-disable-next-line no-unused-vars
  getInputValue: (value: string) => void;
};

export const SearchBarComponent = ({ getInputValue }: SearchBarProps) => (
  <SearchContainer>
    <SearchBar getInputValue={getInputValue} />
  </SearchContainer>
);
