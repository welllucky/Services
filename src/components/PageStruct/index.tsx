import { Header } from "@/components";
import { FlexContainer, PageContainer } from "./style";
import { ReactNode } from "react";

const PageStructContainer = (children : ReactNode) => {
	return (
		<FlexContainer>
			<Header userName={"Usuário não autenticado"} />
			<PageContainer>{children}</PageContainer>
		</FlexContainer>
	);
};

export default PageStructContainer;
