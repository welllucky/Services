"use client";

import {
	AddNewIssueButton,
	BoxEmpty,
	Header,
	IssueMobile,
	LoadingScreen,
} from "@/components";
import { MainContainer } from "../pesquisa/styles";
import { PageContainer } from "@/styles";
import { ButtonWrapper } from "../home/styles";
import { useTheme } from "styled-components";
import { issueMobileData } from "../home/data";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

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
	const theme = useTheme();
	const isLoading = false;
	const listaChamados = issueMobileData;

	const isRequestsPage = useMemo(() => {
		return usePathname() === "/requests";
	}, [usePathname]);

	return (
		<>
			<Header
				userName={"Colaborador"}
				pageTittle="Chamados solicitados"
			/>
			<PageContainer>
				{isLoading ? (
					<LoadingScreen overlayOn={false} />
				) : (
					<>
						<MainContainer hasContent={!!listaChamados}>
							{listaChamados && listaChamados?.length ? (
								listaChamados.map((issue) => {
									return (
										<IssueMobile
											color="#9EDC72"
                      borderColor="#61A12F"
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
									title="Não há solicitações no momento."
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

export default RequestsPage;
