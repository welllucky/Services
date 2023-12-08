import { ContainerMenu, MenuList } from "./styles";
import OptionMenu from "./OptionMenu";
import { OptionMenuProps } from "@/types";
import { usePathname } from "next/navigation";

interface NavigationBarProps {
	color?: string;
  highlightTextColor?: string;
	options: OptionMenuProps[];
}

export const NavigationBar = ({
	color,
	highlightTextColor,
	options,
}: NavigationBarProps) => {
	const actualRoute = usePathname();
	return (
		<ContainerMenu color={color}>
			<MenuList>
				{options.map((option) => {
					return (
						<OptionMenu
							highlightTextColor={highlightTextColor}
							color={color}
							key={option.name}
							name={option.name}
							path={option.path}
							alt={option.alt}
							iconUnselect={option.iconUnselect}
							iconSelect={option.iconSelect}
							$isSelected={option.path === actualRoute}
						/>
					);
				})}
			</MenuList>
		</ContainerMenu>
	);
};
