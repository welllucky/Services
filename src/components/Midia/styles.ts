import styled, { keyframes } from "styled-components";
import theme from "../../styles/theme/theme";
// import theme from "../../styles/theme";

interface ImageMapProps {
	showImage?: boolean;
}

export const MidiaContainer = styled.div`
	height: 100px;
`;

export const MidiaText = styled.span`
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
`;

export const MidiaDiv = styled.div`
	display: grid;
	grid-template-columns: repeat(1fr, 3fr);
	grid-template-areas: "1 1 1";
	gap: 2rem;
`;

export const ContainerDeMidia = styled.section`
	position: absolute;
	top: 50%;
	left: 15%;
`;

export const FileContainer = styled.section`
	width: 4rem;
	height: 4rem;
	border-radius: 50%;
	margin: auto 0 auto 1rem;
	cursor: pointer;
`;

export const ImageTypeFileContent = styled.section`
	margin: 0.7rem;
	width: 200%;
	box-shadow: 2px 2px 3px ${theme.colors.neutral.black};
`;

export const downAndUpAnimation = keyframes`
        0% {
            opacity: 0;
        }
        
        100% {
            opacity: 1;
        }
      
`;

export const TypeFile = styled.section<ImageMapProps>`
	padding-left: 1.6rem;
	margin: auto 0;
	justify-content: center;
	display: ${({ showImage }) => (showImage ? "flex" : "none")};
	width: 30px;
	animation: ${downAndUpAnimation} 500ms ease-in-out;
	z-index: 10;
`;

export const IconCloseContent = styled.section`
	position: absolute;
	right: 0;
	top: 0;
	margin-top: -2.3rem;
	margin-right: -2.3rem;
	z-index: 2;
`;
