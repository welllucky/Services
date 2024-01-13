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
import { useApp } from "@/utils";
import Image from "next/image";
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
  const { isSmallMobile } = useApp();
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
      <FirstSection {...buildTestIds("header-first-section")} $gap="1.2rem">
        <Row
          {...buildTestIds("header-corp-logo-container")}
          width="fit-content"
          height="fit-content"
          isSmallClientMobile={isSmallMobile}>
          <Image
            {...buildTestIds("header-corp-logo-image")}
            width={42}
            height={42}
            alt="Services logo"
            src="/android-chrome-512x512.png"
          />
        </Row>
        <Row isSmallClientMobile={isSmallMobile}>
          <UserName isSmallClientMobile={isSmallMobile}>
            <TitleComponent isSmallClientMobile={isSmallMobile}>
              {greetingMessage}, {userName}!
            </TitleComponent>
          </UserName>
        </Row>
      </FirstSection>
      {pageTittle && (
        <SecondSection>
          <PageTitle isSmallClientMobile={isSmallMobile}>
            <SubTitleComponent isSmallClientMobile={isSmallMobile}>
              {pageTittle}
            </SubTitleComponent>
            {issueQuantify && issueQuantify > 4 ? (
              <IconButton path={"/abrir-chamado"} icon={addButtonAlt} />
            ) : null}
          </PageTitle>
        </SecondSection>
      )}
    </HeaderHome>
  );
};
