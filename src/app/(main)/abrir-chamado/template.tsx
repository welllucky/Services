"use client";

import { BackButton } from "@/components";
import { IssuePageContainer } from "@/screens/chamado/styles";
import { Column, Row, TitleComponent } from "@/styles";
import { FormButtons } from "@/components/Form";
import { ReactNode, useMemo } from "react";
import { usePathname } from "next/navigation";

interface PageRouterData {
	page: string;
	title: string;
	hasBackButton?: boolean;
}

export default function Template({ children }: { children: ReactNode }) {
	const pathName = usePathname();
	const pagesTitles: PageRouterData[] = [
		{
			page: "/abrir-chamado",
			title: "O que aconteceu?",
			hasBackButton: false,
		},
		{
			page: "/abrir-chamado/anexar-midia",
			title: "Anexar mídia",
			hasBackButton: true,
		},
		{
			page: "/abrir-chamado/confirmar-chamado",
			title: "Confirmar informações",
			hasBackButton: true,
		},
	];

	const actualPage = useMemo(
		() => pagesTitles.find((page) => page.page === pathName),
		[pathName, pagesTitles]
	);

	const indexPageFinder = useMemo(() => {
		return pagesTitles.indexOf(actualPage as PageRouterData);
	}, [actualPage, pagesTitles]);

	const nextPageUrl = useMemo(() => {
		return indexPageFinder === -1
			? "/"
			: indexPageFinder + 1 >= pagesTitles.length
				? "/"
				: pagesTitles[indexPageFinder + 1].page;
	}, [pagesTitles]);

	return (
		<IssuePageContainer $full>
			<Row>
				<BackButton actionText="voltar" />
			</Row>
			<Column $gap="12px">
				<TitleComponent>{actualPage?.title}</TitleComponent>
				{children}
				<FormButtons
					canNext={true}
					nextPage={nextPageUrl}
					hasBackButton={actualPage?.hasBackButton}
				/>
			</Column>
		</IssuePageContainer>
	);
}
