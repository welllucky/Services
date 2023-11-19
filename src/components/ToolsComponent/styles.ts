import styled from "styled-components";
import theme from "../../styles/theme/theme";

export const ContianerGeneralToolsComponent = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: flex-end;
`;

export const ToolsComponentContianer = styled.form`
	background-color: ${theme.colors.green["085"]};
	display: flex;
	justify-content: flex-end;
	align-items: flex-end;
	border-radius: 12px;
	padding: 0;
	width: auto;
	margin-top: 16rem;
`;

export const BorderBottom = styled.section`
	margin: 1.2rem 0;
	border-bottom: 1px solid ${theme.colors.neutral[195]};
	width: 100%;
`;

export const Attach = styled.label`
	cursor: pointer;
`;

export const Video = styled.label`
	cursor: pointer;
`;

export const Image = styled.label`
	cursor: pointer;
`;

export const Camera = styled.label`
	cursor: pointer;
`;
