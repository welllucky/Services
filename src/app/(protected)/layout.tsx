"use client";

import { Header, NavigationBar } from "@/components";
import { getNavigationOptions } from "@/components/NavBar/data";
import { FlexContainer } from "@/components/PageStruct/style";
import { useAuth } from "@/utils";
import { usePathname } from "next/navigation";
import { ReactNode, useMemo } from "react";

const Template = ({ children }: Readonly<{ children: ReactNode }>) => {
  const pathName = usePathname();
  const { user } = useAuth();

  const isRequestsPage = useMemo(
    () => pathName === "/solicitacoes",
    [pathName],
  );

  const navigationOptions = getNavigationOptions(
    user?.canResolveTicket,
    user?.canCreateTicket,
  );

  const pagesWithoutFooter = useMemo(
    () => ["/abrir-chamado", "/anexar-midia", "/confirmar-chamado"],
    [],
  );

  const pagesWithoutHeader = useMemo(
    () => [...pagesWithoutFooter, "/chamado", "/solicitacao"],
    [pagesWithoutFooter],
  );

  const shouldShowFooter = useMemo(
    () =>
      !pagesWithoutFooter.some((page) => {
        const regex = new RegExp(`^${page}(/.*)?$`);
        return regex.test(pathName);
      }),
    [pagesWithoutFooter, pathName],
  );

  const shouldShowHeader = useMemo(
    () =>
      !pagesWithoutHeader.some((page) => {
        const regex = new RegExp(`^${page}(/.*)?$`);
        return regex.test(pathName);
      }),
    [pagesWithoutHeader, pathName],
  );

  return (
    <FlexContainer
      $backgroundColor={isRequestsPage ? "#E2F3D5" : "#F5F5F5"}
      $full>
      {shouldShowHeader && <Header />}
      {children}
      {shouldShowFooter && (
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
