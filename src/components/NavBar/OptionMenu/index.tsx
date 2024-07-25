import { OptionMenuProps } from "@/types";
import { CustomLink } from "@/components";
import { IconArea, TextMenu } from "../styles";

const OptionMenu = ({
  name,
  icon,
  path,
  $isSelected,
  color,
  $highlightTextColor,
}: OptionMenuProps) => (
  <CustomLink
    $flexDirection="column"
    href={path}>
    <IconArea
      $backgroundColor={color}
      $isSelected={$isSelected}>
      {icon}
    </IconArea>
    <TextMenu
      $highlightTextColor={$highlightTextColor}
      $isSelected={$isSelected}>
      {name}
    </TextMenu>
  </CustomLink>
  );

export default OptionMenu;
