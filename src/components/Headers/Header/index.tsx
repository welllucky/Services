import { LogoFC } from "@/assets/Icons";
import addButtonAlt from "@/assets/Images/AddButtonAlt.png";
import {
	UserName,
	UserText,
	PageTitle,
	TittleText,
	HeaderHome,
	FirstSection,
	SecondSection,
} from "./styles";
import { IconButton } from "@/components";
import { useMemo } from "react";
import { Row } from "@/styles";
import { useApp } from "@/utils";

export type HeaderMobileProps = {
	userName?: string;
	pageTittle?: string;
	issueQuantify?: number;
};

export const Header = ({
	userName,
	pageTittle,
	issueQuantify,
}: HeaderMobileProps) => {
	const { isClientSmallMobile } = useApp();
	const greetingMessage = useMemo(() => {
		const hour = new Date().getHours();
		return hour > 5 && hour < 12
			? "Bom dia"
			: hour >= 12 && hour < 18
			  ? "Boa tarde"
			  : hour >= 18 && hour < 24
			    ? "Boa noite"
			    : "Boa madrugada";
	}, []);

	return (
		<HeaderHome>
			<FirstSection>
				<Row isSmallClientMobile={isClientSmallMobile}>
					<LogoFC />
				</Row>
				<Row isSmallClientMobile={isClientSmallMobile}>
					<UserName isSmallClientMobile={isClientSmallMobile}>
						<UserText isSmallClientMobile={isClientSmallMobile}>
							{greetingMessage}, {userName}!
						</UserText>
					</UserName>
				</Row>
			</FirstSection>
			<SecondSection>
				<PageTitle isSmallClientMobile={isClientSmallMobile}>
					<TittleText isSmallClientMobile={isClientSmallMobile}>
						{pageTittle}
					</TittleText>
					{issueQuantify && issueQuantify > 4 ? (
						<IconButton
							path={"/abrir-chamado"}
							icon={addButtonAlt}
						/>
					) : null}
				</PageTitle>
			</SecondSection>
		</HeaderHome>
	);
};
