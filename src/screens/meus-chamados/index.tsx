"use client";

import { AddNewIssueButton } from "@/components/common/Buttons";
import { IssueMobile } from "@/components/CalledMobile";
import { Header } from "@/components";
import { NavigationBar } from "@/components/NavBar";
import { ButtonWrapper } from "./styles";
import { issueMobileData } from "../home/data";
import { FlexContainer } from "@/components/PageStruct/style";
import { LoadingScreen } from "@/components/LoadingScreen";
import { MainContainer } from "../pesquisa/styles";
import { BoxEmpty } from "@/components";
import { useTheme } from "styled-components";
import navigationOptions from "@/components/NavBar/data";
import { PageContainer } from "@/styles";

const MyCallsPage = () => {
	const theme = useTheme();
	const issuesNumber = issueMobileData.length;
	const isLoading = false;
	const listaChamados = issueMobileData;
	return (
		<>
			<Header
				userName={"Colaborador"}
				pageTittle="Meus chamados"
				issueQuantify={issuesNumber}
			/>
			<PageContainer>
				{isLoading ? (
					<LoadingScreen overlayOn={false} />
				) : (
					<>
						<MainContainer>
							{listaChamados && listaChamados?.length ? (
								listaChamados.map((issue) => {
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
									title="Não há chamados no momento."
									color={theme.colors.neutral["55"]}
								/>
							)}
						</MainContainer>
						<ButtonWrapper>
							{issuesNumber < 5 ? (
								<AddNewIssueButton styles={{ hasShadow: true }} />
							) : null}
						</ButtonWrapper>
					</>
				)}
			</PageContainer>
		</>
	);
};

export { MyCallsPage };
