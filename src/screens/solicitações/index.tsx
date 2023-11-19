"use client";

import { FlexContainer } from "@/components/PageStruct/style";

// import { HeaderMobile } from "../../Components/Home/HeaderMobile";
// import { NavigationBar } from "../../Components/MenuNavegation";
// import { BoxEmpty } from "../../Components/BoxEmpty";
// import { BoxEmptyContainer } from "../Home/styles";
// import { issueMobileData } from "../Home/data";
// import { IssueMobile } from "../../Components/Home/CalledMobile";
// import {
// 	FlexContainer,
// 	PageContainer,
// } from "../../Components/PageStruct/style";
// import { LoadingScreen } from "../../components/LoadingScreen";
// import { MainContainer } from "../pesquisa/styles";

const RequestsPage = () => {
	// const usuarioLogado = JSON.parse(localStorage.getItem("userData") ?? "null");
	// function verificarLogin() {
	// 	if (!usuarioLogado) {
	// 		window.location.replace("/login");
	// 	}
	// }
	// verificarLogin();

	// useEffect(() => {
	// 	setIsLoading(true);
	// 	api
	// 		.get(`/ConsultaSolicitacoes/${usuarioLogado.matricula}`, {
	// 			headers: { Authorization: `Bearer ${usuarioLogado.token}` },
	// 		})
	// 		.then((response) => setListaSolicitacoes(response.data))
	// 		.catch((err) => {
	// 			console.error(`ops! ocorreu um erro ${err}`);
	// 		})
	// 		.finally(() => setIsLoading(false));
	// }, [usuarioLogado.matricula, usuarioLogado.token]);

	// const isLoading = false;
	return (
		<FlexContainer $backgroundColor="#D2F4B7">
			{/* <HeaderMobile
				userName={usuarioLogado ? usuarioLogado.nome : ""}
				pageTittle="Chamados solicitados"
				grettingsMessageColor="#569720"
			/>
			<PageContainer>
				{isLoading ? (
					<LoadingScreen overlayOn={false} />
				) : (
					<>
						<MainContainer>
							{issueMobileData ? (
								issueMobileData.map((issue) => {
									return (
										<IssueMobile
											key={issue?.id}
											id={issue?.id}
											nome={issue?.nome}
											date={issue?.date}
											$status={issue?.$status}
											isUpdated={issue?.isUpdated}
											color={"#9edc72"}
											borderColor={"#61A12F"}
										/>
									);
								})
							) : (
								<BoxEmptyContainer>
									<BoxEmpty
										alt="caixa vazia"
										title="Não há solicitações no momento."
										color="#494949"
									/>
								</BoxEmptyContainer>
							)}
						</MainContainer>
					</>
				)}
			</PageContainer>
			<NavigationBar $backgroundColor="#D8FFB9" /> */}
		</FlexContainer>
	);
};

export default RequestsPage;
