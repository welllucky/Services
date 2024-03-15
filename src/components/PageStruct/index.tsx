import { Header } from "@/components";
import { ReactNode } from "react";
import { FlexContainer, PageStructContainer } from "./style";

function PageStruct(children: ReactNode) {
  return (
    <FlexContainer>
      <Header userName="Usuário não autenticado" />
      <PageStructContainer>{children}</PageStructContainer>
    </FlexContainer>
  );
}

export default PageStruct;
