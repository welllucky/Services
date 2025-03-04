"use client";

import { FlexContainer } from "@/components/PageStruct/style";
import { Form, Header } from "./components";

const RegisterPageUI = () => (
  <FlexContainer
    overflow
    $full
    padding="8vmin 5vmin"
    $gap="16px"
    $hasBottomPadding={false}>
    <Header />
    <Form />
  </FlexContainer>
);

export default RegisterPageUI;
