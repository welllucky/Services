import { OptionMenuProps } from "@/types";
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
}: OptionMenuProps) => (
  <CustomLink
    $flexDirection="column"
    href={path}
    onClick={() => {
      if (onClick) onClick(name);
    }}>
    <IconArea
      $isPreselected={$isPreselected}
      $backgroundColor={color}
      $isSelected={$isSelected}>
      {icon}
    </IconArea>
    <TextMenu
      $isPreselected={$isPreselected}
      $highlightTextColor={$highlightTextColor}
      $isSelected={$isSelected}>
      {name}
    </TextMenu>
  </CustomLink>
);

export default OptionMenu;
