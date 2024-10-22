import { SearchPage } from "@/screens/Search";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pesquisa",
};

const Search = async () => <SearchPage />;

export default Search;
