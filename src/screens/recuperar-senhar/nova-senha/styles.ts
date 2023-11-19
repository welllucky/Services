import styled from "styled-components";

export const NewPasswordContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100vh;
	padding: 1.25rem 3rem;
	gap: 1rem;
	background-color: #f8fcf6;
`;

export const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: fit-content;
	width: 100%;
	gap: 1rem;
	background-color: inherit;
	padding: 56px 0px 170px 0px;
`;

export const Title = styled.div`
	font-family: Inter;
	font-style: normal;
	font-size: 16px;
	font-weight: 600;
	line-height: 24px;
	letter-spacing: 0.01em;
	text-align: left;
	color: #5a8f19;
`;

export const PasswordText = styled.span`
	color: #b3261e;
	margin-top: -8px;
`;
