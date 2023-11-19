import {
	IssueContainer,
	IssueContent,
	IssueNumber,
	IssueDescription,
	IssueState,
	IssueStatus,
	OpeningText,
	StatusText,
	IconeSelo,
	IssueWrapper,
} from "./styles";
import { Selo } from "@/assets/Icons";
import { IssueMobileProps } from "@/assets";
export const IssueMobile = ({
	id,
	nome,
	date,
	$status,
	isUpdated,
	color,
	borderColor,
}: IssueMobileProps) => {
	return (
		<IssueWrapper>
			{isUpdated && (
				<IconeSelo>
					<Selo />
				</IconeSelo>
			)}
			<IssueContainer
				color={color}
				borderColor={borderColor}
				hasUpdate={isUpdated}>
				<IssueContent>
					<IssueNumber>{`Chamado Nº ${id}`}</IssueNumber>
					<IssueDescription>{nome}</IssueDescription>
				</IssueContent>
				<IssueState>
					<IssueStatus>
						Aberto em:
						<OpeningText>{date}</OpeningText>
					</IssueStatus>
					<IssueStatus>
						Status
						<StatusText>{$status}</StatusText>
					</IssueStatus>
				</IssueState>
			</IssueContainer>
		</IssueWrapper>
	);
};
