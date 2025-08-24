import { ReactNode } from "react";

import { Header } from "@/components";

import { FlexContainer, PageStructContainer } from "./style";

const PageStruct = (children: ReactNode) => (
  <FlexContainer>
    <Header />
    <PageStructContainer>{children}</PageStructContainer>
  </FlexContainer>
);

export default PageStruct;
