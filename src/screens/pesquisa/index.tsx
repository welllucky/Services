"use client";

import { useState } from "react";
import { SearchBar } from "../../components/SearchBar";
import { MainContainer, SearchContainer } from "./styles";
import { LoadingScreen } from "../../components/LoadingScreen";
import { BoxEmpty, Header, IssueMobile } from "@/components";
import { IssueMobileProps } from "@/types";
import { useTheme } from "styled-components";
import { PageContainer } from "@/styles";
import { issueMobileData } from "../home/data";

const SearchPage = ({
	searchResults,
}: {
	searchResults: IssueMobileProps[];
}) => {
	const theme = useTheme();
	const [isLoading, setIsLoading] = useState(false);
	// const [searchResults, setSearchResults] = useState<IssueMobileProps[]>([]);
	const [search, setSearch] = useState("");

	// const searchUserIssue = (issueString: string) => {
	// 	api
	// 		.get(
	// 			`FiltroChamado?matricula=${usuarioLogado.matricula}&nome=${issueString}`,
	// 			{
	// 				headers: {
	// 					"Content-Type": "application/json",
	// 					"Access-Control-Allow-Origin": "*",
	// 					Authorization: `Bearer ${usuarioLogado.token}`,
	// 				},
	// 			}
	// 		)
	// 		.then((response) => {
	// 			setSearchResults(response.data);
	// 		})
	// 		.catch((error) => {
	// 			console.log(error);
	// 		});
	// };

	// useEffect(() => {
	// 	search && searchUserIssue(search);
	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, [search]);

	return (
		<>
			<Header userName={"Colaborador"} />
			<SearchContainer>
				<SearchBar getInputValue={(value: string) => setSearch(value)} />
			</SearchContainer>
			<PageContainer>
				{isLoading ? (
					<LoadingScreen overlayOn={false} />
				) : (
					<>
						<MainContainer hasContent={!!searchResults}>
							{searchResults?.length ? (
								searchResults.map((issue) => {
									return (
										<IssueMobile
											key={issue.id}
											id={issue.id}
											nome={issue.nome}
											date={issue.date}
											$status={issue.$status}
											isUpdated={issue.isUpdated}
										/>
									);
								})
							) : (
								<BoxEmpty
									alt="caixa vazia"
									title="Pesquise pelo seu chamado"
									color={theme.colors.neutral["55"]}
								/>
							)}
						</MainContainer>
					</>
				)}
			</PageContainer>
		</>
	);
};

export { SearchPage };
