import { SignOut as SignOutIcon } from "@phosphor-icons/react";
import Image from "next/image";
import Logo from "public/Icon.png";
import { useMemo } from "react";

import { Row, TitleComponent } from "@/styles";
import { IUser } from "@/types";
import { buildTestIds, getGreetingMessage, useAuth } from "@/utils";

import { IconButton } from "../../common/Buttons/IconButton";
import { Skeleton } from "../../Skeleton";
import { FirstSection, HeaderHome, UserName } from "./styles";

interface GreetingSectionProps {
  greetingMessage: string;
  user: IUser | null;
  signOut: () => void;
}

const GreetingSection = ({
  greetingMessage,
  user,
  signOut,
}: GreetingSectionProps) => (
  <Row
    $isSmallClientMobile={false}
    $justifyContent="space-between"
    $alignItems="center">
    <UserName $isSmallClientMobile={false}>
      <TitleComponent
        {...buildTestIds("greeting-message")}
        $isSmallClientMobile={false}>
        {`${greetingMessage},`}
      </TitleComponent>
      {user?.name ? (
        <TitleComponent
          {...buildTestIds("user-name")}
          $isSmallClientMobile={false}>
          {user?.name ?? "Colaborador"}!
        </TitleComponent>
      ) : (
        <Skeleton
          type="text"
          width="10em"
        />
      )}
    </UserName>
    <IconButton
      name="sign-out"
      width={24}
      height={24}
      onClick={signOut}>
      <SignOutIcon
        aria-label="deslogar"
        size={24}
      />
    </IconButton>
  </Row>
);

const Header = () => {
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
        <GreetingSection
          greetingMessage={greetingMessage}
          user={user}
          signOut={signOut}
        />
      </FirstSection>
    </HeaderHome>
  );
};

export default Header;
