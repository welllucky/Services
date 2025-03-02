import { OptionMenuProps } from "@/types";
import { buildTestIds } from "@/utils";
import { CustomLink } from "../../common/CustomLink";
import { IconArea, TextMenu } from "../styles";

const OptionMenu = ({
  name,
  icon,
  path,
  $isSelected,
  $isPreselected,
  color,
  onClick,
  $highlightTextColor,
}: OptionMenuProps) => {
  const handleClick = () => {
    if (onClick) onClick(name);
  };

  return (
    <CustomLink
      {...buildTestIds("nav-option")}
      $flexDirection="column"
      href={path}
      onClick={handleClick}>
      <IconArea
        {...buildTestIds("nav-opiton-icon")}
        $isPreselected={$isPreselected}
        $backgroundColor={color}
        $isSelected={$isSelected}>
        {icon}
      </IconArea>
      <TextMenu
        {...buildTestIds("nav-option-title")}
        $isPreselected={$isPreselected}
        $highlightTextColor={$highlightTextColor}
        $isSelected={$isSelected}>
        {name}
      </TextMenu>
    </CustomLink>
  );
};

export default OptionMenu;
