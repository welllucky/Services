"use client";

import { NavigationBar } from "@/components";
import navigationOptions from "@/components/NavBar/data";
import { FlexContainer } from "@/components/PageStruct/style";
// import { NoMobileDevice } from "@/screens/NoMobileDevice";
// import { useAppStore } from "@/utils";
// import { useIsClient } from "@uidotdev/usehooks";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function Template({
  children,
}: Readonly<{ children: ReactNode }>) {
  // const isClient = useIsClient();
  // const { isMobile } = useAppStore.use;
  const pathName = usePathname();
  const isRequestsPage = pathName === "/solicitacoes";

  // if (!isMobile && isClient) {
  //   return <NoMobileDevice />;
  // }

  return (
    <FlexContainer
      $backgroundColor={isRequestsPage ? "#E2F3D5" : "#F5F5F5"}
      $full
    >
      {children}
      {!["/abrir-chamado", "/anexar-midia", "confirmar-chamado"].some((page) => pathName.includes(page)) && (
        <NavigationBar
          color={isRequestsPage ? "#D8FFB9" : "#F8FCF6"}
          $highlightTextColor={isRequestsPage ? "#4D7D28" : "#7AC143"}
          options={navigationOptions}
        />
      )}
    </FlexContainer>
  );
}
