"use client";

import { usePathname } from "next/navigation";
import { useCallback, useState } from "react";

import { OptionMenuProps } from "@/types";
import { buildTestIds } from "@/utils";

import { Skeleton, SkeletonContainer } from "../Skeleton";
import OptionMenu from "./OptionMenu";
import { ContainerMenu, MenuList } from "./styles";

interface NavigationBarProps {
  color?: string;
  $highlightTextColor?: string;
  options: OptionMenuProps[];
  isLoading?: boolean;
}
const OptionSkeleton = () => (
  <SkeletonContainer gap="0.4em">
    <Skeleton
      width="24px"
      height="24px"
    />
    <Skeleton
      width="4em"
      height="0.8em"
      type="text"
    />
  </SkeletonContainer>
);

export const NavigationBar = ({
  color,
  $highlightTextColor,
  options,
  isLoading = false,
}: NavigationBarProps) => {
  const actualRoute = usePathname();
  const [optionClicked, setOptionClicked] = useState("");
  const optionCallback = useCallback((optionName: string) => {
    setOptionClicked(optionName);
  }, []);

  const OptionsList = options
    .filter((option) => option.$isVisibled)
    ?.map((option) => (
      <OptionMenu
        $isPreselected={option.name === optionClicked}
        $highlightTextColor={$highlightTextColor}
        color={color}
        key={option.name}
        name={option.name}
        path={option.path}
        alt={option.alt}
        icon={option.icon}
        onClick={optionCallback}
        $isSelected={option.path === actualRoute}
      />
    ));

  if (isLoading) {
    return (
      <ContainerMenu color={color}>
        <MenuList {...buildTestIds("nav-bar-loading")}>
          {options.map((option) => (
            <OptionSkeleton key={option.name} />
          ))}
        </MenuList>
      </ContainerMenu>
    );
  }

  return (
    <ContainerMenu color={color}>
      <MenuList {...buildTestIds("nav-bar-list")}>{OptionsList}</MenuList>
    </ContainerMenu>
  );
};
