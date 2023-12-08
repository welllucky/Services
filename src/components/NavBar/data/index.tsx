import { OptionMenuProps } from "@/assets";
import homeBlack from "@/assets/Images/HomeBlack.png";
import homeWhite from "@/assets/Images/HomeWhite.png";
import callsBlack from "@/assets/Images/CallsBlack.png";
import callsWhite from "@/assets/Images/CallsWhite.png";
import requestBlack from "@/assets/Images/RequestsBlack.png";
import requestWhite from "@/assets/Images/RequestsWhite.png";
import searchBlack from "@/assets/Images/SearchBlack.png";
import searchWhite from "@/assets/Images/SearchWhite.png";

const navigationOptions: OptionMenuProps[] = [
	{
		name: "Iniciar",
		path: "/",
		alt: "inicio",
		iconUnselect: homeBlack,
		iconSelect: homeWhite,
	},
	{
		name: "Pesquisa",
		path: "/pesquisa",
		alt: "pesquisa",
		iconUnselect: searchBlack,
		iconSelect: searchWhite,
	},
	{
		name: "Chamados",
		path: "/chamados",
		alt: "chamados",
		iconUnselect: callsBlack,
		iconSelect: callsWhite,
	},
	{
		name: "Solicitações",
		path: "/solicitacoes",
		alt: "solicitações",
		iconUnselect: requestBlack,
		iconSelect: requestWhite,
	},
];

export default navigationOptions;
