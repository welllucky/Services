import styled from "styled-components";
import Link from "next/link";

interface CustomButtonProps {
  path?: string;
	alt?: string;
	color?: string;
	width?: string;
	height?: string;
	onHover?: React.MouseEventHandler<HTMLButtonElement> | undefined;
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
		color: ${(props) => (props.onHover ? "#fff" : "#fff")};
	}
`;

const CustomButton = styled.button<CustomButtonProps>`
	width: ${(props) => props.width ?? "2.5rem"};
	height: ${(props) => props.height ?? "2.5rem"};
	color: ${(props) => props.color ?? "#fff"};
	background-color: transparent;
	border: none;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	&:hover {
		transform: scale(1.1);
		color: ${(props) => (props.onHover ? "#fff" : "#fff")};
	}
`;

export { IconButtonWrapper, CustomButton, CustomButtonAsLink };
