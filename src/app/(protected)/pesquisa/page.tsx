import { SearchPage } from "@/screens/Search";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pesquisa",
};

const Search = () => <SearchPage searchResults={[]} />;

export default Search;
