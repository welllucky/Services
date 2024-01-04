import addButtonAlt from "@/assets/Images/AddButtonAlt.png";
import {
	UserName,
	PageTitle,
	HeaderHome,
	FirstSection,
	SecondSection,
} from "./styles";
import { IconButton } from "@/components";
import { useMemo } from "react";
import { Row, SubTitleComponent, TitleComponent } from "@/styles";
import { useApp } from "@/utils";
import Image from "next/image";

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
			<FirstSection $gap="1.2rem">
				<Row isSmallClientMobile={isClientSmallMobile}>
					<Image width={40} height={40} alt="Services logo" src="/android-chrome-512x512.png"/>
				</Row>
				<Row isSmallClientMobile={isClientSmallMobile}>
					<UserName isSmallClientMobile={isClientSmallMobile}>
						<TitleComponent isSmallClientMobile={isClientSmallMobile}>
							{greetingMessage}, {userName}!
						</TitleComponent>
					</UserName>
				</Row>
			</FirstSection>
			{pageTittle && (
				<SecondSection>
					<PageTitle isSmallClientMobile={isClientSmallMobile}>
						<SubTitleComponent isSmallClientMobile={isClientSmallMobile}>
							{pageTittle}
						</SubTitleComponent>
						{issueQuantify && issueQuantify > 4 ? (
							<IconButton
								path={"/abrir-chamado"}
								icon={addButtonAlt}
							/>
						) : null}
					</PageTitle>
				</SecondSection>
			)}
		</HeaderHome>
	);
};
