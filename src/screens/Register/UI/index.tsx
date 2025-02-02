"use client";

import { FlexContainer } from "@/components/PageStruct/style";
import { Form, Header } from "./components";

export const RegisterPageUI = () => (
  <FlexContainer
    overflow
    $full
    $gap="16px"
    $hasBottomPadding={false}>
    <Header />
    <Form />
  </FlexContainer>
);
