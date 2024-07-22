import { Row, TitleComponent } from "@/styles";

type TicketPageTitleProps = {
  text: string;
};

export const TicketPageTitle = ({ text }: TicketPageTitleProps) => {
  return (
    <Row>
      <TitleComponent>{text}</TitleComponent>
    </Row>
  );
};
