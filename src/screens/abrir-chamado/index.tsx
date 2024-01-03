"use client";

import { CustomSelect, CustomTextArea, OutlinedInput } from "@/components";
import { IssuePageContent } from "./styles";

const CreateTicketPage = () => {
	return (
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
	);
};

export { CreateTicketPage };
