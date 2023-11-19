import Link from "next/link";
import { BackButton } from "@/components";
import {
	HeaderRegister,
	RegisterButton,
	RegisterContainer,
	TitleInputArea,
	PasswordText,
} from "./styles";
import { SelectOption } from "@/components/SelectOption";
import setores from "@/components/mocks/setores";
import { useState } from "react";
// import RegisterIcon from "@/assets/Icons/png/Register.png";
// import RegisterIconGray from "@/assets/Icons/RegisterGray.png";
import { LoadingScreen } from "@/components/LoadingScreen";
import { EyeIcon, EyeClosedIcon, ClearIcon, ClearDisabledIcon } from "@/assets";
import { InputLegend } from "@/components/FildestInput";
import { Modal } from "@/components/Modal";


interface UserRegisterProps {
	matricula: string;
	nome: string;
	funcao: string;
	email: string;
	senha: string;
	resolutor: number;
	setor_idSetor: number;
	filial_idFilial: number;
}

export const UserRegister = () => {
	const [cargos, setCargos] = useState<{ nome: string }[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [responseMessage, setResponseMessage] = useState("");

	const [formState, setFormState] = useState<UserRegisterProps>({
		matricula: "",
		nome: "",
		funcao: "",
		email: "",
		senha: "",
		resolutor: 0,
		setor_idSetor: 0,
		filial_idFilial: 0,
	});

	const [openModal, setOpenModal] = useState(false);
	const validEmail = /[a-zA-Z0-9._]+@[a-z0-9]+\.[a-z.]{2,}$/;

	const isDisabledButton =
		validEmail.test(formState.email) && formState.senha.length > 7;

	const verifyModal = () => {
		if (!openModal) {
			setOpenModal(true);

			setTimeout(() => {
				window.location.href = "/Login";
			}, 3000);
		}
	};

	function PostRegister(
		formMatricula: number,
		formNome: string,
		formFuncao: string,
		formEmail: string,
		formSenha: string,
		formResolutor: number,
		formSetorIdSetor: number,
		formFilialIdFilial: number
	) {
		const matricula = formMatricula;
		const nome = formNome;
		const funcao = formFuncao;
		const email = formEmail;
		const senha = formSenha;
		const resolutor = formResolutor;
		const setor_idSetor = formSetorIdSetor;
		const filial_idFilial = formFilialIdFilial;

	// 	api
	// 		.post("/CadastrarUsuario/", {
	// 	api
	// 		.post("/CadastrarUsuario/", {
	// 			matricula,
	// 			nome,
	// 			funcao,
	// 			email,
	// 			senha,
	// 			resolutor,
	// 			setor_idSetor,
	// 			filial_idFilial,
	// 		})
	// 		.then(() => {
	// 			verifyModal();
	// 		})
	// 		.catch((response) => {
	// 			console.log(response, response.response.data);
	// 			setResponseMessage(response.response.data);
	// 		})
	// 		.finally(() => {
	// 			setIsLoading(false);
	// 		});
	// }

	const [passwordVisible, setPasswordVisible] = useState(false);

	return (
		<>
			{isLoading === true ? (
				<LoadingScreen />
			) : (
				<RegisterContainer>
					<Link href={"/login"}>
						<BackButton
							actionText={"Login"}
							color="#AA0E27"
							fontWeight={"600"}
						/>
					</Link>
					<HeaderRegister>
						Para começarmos, preencha as informações abaixo:
					</HeaderRegister>
					<TitleInputArea>Quem é você?</TitleInputArea>
					<InputLegend
						legendText="Matrícula"
						maxLength={5}
						inputType="tel"
						value={String(formState.matricula)}
						onChange={(e) => {
							setFormState({
								...formState,
								matricula: e.target?.value,
							});
						}}
						placeholder="Ex: 99999"
						border="1px solid #49454f"
						width="auto"
						hasImage
						source={
							formState.matricula.length === 0 ? ClearDisabledIcon : ClearIcon
						}
						imgDescription="icone de limpar"
						onClickImage={() => {
							setFormState({ ...formState, matricula: "" });
						}}
					/>
					{(responseMessage === "A matrícula já está cadastrada." ||
						responseMessage ===
							"O email e a matrícula já estão cadastrados.") && (
						<PasswordText>Matricula já cadastrada.</PasswordText>
					)}

					<InputLegend
						legendText="Nome"
						maxLength={80}
						inputType="text"
						value={formState.nome}
						onChange={(e) => {
							setFormState({
								...formState,
								nome: e.target?.value,
							});
						}}
						placeholder="Ex: João de Barros"
						border="1px solid #49454f"
						width="auto"
						hasImage
						source={formState.nome.length === 0 ? ClearDisabledIcon : ClearIcon}
						imgDescription="icone de limpar"
						onClickImage={() => {
							setFormState({ ...formState, nome: "" });
						}}
					/>
					<TitleInputArea>Qual sua filial?</TitleInputArea>
					<SelectOption
						onChange={(e) => {
							setFormState({
								...formState,
								filial_idFilial: Number(e.target?.value),
							});
						}}
						legendText="Filial"
						height="56px"
						width="auto">
						<option
							value=""
							disabled
							selected>
							Qual sua filial?
						</option>
						<option value="1">Garanhuns - PE</option>
						<option value="2">Imbiribeira - PE</option>
						<option value="3">Salvador - BA</option>
						<option value="4">Tamarineira - PE</option>
						<option value="5">Aracaju - SE</option>
						<option value="6">João Pessoa - PB</option>
						<option value="7">Natal - RN</option>
						<option value="8">Caruaru - PE</option>
					</SelectOption>
					<TitleInputArea>O que você faz?</TitleInputArea>
					<SelectOption
						onChange={(e) => {
							const setorId = Number(e.target.value);
							const selectedSetor = setores.find(
								(setor) => setor.id === setorId
							);
							const selectedCargos = selectedSetor?.cargos || [];
							setCargos(selectedCargos);
							setFormState({
								...formState,
								setor_idSetor: setorId,
								funcao: "",
								resolutor: 0,
							});
						}}
						legendText="Setor"
						height="56px"
						width="auto">
						<option
							value=""
							disabled
							selected>
							Qual setor você trabalha?
						</option>
						{setores?.map((setor) => (
							<option
								key={setor.id}
								value={setor.id}>
								{setor.setor}
							</option>
						))}
					</SelectOption>
					<SelectOption
						onChange={(e) => {
							setFormState({
								...formState,
								funcao: e.target?.value,
							});
						}}
						legendText="Cargo"
						height="56px"
						width="auto">
						<option
							value=""
							disabled
							selected>
							Qual seu cargo?
						</option>
						{cargos?.map((cargo) => (
							<option
								key={cargo.nome}
								value={cargo.nome}>
								{cargo.nome}
							</option>
						))}
					</SelectOption>
					<TitleInputArea>Crie seu acesso</TitleInputArea>
					<InputLegend
						legendText="Email"
						maxLength={45}
						hasImage
						value={formState.email}
						onChange={(e) => {
							setFormState({
								...formState,
								email: e.target?.value,
							});
						}}
						placeholder="Ex: joao.barros@fc.com"
						height="56px"
						pattern="[a-zA-Z0-9._]+@[a-z0-9]+\.[a-z.]{2,}$"
						width="auto"
						border="1px solid #49454f"
						source={
							formState.email.length === 0 ? ClearDisabledIcon : ClearIcon
						}
						imgDescription="icone de limpar"
						onClickImage={() => {
							setFormState({ ...formState, email: "" });
						}}
					/>
					{!validEmail.test(formState.email) && formState.email !== "" && (
						<PasswordText>Inserira um email válido</PasswordText>
					)}
					{validEmail.test(formState.email) &&
						(responseMessage ===
							"O email e a matrícula já estão cadastrados." ||
							responseMessage === "O email já está cadastrado.") && (
							<PasswordText>Email já cadastrado.</PasswordText>
						)}
					<InputLegend
						legendText="Senha"
						inputType={passwordVisible ? "text" : "password"}
						maxLength={38}
						minLength={8}
						hasImage
						source={passwordVisible ? EyeClosedIcon : EyeIcon}
						onChange={(e) => {
							setFormState({
								...formState,
								senha: e.target?.value,
							});
						}}
						placeholder="Digite sua senha"
						height="56px"
						required
					/>
					{formState.senha.length < 8 && formState.senha.length > 1 && (
						<PasswordText>Senha deve ter no mínimo 8 caracteres</PasswordText>
					)}
					<RegisterButton
						type="submit"
						disabled={!isDisabledButton}
						onClick={() => {
							PostRegister(
								Number(formState.matricula),
								formState.nome,
								formState.funcao,
								formState.email,
								formState.senha,
								formState.resolutor,
								Number(formState.setor_idSetor),
								Number(formState.filial_idFilial)
							);
							setIsLoading(true);
						}}>
						{/* <img
							src={!isDisabledButton ? RegisterIconGray : RegisterIcon}
							alt="ícone de cadastro"
						/> */}
						Cadastrar
					</RegisterButton>
					<Modal
						message={"Usuário cadastrado com sucesso!"}
						isTrue={openModal}
					/>
				</RegisterContainer>
			)}
		</>
	);
}};
