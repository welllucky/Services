"use client";

import { BackButton, LoadingScreen } from "@/components";
import { IssuePageContainer, IssuePageContent } from "./styles";
import { Column, Row } from "@/styles";

const IssuePage = () => {
	return (
		<IssuePageContainer full>
			<Row>
				<BackButton actionText="voltar" />
			</Row>
			<IssuePageContent>
				<LoadingScreen overlayOn={false} />
				{""}
				Em construção
			</IssuePageContent>
		</IssuePageContainer>
	);
};

export default IssuePage;
