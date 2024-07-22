import { Row, TitleComponent } from "@/styles";

type TicketPageTitleProps = {
  text: string;
};

export const TicketPageTitle = ({ text }: TicketPageTitleProps) => (
  <Row>
    <TitleComponent>{text}</TitleComponent>
  </Row>
  );
