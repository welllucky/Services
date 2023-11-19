// import { useState } from "react";
// import { BackButton, NavigationBar, Midia, Modal } from "@/components";

// import {
// 	ChamadoContent,
// 	ChamadoText,
// 	MidiaDiv,
// 	SreenContainer,
// } from "./styles";

// import { useTypeCall } from "../../../utils/contexts";
// import { CallInformation } from "../../../components/CallInformation";
// import { LoadingScreen } from "../../../components/LoadingScreen";
// import Link from "next/link";
// import navigationOptions from "@/components/NavBar/data";

// export const ConfirmacaoScreen = () => {
// 	const [openModal, setOpenModal] = useState(false);
// 	const [isLoading, setIsLoading] = useState(false);
// 	const { tipo, resumo, dataOcorrido, descricao, file } = useTypeCall();

// 	const confirmarChamado = () => {
// 		setIsLoading(true);

// 		const verifyModal = () => {
// 			if (!openModal) {
// 				setOpenModal(true);

// 				setTimeout(() => {
// 					window.location.href = "/Chamado";
// 				}, 3000);
// 			}
// 		};

// 		const data = new Date(dataOcorrido);
// 		const dataFormatada = data.toLocaleDateString("pt-BR", { timeZone: "UTC" });

// 		const chamadoData = {
// 			nome: resumo,
// 			tipo: tipo,
// 			dataRelato: dataFormatada,
// 			descricao: descricao,
// 			empregado_Matricula: 1,
// 		};

// 		const uploadFile = (idChamado: number) => {
// 			const matrizFiles = file.find((item) => item) as Blob;
// 			setIsLoading(true);
// 			const formData = new FormData();
// 			formData.append("files", matrizFiles);

// 			// api
// 			// 	.post(
// 			// 		`/AddMidia?tipoMidia=${file.find(
// 			// 			(file) => file.type
// 			// 		)}&chamadoIdChamado=${chamadoData}`,
// 			// 		JSON.stringify(file),
// 			// 		{
// 			// 			headers: {
// 			// 				Authorization: `Bearer ${usuarioLogado.token}`,
// 			// 				"Content-Type": "application/json",
// 			// 			},
// 			// 		}
// 			// 	)
// 			// 	.then(() => {
// 			// 		verifyModal();
// 			// 	})
// 			// 	.catch((err) => {
// 			// 		console.error(`ops! ocorreu um erro ${err}`);
// 			// 	})
// 			// 	.finally(() => {
// 			// 		setIsLoading(false);
// 			// 	});
// 		};

// 		const message = (
// 			<>
// 				Chamado registrado <br /> com sucesso
// 			</>
// 		);
// 		return isLoading ? (
// 			<LoadingScreen />
// 		) : (
// 			<SreenContainer>
// 				<Link href="/MidiaChamado">
// 					<BackButton actionText="Anexar mídia"></BackButton>
// 				</Link>
// 				<ChamadoText>Confirmar informações</ChamadoText>
// 				<ChamadoContent>
// 					<CallInformation legendText="Resumo">{resumo}</CallInformation>
// 					<CallInformation legendText="tipo">{tipo}</CallInformation>

// 					<CallInformation legendText="Data do Ocorrido">
// 						{dataFormatada}
// 					</CallInformation>
// 					<CallInformation legendText="Descrição">{descricao}</CallInformation>
// 					{file.length ? (
// 						<>
// 							<p>Mídia</p>
// 							<MidiaDiv>
// 								{file.map((file, index) => (
// 									<Midia
// 										key={`${file.name}#${index}`}
// 										file={file}
// 									/>
// 								))}
// 							</MidiaDiv>
// 						</>
// 					) : null}
// 					<Modal
// 						message={message}
// 						isTrue={openModal}
// 					/>
// 				</ChamadoContent>
// 				<NavigationBar options={navigationOptions} />
// 			</SreenContainer>
// 		);
// 	};
// };
