"use client";

import { NavigationBar } from "@/components";
import { getNavigationOptions } from "@/components/NavBar/data";
import { FlexContainer } from "@/components/PageStruct/style";
import { useSession } from "next-auth/react";
import { redirect, usePathname } from "next/navigation";
import { ReactNode, useMemo } from "react";

const Template = ({ children }: Readonly<{ children: ReactNode }>) => {
  const { data, status } = useSession();

  if (status === "unauthenticated") {
    redirect("/login");
  }

  const pathName = usePathname();
  const user = useMemo(() => data?.user, [data?.user]);
  const isRequestsPage = pathName === "/solicitacoes";

  const navigationOptions = getNavigationOptions(
    user?.canResolveTicket,
    user?.canCreateTicket,
  );

  return (
    <FlexContainer
      $backgroundColor={isRequestsPage ? "#E2F3D5" : "#F5F5F5"}
      $full>
      {children}
      {!["/abrir-chamado", "/anexar-midia", "confirmar-chamado"].some((page) =>
        pathName.includes(page),
      ) && (
        <NavigationBar
          color={isRequestsPage ? "#D8FFB9" : "#F8FCF6"}
          $highlightTextColor={isRequestsPage ? "#4D7D28" : "#7AC143"}
          options={navigationOptions}
        />
      )}
    </FlexContainer>
  );
};

export default Template;
