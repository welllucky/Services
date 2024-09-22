import { OptionMenuProps } from "@/types";
import { usePathname } from "next/navigation";
import OptionMenu from "./OptionMenu";
import { ContainerMenu, MenuList } from "./styles";

interface NavigationBarProps {
  color?: string;
  $highlightTextColor?: string;
  options: OptionMenuProps[];
}

export const NavigationBar = ({
  color,
  $highlightTextColor,
  options,
}: NavigationBarProps) => {
  const actualRoute = usePathname();
  return (
    <ContainerMenu color={color}>
      <MenuList>
        {options.map((option) => (
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
