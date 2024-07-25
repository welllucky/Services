import { OptionMenuProps } from "@/types";
import {
  ClipboardText,
  House,
  ListDashes,
  MagnifyingGlass,
} from "@phosphor-icons/react/dist/ssr";

const navigationOptions: OptionMenuProps[] = [
  {
    name: "Iniciar",
    path: "/",
    alt: "inicio",
    icon: (
      <House
        size={24}
        color="#352F2F"
      />
    ),
  },
  {
    name: "Pesquisa",
    path: "/pesquisa",
    alt: "pesquisa",
    icon: (
      <MagnifyingGlass
        size={24}
        color="#352F2F"
      />
    ),
  },
  {
    name: "Chamados",
    path: "/chamados",
    alt: "chamados",
    icon: (
      <ListDashes
        size={24}
        color="#352F2F"
      />
    ),
  },
  {
    name: "Solicitações",
    path: "/solicitacoes",
    alt: "solicitações",
    icon: (
      <ClipboardText
        size={24}
        color="#352F2F"
      />
    ),
  },
];

export default navigationOptions;
