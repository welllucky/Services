import { IconButton } from "@/components";
import { Row, SubTitleComponent, TitleComponent } from "@/styles";
import {
  buildTestIds,
  getGreetingMessage,
  SS_KEY_USER_PREVIOUS_PAGE,
} from "@/utils";
import { PlusSquare, SignOut } from "@phosphor-icons/react";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Logo from "public/Icon.png";
import { useMemo } from "react";
import {
  FirstSection,
  HeaderHome,
  PageTitle,
  SecondSection,
  UserName,
} from "./styles";

export type HeaderMobileProps = {
  userName?: string;
  pageTittle?: string;
  issueQuantify?: number;
  canCreateTicket?: boolean;
};

export const Header = ({
  userName,
  pageTittle,
  issueQuantify,
  canCreateTicket,
}: HeaderMobileProps) => {
  const { push } = useRouter();
  const actualPage = usePathname();
  const greetingMessage = useMemo(() => getGreetingMessage(), []);

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
              {userName ?? "Colaborador"}!
            </TitleComponent>
          </UserName>
          <IconButton
            onClick={() =>
              signOut({
                redirectTo: "/login",
              })
            }
            icon={<SignOut size={24} />}
          />
        </Row>
      </FirstSection>
      {pageTittle && (
        <SecondSection>
          <PageTitle $isSmallClientMobile={false}>
            <SubTitleComponent $isSmallClientMobile={false}>
              {pageTittle}
            </SubTitleComponent>
            {canCreateTicket && issueQuantify && issueQuantify > 4 ? (
              <IconButton
                onClick={() => {
                  sessionStorage.setItem(SS_KEY_USER_PREVIOUS_PAGE, actualPage);
                  push("/abrir-chamado");
                }}
                icon={<PlusSquare />}
              />
            ) : null}
          </PageTitle>
        </SecondSection>
      )}
    </HeaderHome>
  );
};
