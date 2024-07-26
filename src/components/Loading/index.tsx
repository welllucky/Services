import { Container, LoadingContainer } from "./styles";

type LoadingProps = {
  overlayOn?: boolean;
  fullScreen?: boolean;
  color?: string;
  size?: string;
};

export const Loading = ({
  overlayOn = false,
  fullScreen = true,
  color,
  size,
}: LoadingProps) => (
  <LoadingContainer
    overlayOn={overlayOn}
    fullyScreen={fullScreen}>
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
);
