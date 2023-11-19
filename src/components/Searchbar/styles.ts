import styled from "styled-components";

type SearchBarProps = {
	color?: string;
	width?: string;
	height?: string;
	borderColor?: string;
	borderRadius?: string;
	padding?: string;
	fontColor?: string;
	focusColor?: string;
	fontSize?: string;
};

type DividerProps = {
	color?: string;
	width?: string;
	height?: string;
	borderRadius?: string;
};

const StyledSearchBarContainer = styled.div<SearchBarProps>`
	height: ${({ height }) => height ?? "4.8rem"};
	width: ${({ width }) => width ?? "100%"};
	display: flex;
	justify-content: space-between;
	align-items: center;
	border: 0.3rem solid ${({ borderColor }) => borderColor ?? "#000"};
	border-radius: ${({ borderRadius }) => borderRadius ?? "0.5rem"};
	padding: ${({ padding }) => padding ?? "0.5rem"};
	gap: 0.8rem;
`;

const StyledSearchBar = styled.input<SearchBarProps>`
	width: inherit;
	height: 100%;
	border: none;
	border-radius: 0.5rem;
	padding: 0.5rem;
	font-size: ${({ fontSize }) => fontSize ?? "1.6rem"};
	font-weight: 400;
	outline: none;
	transition: 0.2s;
	background-color: transparent;
	&::placeholder {
		color: #8f9194;
	}
`;

const Divider = styled.div<DividerProps>`
	height: ${({ height }) => height ?? "100%"};
	width: ${({ width }) => width ?? "0.4rem;"};
	border-radius: ${({ borderRadius }) => borderRadius ?? "0.5rem"};
	background-color: ${({ color }) => color ?? "#000"};
`;

export { StyledSearchBarContainer, StyledSearchBar, Divider };
