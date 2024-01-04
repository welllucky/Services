"use client";

import {
	BackButton,
	CustomSelect,
	CustomTextArea,
	OutlinedInput,
} from "@/components";
import { IssuePageContainer, IssuePageContent } from "./styles";
import { Column, Row, TitleComponent } from "@/styles";
import { FormButtons } from "@/components/Form";

const IssuePage = () => {
	return (
		<IssuePageContainer $full>
			<Row>
				<BackButton actionText="voltar" />
			</Row>
			<Column $gap="12px">
				<TitleComponent>O que aconteceu?</TitleComponent>
				<IssuePageContent>
					<OutlinedInput
						type="text"
						placeholder="Do que se trata o chamado?"
						$status="none"
						labelText="Resumo"
						errorText="Formato inválido, tente novamente!"
					/>
					<CustomSelect
						placeholder="Qual o tipo do chamado?"
						labelText="Tipo"
						isRequired
						options={[
							{ key: "1", value: "1", text: "1" },
							{ key: "2", value: "2", text: "2" },
							{ key: "3", value: "3", text: "3" },
						]}
					/>
					<CustomTextArea
						placeholder="Nos conte mais detalhes sobre o ocorrido..."
						labelText="Descrição"
						onChange={() => {}}
						isRequired
					/>
					<OutlinedInput
						type="date"
						placeholder="dd/mm/aaaa"
						$status="none"
						labelText="Data do ocorrido"
						errorText="Formato inválido, tente novamente!"
					/>
				</IssuePageContent>
				<FormButtons
					nextPage="/"
					canBack={true}
					canNext={true}
          hasBackButton={false}
				/>
			</Column>
		</IssuePageContainer>
	);
};

export { IssuePage };
