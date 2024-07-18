"use client";

import { NavigationBar } from "@/components";
import navigationOptions from "@/components/NavBar/data";
import { FlexContainer } from "@/components/PageStruct/style";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const Template = ({ children }: Readonly<{ children: ReactNode }>) => {
  const pathName = usePathname();
  const isRequestsPage = pathName === "/solicitacoes";

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
