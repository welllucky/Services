import { Header } from "@/components";
import { FlexContainer, PageStructContainer } from "./style";
import { ReactNode } from "react";

const PageStruct = (children: ReactNode) => {
	return (
		<FlexContainer>
			<Header userName={"Usuário não autenticado"} />
			<PageStructContainer>{children}</PageStructContainer>
		</FlexContainer>
	);
};

export default PageStruct;
