import { CheckedVermelhoContainer } from "./styles";
import checkedVermelho from "../svg/checkedVermelho.svg";

export const CheckedVermelho = () => {
	return (
		<CheckedVermelhoContainer>
			<img
				src={checkedVermelho}
				alt="Icone Checked"
				width={40}
				height={40}
			/>
		</CheckedVermelhoContainer>
	);
};
