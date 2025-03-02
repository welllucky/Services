import { IconButton } from "@/components/common/Buttons/IconButton";
import { SubTitleComponent } from "@/styles";
import { PlusSquare } from "@phosphor-icons/react";
import { PageTitle, SecondSection } from "./styles";

interface SubHeaderProps {
  title: string;
  showAddIssueButton?: boolean;
  addButtonCallback?: () => void;
}

const SubHeader = ({
  title,
  showAddIssueButton = false,
  addButtonCallback,
}: SubHeaderProps) => (
  <SecondSection>
    <PageTitle $isSmallClientMobile={false}>
      <SubTitleComponent $isSmallClientMobile={false}>
        {title}
      </SubTitleComponent>
      {showAddIssueButton && (
        <IconButton onClick={addButtonCallback}>
          <PlusSquare
            width={20}
            height={20}
          />
        </IconButton>
      )}
    </PageTitle>
  </SecondSection>
);

export { SubHeader };
