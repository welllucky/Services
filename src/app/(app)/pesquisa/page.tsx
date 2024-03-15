import { issues } from "@/screens/data/index";
import { SearchPage } from "@/screens/pesquisa";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pesquisa",
};

export default function Search() {
  return <SearchPage searchResults={issues} />;
}
