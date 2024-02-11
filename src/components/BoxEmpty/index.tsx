"use client";

import { BoxEmptyProps } from "@/types";
import EmptyBox from "@/assets/Images/EmptyBox.png";
import { RequestsEmpty, RequestsTitle } from "./styles";
import Image from "next/image";
import { useTheme } from "styled-components";

export const BoxEmpty = ({
  title,
  icon,
  alt,
  color,
  fontSize
}: BoxEmptyProps) => {
  const theme = useTheme();
  return (
    <RequestsEmpty>
      <Image src={icon || EmptyBox} alt={alt || "caixa vazia"} />
      <RequestsTitle
        color={color || theme.colors.neutral["55"]}
        fontSize={fontSize}>
        {title}
      </RequestsTitle>
    </RequestsEmpty>
  );
};
