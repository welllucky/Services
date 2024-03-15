import { Container, LoadingContainer } from "./styles";

type LoadingProps = {
  overlayOn?: boolean;
  color?: string;
  size?: string;
};

export function Loading({ overlayOn = false, color, size }: LoadingProps) {
  return overlayOn ? (
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
  );
}
