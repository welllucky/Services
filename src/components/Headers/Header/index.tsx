import { IconButton } from "@/components";
import { Row, TitleComponent } from "@/styles";
import { buildTestIds, getGreetingMessage, useAuth } from "@/utils";
import { SignOut as SignOutIcon } from "@phosphor-icons/react";
import Image from "next/image";
import Logo from "public/Icon.png";
import { useMemo } from "react";
import { FirstSection, HeaderHome, UserName } from "./styles";

export const Header = () => {
  const greetingMessage = useMemo(() => getGreetingMessage(), []);

  const { user, signOut } = useAuth();

  return (
    <HeaderHome {...buildTestIds("header-home-container")}>
      <FirstSection
        {...buildTestIds("header-first-section")}
        $gap="0.7rem">
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
            priority
          />
        </Row>
        <Row
          $isSmallClientMobile={false}
          $justifyContent="space-between"
          $alignItems="center">
          <UserName $isSmallClientMobile={false}>
            <TitleComponent $isSmallClientMobile={false}>
              {`${greetingMessage},`}
            </TitleComponent>
            <TitleComponent $isSmallClientMobile={false}>
              {user?.name ?? "Colaborador"}!
            </TitleComponent>
          </UserName>
          <IconButton
            onClick={() => signOut}
            icon={<SignOutIcon size={24} />}
          />
        </Row>
      </FirstSection>
    </HeaderHome>
  );
};
