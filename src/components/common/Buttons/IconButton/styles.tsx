import Link from "next/link";
import styled from "styled-components";

interface CustomButtonProps {
  path?: string;
  alt?: string;
  color?: string;
  width?: string | number;
  height?: string | number;
  hoverColor?: string;
}

const IconButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

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
  width: ${(props) => props.width ?? "fit-content"};
  height: ${(props) => props.height ?? "fit-content"};
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.1);
    color: ${(props) => props.hoverColor};
  }
`;

export { CustomButton, CustomButtonAsLink, IconButtonWrapper };
