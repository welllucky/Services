import { BackButton } from "../../../Components/BackButton";
import { BoxEmpty } from "../../../Components/BoxEmpty";
import { Button } from "../../../components/Buttons/Button";
import UserFound from "../../../Assets/Images/UserFound.png";
import EyeIcon from "../../Login/svg/eye.svg";
import EyeClosedIcon from "../../Login/svg/eyeClosed.svg";
import { InputLegend } from "../../../components/FildestInput";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
	InputContainer,
	NewPasswordContainer,
	PasswordText,
	Title,
} from "./styles";
import { Modal } from "../../../Components/Modal";
import { ContainerButton } from "../recuperar-senha/styles";
import { api } from "../../../Services";
import { LoadingScreen } from "../../../components/LoadingScreen";

export const NewPassword = () => {
	const [passwordVisible, setPasswordVisible] = useState(false);
	const [newPasswordVisible, setNewPasswordVisible] = useState(false);
	const [newPassword, setNewPassword] = useState("");
	const [newConfirmPassword, setConfirmNewPassword] = useState("");

	const [openModal, setOpenModal] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const usuarioRec = JSON.parse(localStorage.getItem("matriculaPsw") ?? "null");

	const verifyModal = () => {
		setIsLoading(true);
		api
			.put(
				`https://swagger.pixelsquad.tech/FluxoRecuperarSenha/alterar-senha/${usuarioRec.matricula}`,
				{
					novaSenha: newPassword,
					confirmacaoSenha: newConfirmPassword,
					codigoRecuperacao: usuarioRec.recoveyCode,
				},
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			)
			.then(() => {
				setOpenModal(true);
				setTimeout(() => {
					window.location.href = "/Login";
				}, 3000);
			})
			.catch((error) => {
				if (error.response !== undefined) {
					window.alert("Ocorreu um erro inesperado, tente novamente.");
					setTimeout(() => {
						window.location.href = "/RecuperarSenha";
					}, 2000);
				}
			})
			.finally(() => setIsLoading(false));
	};

	return (
		<NewPasswordContainer>
			{isLoading && <LoadingScreen />}
			<Link to="/login">
				<BackButton
					actionText={"Login"}
					color="#AA0E27"
					fontWeight={"600"}
				/>
			</Link>
			<BoxEmpty
				// alt=""
				// src=""
				title="Identidade Confirmada!"
				color="#68A439"
				fontSize="16px"
				icon={UserFound}
			/>
			<InputContainer>
				<Title>Digite uma nova senha:</Title>
				<InputLegend
					legendText="Nova senha"
					inputType={passwordVisible ? "text" : "password"}
					maxLength={38}
					minLength={8}
					hasImage
					source={passwordVisible ? EyeClosedIcon : EyeIcon}
					onChange={(e) => {
						setNewPassword(e.target.value);
					}}
					onClickImage={() => {
						setPasswordVisible(!passwordVisible);
					}}
					placeholder="Digite sua senha"
					height="56px"
					width="auto"
					border="1px solid #49454f"
				/>
				{newPassword.length < 8 && newPassword !== "" && (
					<PasswordText>Senha deve ter no mínimo 8 caracteres</PasswordText>
				)}

				<InputLegend
					legendText="Confirmar senha"
					inputType={newPasswordVisible ? "text" : "password"}
					maxLength={38}
					minLength={8}
					hasImage
					source={newPasswordVisible ? EyeClosedIcon : EyeIcon}
					onChange={(e) => {
						setConfirmNewPassword(e.target.value);
					}}
					onClickImage={() => {
						setNewPasswordVisible(!newPasswordVisible);
					}}
					placeholder="Digite sua senha"
					height="56px"
					width="auto"
					border="1px solid #49454f"
				/>
				{newConfirmPassword !== "" && newPassword !== newConfirmPassword && (
					<PasswordText>As senhas não coincidem</PasswordText>
				)}
			</InputContainer>
			<ContainerButton>
				<Button
					text="Voltar"
					bg="transparent"
					color="#635F60"
					colorBorder="#635F60"
					nextPage="/VerificacaoCodigo"
				/>
				<Button
					text="Alterar Senha"
					onClick={() => verifyModal()}
					disabled={
						newPassword !== newConfirmPassword ||
						newPassword === "" ||
						newPassword.length < 8
					}
				/>
			</ContainerButton>
			<Modal
				message={"Senha alterada com sucesso!"}
				isTrue={openModal}
			/>
		</NewPasswordContainer>
	);
};
