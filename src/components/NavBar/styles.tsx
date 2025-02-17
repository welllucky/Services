import { OptionMenuStyleProps } from "@/types";
import Link from "next/link";
import styled from "styled-components";

export const ContainerMenu = styled.div<{ color?: string }>`
  width: 100%;
  padding: 0;
  background-color: ${({ color }) => color || "#f5f5f5"};
`;

export const MenuList = styled.div<OptionMenuStyleProps>`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
`;

export const OptionMenuStyle = styled(Link)<OptionMenuStyleProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  background-color: ${({ $isSelected }) =>
    ($isSelected === true ? "#7AC143" : "#F5F5F5")};
  ${({ $isPreselected, $isSelected }) =>
    $isPreselected && !$isSelected && "background-color: #c1f599;"};
  /* F8F5F5 */
`;

export const IconArea = styled.div<OptionMenuStyleProps>`
  display: flex;
  width: 64px;
  height: 32px;
  border-radius: 16px;
  align-items: center;
  justify-content: center;
  background-color: ${({ $isSelected, $backgroundColor }) =>
    ($isSelected ? "#7AC143" : $backgroundColor || "#F5F5F5")};

  ${({ $isPreselected, $isSelected }) =>
    $isPreselected && !$isSelected && "background-color: #c1f599;"};

  &:active {
    background-color: #c1f599;
  }

  & > svg {
    fill: ${({ $isSelected }) => ($isSelected ? "#F5F5F5" : "#352F2F")};
  }
  transition: 0.2s ease-in-out;
`;

export const TextMenu = styled.p<OptionMenuStyleProps>`
  text-decoration: none;
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  color: ${({ $isSelected, $highlightTextColor }) =>
    ($isSelected ? $highlightTextColor || "#7AC143" : "#252728")};
  list-style: none;

  ${({ $isPreselected, $isSelected }) =>
    $isPreselected && !$isSelected && "color: #51782f;"};
`;
