import { ReactNode } from "react";

import { Container, Content, Title } from "./styles";

interface SectionProps {
  title: string;
  color?: string;
  children: ReactNode;
}

export const Section = ({ title, color, children }: SectionProps) => {
  return (
    <Container>
      <Title color={color}>{title}</Title>
      <Content>{children}</Content>
    </Container>
  );
};
