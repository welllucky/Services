import { Header } from "@/components";
import { ReactNode } from "react";
import { FlexContainer, PageStructContainer } from "./style";

const PageStruct = (children: ReactNode) => (
  <FlexContainer>
    <Header />
    <PageStructContainer>{children}</PageStructContainer>
  </FlexContainer>
);

export default PageStruct;
