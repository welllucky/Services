"use client";

import { NoContentProps } from "@/types";
import EmptyBox from "@/assets/Images/EmptyBox.png";
import { NoContentContainer, NoContentTitle } from "./styles";
import Image from "next/image";
import { useTheme } from "styled-components";

export const NoContent = ({
  title,
  icon,
  alt,
  color,
  fontSize
}: NoContentProps) => {
  const theme = useTheme();
  return (
    <NoContentContainer>
      {typeof icon === "string" || typeof icon === "undefined" ? (
        <Image
          src={icon || EmptyBox}
          alt={alt || "caixa vazia"}
        />
      ) : (
        icon
      )}
      <NoContentTitle
        color={color || theme.colors.neutral["55"]}
        fontSize={fontSize}>
        {title}
      </NoContentTitle>
    </NoContentContainer>
  );
};
