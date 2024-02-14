import Image from "next/image";
import { IconArea, TextMenu } from "../styles";
import { OptionMenuProps } from "@/assets";
import { CustomLink } from "@/components";

const OptionMenu = ({
  name,
  iconUnselect,
  iconSelect,
  path,
  alt,
  $isSelected,
  color,
  $highlightTextColor
}: OptionMenuProps) => {
  return (
    <CustomLink
      $flexDirection="column"
      href={path}>
      <IconArea
        $backgroundColor={color}
        $isClicked={$isSelected}>
        <Image
          src={$isSelected ? iconSelect : iconUnselect}
          alt={alt}
        />
      </IconArea>
      <TextMenu
        $highlightTextColor={$highlightTextColor}
        $isClicked={$isSelected}>
        {name}
      </TextMenu>
    </CustomLink>
  );
};

export default OptionMenu;
