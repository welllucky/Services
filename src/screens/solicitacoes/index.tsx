"use client";

import { BoxEmpty, Header, IssueMobile, LoadingScreen } from "@/components";
import { MainContainer } from "../pesquisa/styles";
import { PageContainer } from "@/styles";
import { useTheme } from "styled-components";
import { issueMobileData } from "../home/data";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

const RequestsPage = () => {
	const theme = useTheme();
	const isLoading = false;
	const listaChamados = issueMobileData;

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

export { RequestsPage };
