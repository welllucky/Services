"use client";

import { FlexContainer } from "@/components/PageStruct/style";
import { Header, Form } from "./components";

export const RegisterPageUI = () => (
  <FlexContainer
    overflow
    $full
    $gap="16px">
    <Header />
    <Form />
  </FlexContainer>
);
