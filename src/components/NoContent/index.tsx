/* eslint-disable no-nested-ternary */

"use client";

import { NoContentProps } from "@/types";

import { EmptyBox } from "@/assets";
import Image from "next/image";
import { useTheme } from "styled-components";
import { NoContentContainer, NoContentTitle } from "./styles";

export const NoContent = ({
  title,
  icon,
  alt,
  color,
  fontSize,
}: NoContentProps) => {
  const theme = useTheme();
  return (
    <NoContentContainer>
      {typeof icon === "string" ? (
        <Image
          src={icon}
          alt={alt ?? "caixa vazia"}
        />
      ) : typeof icon === "undefined" ? (
        <EmptyBox size={92} />
      ) : (
        icon
      )}
      <NoContentTitle
        color={color ?? theme.colors.neutral["55"]}
        fontSize={fontSize}>
        {title}
      </NoContentTitle>
    </NoContentContainer>
  );
};
