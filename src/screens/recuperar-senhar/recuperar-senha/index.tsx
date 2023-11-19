import { BackButton } from "../../Components/BackButton";
import { BoxEmpty } from "../../Components/BoxEmpty";
import { Button } from "../../Components/Button";
import {
	HeaderText,
	RecoverPasswordContainer,
	HeaderTitle,
	ContainerButton,
	InputContainer,
	HeaderContainer,
} from "./styles";
import UserNotFound from "../../../Assets/Images/UserNotFound.png";
import UserExists from "../../../Assets/Images/UserExists.png";
import ValidData from "../../../Assets/Images/ValidData.png";
import ClearIcon from "../../../Assets/clear.svg";
import { TitleInputArea } from "../../cadastro/styles";
import { InputLegend } from "../../../components/FildestInput";
import { Link } from "react-router-dom";
import { ChangeEvent, useEffect, useState } from "react";
import { api } from "../../../Services";
import { LoadingScreen } from "../../../components/LoadingScreen";

export const RecoverPassword = () => {
	const [matricula, setMatricula] = useState("");
	const [email, setEmail] = useState("");
	const [matriculaExists, setMatriculaExists] = useState(false);
	const [emailExists, setEmailExists] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const handleMatriculaChange = (event: ChangeEvent<HTMLInputElement>) => {
		setMatricula(event.target.value);
	};

	const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value);
	};

	useEffect(() => {
		if (matricula.length > 4) {
			api
				.get(`/FluxoRecuperarSenha/verificar-usuario-matricula/${matricula}`)
				.then(() => {
					setMatriculaExists(true);
				})
				.catch(() => {
					setMatriculaExists(false);
				});
		}
	}, [matricula]);

	useEffect(() => {
		if (email.length > 10) {
			api
				.get(
					`/FluxoRecuperarSenha/verificar-usuario-email/${matricula}/${email}`
				)
				.then(() => {
					setEmailExists(true);
					setMatriculaExists(true);
				})
				.catch(() => {
					setEmailExists(false);
				});
		}
	}, [matricula, email]);

	const sendCode = () => {
		setIsLoading(true);
		api
			.get(`/FluxoRecuperarSenha/enviar-codigo/${matricula}/${email}`)
			.then(() => {
				window.location.replace("/VerificacaoCodigo");
				localStorage.setItem(
					"matriculaPsw",
					JSON.stringify({
						matricula: matricula,
						recoveyCode: 0,
					})
				);
			})
			.catch(() => {
				console.error("Falha ao enviar o código");
			})
			.finally(() => setIsLoading(false));
	};

	return (
		<RecoverPasswordContainer>
			<Link to="/login">
				<BackButton
					actionText="Login"
					color="#AA0E27"
					fontWeight={"600"}
				/>
			</Link>
			<HeaderContainer>
				<HeaderTitle>Esqueceu sua senha?</HeaderTitle>
				<HeaderText>
					Não se preocupe, iremos te ajudar a recuperar seu acesso!
				</HeaderText>
			</HeaderContainer>
			{matriculaExists && !emailExists ? (
				<BoxEmpty
					title="Usuário localizado!"
					color="#53565A"
					fontSize="16px"
					icon={UserExists}
					alt="Usuário foi localizado"
				/>
			) : matriculaExists && emailExists ? (
				<BoxEmpty
					alt="Dados confirmados"
					title="Dados confirmados!"
					color="#68A439"
					fontSize="16px"
					icon={ValidData}
				/>
			) : (
				<BoxEmpty
					alt="Usuário não foi identificado"
					title="Usuário não identificado!"
					color="#E8273F"
					fontSize="16px"
					icon={UserNotFound}
				/>
			)}

			<InputContainer>
				<TitleInputArea>Digite as seguintes informações:</TitleInputArea>
				<InputLegend
					legendText="Matrícula"
					maxLength={5}
					inputType="tel"
					placeholder="Ex: 99999"
					border="1px solid #49454f"
					width="auto"
					hasImage
					id="matricula"
					value={matricula}
					onClickImage={() => setMatricula("")}
					onChange={handleMatriculaChange}
					source={ClearIcon}
					imgDescription="icone de limpar"
				/>
				<InputLegend
					legendText="Email"
					maxLength={45}
					placeholder="Ex: joao.barros@fc.com"
					height="56px"
					pattern="[a-zA-Z0-9._]+@[a-z0-9]+\.[a-z.]{2,}$"
					width="auto"
					border="1px solid #49454f"
					hasImage
					value={email}
					onClickImage={() => setEmail("")}
					source={ClearIcon}
					onChange={handleEmailChange}
					imgDescription="icone de limpar"
				/>
			</InputContainer>
			<ContainerButton>
				<Button
					text="Voltar"
					bg="transparent"
					color="#635F60"
					colorBorder="#635F60"
					nextPage={"/Login"}
				/>
				<Button
					text="Confirmar"
					onClick={() => {
						sendCode();
						saveMatricula();
					}}
					disabled={!emailExists || !matriculaExists ? true : false}
				/>
			</ContainerButton>
		</RecoverPasswordContainer>
	);
};
