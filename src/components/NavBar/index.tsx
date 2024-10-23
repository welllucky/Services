import { OptionMenuProps } from "@/types";
import { usePathname } from "next/navigation";
import OptionMenu from "./OptionMenu";
import { ContainerMenu, MenuList } from "./styles";

interface NavigationBarProps {
  color?: string;
  $highlightTextColor?: string;
  options: OptionMenuProps[];
  // isLoading?: boolean;
}

export const NavigationBar = ({
  color,
  $highlightTextColor,
  options,
  // isLoading = false,
}: NavigationBarProps) => {
  const actualRoute = usePathname();
  return (
    <ContainerMenu color={color}>
      <MenuList>
        {options
          .filter((option) => option.$isVisibled)
          ?.map((option) => (
            <OptionMenu
              $highlightTextColor={$highlightTextColor}
              color={color}
              key={option.name}
              name={option.name}
              path={option.path}
              alt={option.alt}
              icon={option.icon}
              $isSelected={option.path === actualRoute}
            />
          ))}
      </MenuList>
    </ContainerMenu>
  );
};
