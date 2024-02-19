import addButtonAlt from "@/assets/Images/AddButtonAlt.png";
import {
  UserName,
  PageTitle,
  HeaderHome,
  FirstSection,
  SecondSection
} from "./styles";
import { IconButton } from "@/components";
import { useMemo } from "react";
import { Row, SubTitleComponent, TitleComponent } from "@/styles";
import Image from "next/image";
import Logo from "../../../../public/android/android-launchericon-512-512.png";
import { buildTestIds } from "@/utils/functions";

export type HeaderMobileProps = {
  userName?: string;
  pageTittle?: string;
  issueQuantify?: number;
};

export const Header = ({
  userName,
  pageTittle,
  issueQuantify
}: HeaderMobileProps) => {
  const greetingMessage = useMemo(() => {
    const hour = new Date().getHours();
    return hour > 5 && hour < 12
      ? "Bom dia"
      : hour >= 12 && hour < 18
        ? "Boa tarde"
        : hour >= 18 && hour < 24
          ? "Boa noite"
          : "Boa madrugada";
  }, []);

  return (
    <HeaderHome {...buildTestIds("header-home-container")}>
      <FirstSection
        {...buildTestIds("header-first-section")}
        $gap="1.2rem">
        <Row
          {...buildTestIds("header-corp-logo-container")}
          width="fit-content"
          height="fit-content"
          $isSmallClientMobile={false}>
          <Image
            {...buildTestIds("header-corp-logo-image")}
            width={48}
            height={48}
            alt="Services logo"
            src={Logo}
          />
        </Row>
        <Row $isSmallClientMobile={false}>
          <UserName $isSmallClientMobile={false}>
            <TitleComponent $isSmallClientMobile={false}>
              {greetingMessage}, {userName}!
            </TitleComponent>
          </UserName>
        </Row>
      </FirstSection>
      {pageTittle && (
        <SecondSection>
          <PageTitle $isSmallClientMobile={false}>
            <SubTitleComponent $isSmallClientMobile={false}>
              {pageTittle}
            </SubTitleComponent>
            {issueQuantify && issueQuantify > 4 ? (
              <IconButton
                path={"/abrir-chamado"}
                icon={addButtonAlt}
              />
            ) : null}
          </PageTitle>
        </SecondSection>
      )}
    </HeaderHome>
  );
};
