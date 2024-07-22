import { Container, LoadingContainer } from "./styles";

type LoadingProps = {
  overlayOn?: boolean;
  color?: string;
  size?: string;
};

export const Loading = ({ overlayOn = false, color, size }: LoadingProps) => (overlayOn ? (
  <LoadingContainer>
    <Container {...{ color, size }}>
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </Container>
  </LoadingContainer>
  ) : (
    <Container {...{ color, size }}>
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </Container>
  ));
