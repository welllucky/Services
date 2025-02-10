import { OptionMenuProps } from "@/types";
import { usePathname } from "next/navigation";
import { useCallback, useState } from "react";
import OptionMenu from "./OptionMenu";
import { ContainerMenu, MenuList } from "./styles";

interface NavigationBarProps {
  color?: string;
  $highlightTextColor?: string;
  options: OptionMenuProps[];
  isLoading?: boolean;
}

export const NavigationBar = ({
  color,
  $highlightTextColor,
  options,
  isLoading = false,
}: NavigationBarProps) => {
  const actualRoute = usePathname();
  const [optionClicked, setOptionClicked] = useState("");
  const optionCallback = useCallback((optionName: string) => {
    setOptionClicked(optionName);
  }, []);

  const OptionsList = options
    .filter((option) => option.$isVisibled)
    ?.map((option) => (
      <OptionMenu
        $isPreselected={option.name === optionClicked}
        $highlightTextColor={$highlightTextColor}
        color={color}
        key={option.name}
        name={option.name}
        path={option.path}
        alt={option.alt}
        icon={option.icon}
        onClick={optionCallback}
        $isSelected={option.path === actualRoute}
      />
    ));

  return (
    <ContainerMenu color={color}>
      <MenuList>{isLoading ? <p>Carregando...</p> : OptionsList}</MenuList>
    </ContainerMenu>
  );
};
