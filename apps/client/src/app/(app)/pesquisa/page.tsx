import { issues } from "@/screens/data/index";
import { SearchPage } from "@/screens/pesquisa";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pesquisa",
};

const Search = () => {
  return <SearchPage searchResults={issues} />;
};

export default Search;
