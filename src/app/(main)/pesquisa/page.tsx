import { issueMobileData } from "@/screens/home/data";
import { SearchPage } from "@/screens/pesquisa";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: { default: "Pesquisa", template: "%s | Services" },
};

export default function Search() {
	return <SearchPage searchResults={issueMobileData} />;
}
