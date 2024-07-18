import { SearchPage } from "@/screens/pesquisa";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pesquisa",
};

const Search = () => {
  return <SearchPage searchResults={[]} />;
};

export default Search;
