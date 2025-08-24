import styled from "styled-components";

import { CustomLink } from "@/components";

export const ForgotPasswordLink = styled(CustomLink)`
  display: flex;
  justify-content: flex-end;
  color: #5a8f19;
  font-size: 14px;
  font-weight: 500;
`;

export const ForgotPasswordContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 0.5rem;
  padding-right: 0;
`;
