"use client";

import { FlexContainer } from "@/components/PageStruct/style";
import { RegisterPageUIProps } from "../register.types";
import { Form, Header } from "./components";

export const RegisterPageUI = ({ onCreateAccount }: RegisterPageUIProps) => (
  <FlexContainer
    overflow
    $full
    $gap="16px"
    $hasBottomPadding={false}>
    <Header />
    <Form onCreateAccount={onCreateAccount} />
  </FlexContainer>
);
