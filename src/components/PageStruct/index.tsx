import { HeaderMobile } from "@/components";
import { FlexContainer, PageContainer } from "./style";
import { ReactNode } from "react";

const PageStructContainer = ({ children }: ReactNode) => {
	return (
		<FlexContainer>
			<HeaderMobile userName={"Usuário não autenticado"} />
			<PageContainer>{children}</PageContainer>
		</FlexContainer>
	);
};

export default PageStructContainer;
