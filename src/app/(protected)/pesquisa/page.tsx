import { SearchPage } from "@/screens/Search";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pesquisa",
};

const Search = () => {
  return <SearchPage searchResults={[]} />;
};

export default Search;
