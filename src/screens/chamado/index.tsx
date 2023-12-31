"use client";

import { BackButton, OutlinedInput } from "@/components";
import { IssuePageContainer, IssuePageContent } from "./styles";
import { Column, Row, TitleComponent } from "@/styles";

const IssuePage = () => {
	return (
		<IssuePageContainer $full>
			<Row>
				<BackButton actionText="voltar" />
			</Row>
			<Column gap="24px">
				<TitleComponent>O que aconteceu?</TitleComponent>
				<IssuePageContent>
					<OutlinedInput
						type="text"
						placeholder="Do que se trata o chamado?"
						$status="none"
						labelText="Resumo"
						errorText="Formato inválido, tente novamente!"
					/>
					<OutlinedInput
						type="text"
						placeholder="Qual o tipo do chamado?"
						$status="none"
						labelText="Tipo"
						errorText="Formato inválido, tente novamente!"
					/>
					<OutlinedInput
						type="text"
						placeholder="Nos conte mais detalhes sobre o ocorrido..."
						$status="none"
						labelText="Descrição"
						errorText="Formato inválido, tente novamente!"
					/>
					<OutlinedInput
						type="text"
						placeholder="dd/mm/aaaa"
						$status="none"
						labelText="Data do ocorrido"
						errorText="Formato inválido, tente novamente!"
					/>
				</IssuePageContent>
			</Column>
		</IssuePageContainer>
	);
};

export { IssuePage };
