import { theme } from "@/styles";
import { BackToLogin, Container, Text, TextContainer } from "./styles";

export const Header = () => (
  <Container>
    <BackToLogin
      actionText="Login"
      color={theme.colors.neutral.inverted}
    />
    <TextContainer>
      <Text>Para começarmos, preencha as informações abaixo:</Text>
    </TextContainer>
  </Container>
);
