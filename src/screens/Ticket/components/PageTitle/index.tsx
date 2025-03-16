import { Row, TitleComponent } from "@/styles";

type IssuePageTitleProps = {
  text: string;
};

export const IssuePageTitle = ({ text }: IssuePageTitleProps) => (
  <Row>
    <TitleComponent>{text}</TitleComponent>
  </Row>
  );
