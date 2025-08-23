import { CustomButton } from "@/components";
import styled from "styled-components";

export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  gap: 24px;
`;

export const FormSections = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: start;
`;

export const RegisterButton = styled(CustomButton)`
`;
