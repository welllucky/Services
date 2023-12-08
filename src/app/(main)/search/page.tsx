import { issueMobileData } from "@/screens/home/data";
import SearchPage from "@/screens/pesquisa";

export default function Search() {
	return <SearchPage searchResults={issueMobileData} />;
}
