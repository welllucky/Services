"use client";

import { Header, NavigationBar } from "@/components";
import { getNavigationOptions } from "@/components/NavBar/data";
import { FlexContainer } from "@/components/PageStruct/style";
import { Column } from "@/styles";
import { useAuth } from "@/utils";
import { usePathname } from "next/navigation";
import { ReactNode, useMemo } from "react";

const ProtectedLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  const pathName = usePathname();
  const { user } = useAuth();

  const isRequestsPage = useMemo(() => pathName === "/issues", [pathName]);

  const navigationOptions = getNavigationOptions(
    user?.canResolveTicket,
    user?.canCreateTicket,
  );

  const pagesWithoutFooter = useMemo(
    () => ["/open-ticket", "/add-media", "/confirm-ticket"],
    [],
  );

  const pagesWithoutHeader = useMemo(
    () => [...pagesWithoutFooter, "/ticket", "/issue"],
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
      $full
      $backgroundColor={isRequestsPage ? "#E2F3D5" : "#F5F5F5"}>
      <Column
        padding={`8vmin 5vmin ${shouldShowFooter ? "0" : "8vmin"} 5vmin`}
        overflow
        $full>
        {shouldShowHeader && <Header />}
        {children}
      </Column>
      {shouldShowFooter && (
        <NavigationBar
          color={isRequestsPage ? "#D8FFB9" : "#F8FCF6"}
          $highlightTextColor={isRequestsPage ? "#4D7D28" : "#7AC143"}
          options={navigationOptions}
          isLoading={!user}
        />
      )}
    </FlexContainer>
  );
};

export default ProtectedLayout;
