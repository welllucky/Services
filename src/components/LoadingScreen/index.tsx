import { Container, LoadingContainer } from "./styles";

type LoadingScreenProps = {
	overlayOn?: boolean;
};

export const LoadingScreen = ({ overlayOn = true }: LoadingScreenProps) => {
	return overlayOn ? (
		<LoadingContainer>
			<Container>
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
			</Container>
		</LoadingContainer>
	) : (
		<Container>
			<div />
			<div />
			<div />
			<div />
			<div />
			<div />
			<div />
			<div />
		</Container>
	);
};
