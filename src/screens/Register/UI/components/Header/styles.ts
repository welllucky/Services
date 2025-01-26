import { BackButton } from "@/components";
import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
`;

export const BackToLogin = styled(BackButton)``;

export const TextContainer = styled.div`
  padding-top: 20px;
`;

export const Text = styled.h4`
line-height: 23px;
word-wrap: break-word;
`;
