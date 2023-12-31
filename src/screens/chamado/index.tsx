"use client";

import {
	BackButton,
	CustomInput,
	LoadingScreen,
	OutlinedInput,
} from "@/components";
import { IssuePageContainer, IssuePageContent } from "./styles";
import { Column, Row } from "@/styles";
import { ClearIcon, EmailIcon } from "@/assets";

const IssuePage = () => {
	return (
		<IssuePageContainer $full>
			<Row>
				<BackButton actionText="voltar" />
			</Row>
			<IssuePageContent>
				<CustomInput
					type="email"
					placeholder="Digite o seu email"
					$status="none"
					height="56px"
					labelText="Email"
					errorText="Formato inválido, tente novamente!"
				/>
				<OutlinedInput />
			</IssuePageContent>
		</IssuePageContainer>
	);
};

export default IssuePage;
