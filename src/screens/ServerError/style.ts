/* eslint-disable no-confusing-arrow */
import styled from "styled-components";

import { theme } from "@/styles";

// Componentes estilizados
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  color: white;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  position: relative;
  overflow: hidden;
  padding: 0 20px;
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  text-align: center;
`;

const ErrorCode = styled.div`
  font-size: 120px;
  font-weight: 900;
  background: red;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin: 0;
  line-height: 1;
  position: relative;
  letter-spacing: -2px;
  margin-bottom: 20px;
`;

const Subtitle = styled.h2`
  font-size: 24px;
  margin: 10px 0 20px;
  color: ${theme.colors.neutral.inverted};
  font-weight: 600;
`;

const Description = styled.p`
  font-size: 18px;
  margin-bottom: 40px;
  color: ${theme.colors.neutral.inverted};
  max-width: 600px;
  line-height: 1.6;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
`;

const Button = styled.button<{ $primary?: boolean }>`
  padding: 12px 24px;
  background: ${(props) =>
    props.$primary ? theme.colors.primary.default : "transparent"};
  // eslint-disable-next-line no-confusing-arrow
  color: ${(props) =>
    props.$primary
      ? theme.colors.neutral.default
      : theme.colors.neutral.inverted};
  border: ${(props) =>
    props.$primary ? "none" : `2px solid ${theme.colors.neutral.inverted}`};
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export {
  Button,
  ButtonContainer,
  ContentContainer,
  Description,
  ErrorCode,
  PageContainer,
  Subtitle,
};
