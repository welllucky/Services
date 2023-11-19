import { Link } from "react-router-dom";
import { BackButton } from "../../../Components/BackButton";
import {
	CodeVerificationContainer,
	CodeVerificationContent,
	CodeVerificationTitle,
	CodeWrraper,
	ErrorText,
	MainCointainer,
} from "./styles";
import { BoxEmpty } from "../../../Components/BoxEmpty";
import VerificationIcon from "../../../Assets/verification.svg";
import { InputBoxValidation } from "../../../components/InputCodeValidation";
import { Button } from "../../../components/Buttons/Button";
import { ContainerButton } from "../recuperar-senha/styles";
import { api } from "../../../Services";
import { useState } from "react";
import { LoadingScreen } from "../../../components/LoadingScreen";

// interface VerifyCodeProps {
// 	matricula: string;
// 	codigo: string;
// }

export const CodeVerification = () => {
	const [codigo, setCodigo] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	const usuarioRec = JSON.parse(localStorage.getItem("matriculaPsw") ?? "null");

	const verifyCode = () => {
		setIsLoading(true);
		api
			.get(
				`/FluxoRecuperarSenha/verificar-codigo/${usuarioRec.matricula}/${codigo}`
			)
			.then(() => {
				window.location.replace("/NovaSenha");
				localStorage.setItem(
					"matriculaPsw",
					JSON.stringify({
						matricula: usuarioRec.matricula,
						recoveyCode: codigo,
					})
				);
			})
			.catch((error) => {
				setIsError(true);
				if (error.response === 500) {
					window.alert("Ocorreu um erro inesperado.");
				}
			})
			.finally(() => setIsLoading(false));
	};

	return (
		<MainCointainer>
			{isLoading && <LoadingScreen />}
			<Link to="/login">
				<BackButton
					actionText={"Login"}
					color="#AA0E27"
					fontWeight={"600"}
				/>
			</Link>
			<CodeVerificationContainer>
				<CodeWrraper>
					<BoxEmpty
						title="Dados confirmados!"
						icon={VerificationIcon}
						color="#68A439"
						fontSize="16px"
					/>
					<CodeVerificationContent>
						<CodeVerificationTitle>
							Digite abaixo o código enviado ao seu email!
						</CodeVerificationTitle>
						<InputBoxValidation getInputValue={(e) => setCodigo(e)} />
					</CodeVerificationContent>
					<ErrorText isErro={isError}>
						Código de verificação incorreto.
					</ErrorText>
				</CodeWrraper>
			</CodeVerificationContainer>

			<ContainerButton>
				<Button
					text="Voltar"
					bg="transparent"
					color="#635F60"
					colorBorder="#635F60"
					nextPage="/RecuperarSenha"
				/>
				<Button
					text="Próximo"
					onClick={() => verifyCode()}
				/>
			</ContainerButton>
		</MainCointainer>
	);
};
