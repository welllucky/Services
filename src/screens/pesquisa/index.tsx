"use client";

import { FlexContainer } from "@/components/PageStruct/style";

// import { useEffect, useState } from "react";
// import { IssueMobile } from "../../Components/Home/CalledMobile";
// import { HeaderMobile } from "../../Components/Home/HeaderMobile";
// import { NavigationBar } from "../../Components/MenuNavegation";
// import Searchbar from "../../components/Searchbar";
// import { api } from "../../Services";
// import { MainContainer } from "./styles";
// import { IssueDto } from "../../Assets";
// import { LoadingScreen } from "../../components/LoadingScreen";
// import { BoxEmptyContainer } from "../Home/styles";
// import { BoxEmpty } from "../../Components/BoxEmpty";

const SearchPage = () => {
	// const [isLoading, setIsLoading] = useState(false);
	// const [searchResults, setSearchResults] = useState<IssueDto[]>([]);
	// const [search, setSearch] = useState("");

	// const [isLoading, setIsLoading] = useState(false);
	// const [searchResults, setSearchResults] = useState<IssueDto[]>([]);
	// const [search, setSearch] = useState("");

	// const usuarioLogado = JSON.parse(localStorage.getItem("userData") ?? "null");
	// function verificarLogin() {
	// 	if (!usuarioLogado) {
	// 		window.location.replace("/login");
	// 	}
	// }
	// verificarLogin();

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
		<FlexContainer>
			{/* <HeaderMobile userName={usuarioLogado ? usuarioLogado.nome : ""} />
			<PageContainer>
				<SearchContainer>
					<Searchbar getInputValue={(value: string) => setSearch(value)} />
				</SearchContainer>
				<MainContainer>
					{isLoading ? (
						<LoadingScreen overlayOn={false} />
					) : (
						<>
							{searchResults.length === 0 ? (
								<BoxEmptyContainer>
									<BoxEmpty title="Nenhum chamado encontrado" />
								</BoxEmptyContainer>
							) : (
								<></>
							)}
							{searchResults.map((issue) => {
								return (
									<IssueMobile
										key={issue.idChamado}
										id={issue.idChamado.toString()}
										nome={issue.nome}
										$status={issue.$status}
										date={issue.dataRelato}
										isUpdated
									/>
								);
							})}
						</>
					)}
				</MainContainer>
			</PageContainer>
			<NavigationBar /> */}
		</FlexContainer>
	);
};

export default SearchPage;
