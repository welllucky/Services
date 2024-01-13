"use client";

import { NavigationBar } from "@/components";
import navigationOptions from "@/components/NavBar/data";
import { FlexContainer } from "@/components/PageStruct/style";
import { NoMobileDevice } from "@/screens/NoMobileDevice";
import { useApp } from "@/utils";
import { useIsClient } from "@uidotdev/usehooks";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function Template({ children }: { children: ReactNode }) {
  const isClient = useIsClient();
  const { isMobile } = useApp();
  const isRequestsPage = usePathname() === "/solicitacoes";

  if (!isMobile && isClient) {
    return <NoMobileDevice />;
  }

  return (
    <FlexContainer
      $backgroundColor={isRequestsPage ? "#E2F3D5" : "#F5F5F5"}
      $full={true}>
      {children}
      {!["/abrir-chamado", "/anexar-midia", "confirmar-chamado"].some((page) =>
        usePathname().includes(page)
      ) && (
        <NavigationBar
          color={isRequestsPage ? "#D8FFB9" : "#F8FCF6"}
          $highlightTextColor={isRequestsPage ? "#4D7D28" : "#7AC143"}
          options={navigationOptions}
        />
      )}
    </FlexContainer>
  );
}
