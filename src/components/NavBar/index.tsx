import { ContainerMenu, MenuList } from "./styles";
import OptionMenu from "./OptionMenu";
import { OptionMenuProps } from "@/types";
import { usePathname } from "next/navigation";

interface NavigationBarProps {
	options: OptionMenuProps[];
}

export const NavigationBar = ({ options }: NavigationBarProps) => {
	const actualRoute = usePathname();
	return (
		<ContainerMenu>
			<MenuList>
				{options.map((option) => {
					return (
						<OptionMenu
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
