import {
	ContainerSideBar,
	ContainerIcon,
	SpaceIcon,
	IconTitle,
	ImageIcon,
} from "./styles";
import { FCLogo } from "./svg";
import userIcon from "./svg/UserIcon.svg";
import homeIcon from "./svg/iniciotracado.svg";
import homeWhiteIcon from "./svg/iniciobranco.svg";
import attendancesIcon from "./svg/atendimentotracado.svg";
import attendancesWhiteIcon from "./svg/atendimentobranco.svg";
import requestIcon from "./svg/chamadostracado.svg";
import consultIcon from "./svg/consultar.svg";
import consultWhiteIcon from "./svg/consultarbranco.svg";
import sectorsIcon from "./svg/setorestracado.svg";
import sectorsWhiteIcon from "./svg/setoresbranco.svg";

import { useNavigate } from "react-router-dom";

export const SideBarLeft = () => {
	const navigate = useNavigate();
	return (
		<ContainerSideBar>
			<FCLogo />

			<ContainerIcon>
				<SpaceIcon
					onClick={() => navigate("/mainpage")}
					id={window.location.pathname === "/mainpage" ? "active" : ""}>
					<ImageIcon
						src={
							window.location.pathname === "/mainpage"
								? homeWhiteIcon
								: homeIcon
						}
					/>
					<IconTitle
						color={
							window.location.pathname === "/mainpage" ? "white" : "black"
						}>
						Início
					</IconTitle>
				</SpaceIcon>

				<SpaceIcon
					onClick={() => navigate("/attendancespage")}
					id={window.location.pathname === "/attendancespage" ? "active" : ""}>
					<ImageIcon
						src={
							window.location.pathname === "/attendancespage"
								? attendancesWhiteIcon
								: attendancesIcon
						}
					/>
					<IconTitle
						color={
							window.location.pathname === "/attendancespage"
								? "white"
								: "black"
						}>
						Atendimentos
					</IconTitle>
				</SpaceIcon>

				<SpaceIcon
					onClick={() => navigate("/requestspage")}
					id={window.location.pathname === "/requestspage" ? "active" : ""}>
					<ImageIcon src={requestIcon} />
					<IconTitle
						color={
							window.location.pathname === "/requestspage" ? "white" : "black"
						}>
						Chamados
					</IconTitle>
				</SpaceIcon>

				<SpaceIcon
					onClick={() => navigate("/consultspage")}
					id={window.location.pathname === "/consultspage" ? "active" : ""}>
					<ImageIcon
						src={
							window.location.pathname === "/consultspage"
								? consultWhiteIcon
								: consultIcon
						}
					/>
					<IconTitle
						color={
							window.location.pathname === "/consultspage" ? "white" : "black"
						}>
						Consultar
					</IconTitle>
				</SpaceIcon>

				<SpaceIcon
					onClick={() => navigate("/sectorespage")}
					id={window.location.pathname === "/sectorespage" ? "active" : ""}>
					<ImageIcon
						src={
							window.location.pathname === "/sectorespage"
								? sectorsWhiteIcon
								: sectorsIcon
						}
					/>
					<IconTitle
						color={
							window.location.pathname === "/sectorespage" ? "white" : "black"
						}>
						Setores
					</IconTitle>
				</SpaceIcon>
			</ContainerIcon>

			<ImageIcon src={userIcon} />
		</ContainerSideBar>
	);
};
