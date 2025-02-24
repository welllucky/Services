import Link from "next/link";
import styled from "styled-components";

interface CustomButtonProps {
  path?: string;
  alt?: string;
  color?: string;
  width?: string;
  height?: string;
  hoverColor?: string;
}

const IconButtonWrapper = styled.div``;

const CustomButtonAsLink = styled(Link)<CustomButtonProps>`
  width: ${(props) => props.width ?? "2.5rem"};
  height: ${(props) => props.height ?? "2.5rem"};
  color: ${(props) => props.color ?? "#fff"};
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
    color: ${(props) => props?.hoverColor ?? "#fff"};
  }
`;

const CustomButton = styled.button<CustomButtonProps>`
  color: ${(props) => props.color ?? "#000000"};
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
    color: ${(props) => props.hoverColor};
  }
`;

export { CustomButton, CustomButtonAsLink, IconButtonWrapper };
