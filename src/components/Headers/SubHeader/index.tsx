import { IconButton } from "@/components/common/Buttons/IconButton";
import { SubTitleComponent } from "@/styles";
import { buildTestIds } from "@/utils";
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
  <SecondSection {...buildTestIds("sub-header")}>
    <PageTitle $isSmallClientMobile={false}>
      <SubTitleComponent
        $isSmallClientMobile={false}
        {...buildTestIds("sub-header-title")}>
        {title}
      </SubTitleComponent>
      {showAddIssueButton && (
        <IconButton
          name="create-ticket"
          onClick={addButtonCallback}>
          <PlusSquare
            width={26}
            height={26}
          />
        </IconButton>
      )}
    </PageTitle>
  </SecondSection>
);

export default SubHeader;
