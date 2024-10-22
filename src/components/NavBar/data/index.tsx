/* eslint-disable no-param-reassign */
import { OptionMenuProps } from "@/types";
import {
  ClipboardText,
  House,
  ListDashes,
  MagnifyingGlass,
} from "@phosphor-icons/react/dist/ssr";
import { produce } from "immer";

const navigationOptions: OptionMenuProps[] = [
  {
    name: "Iniciar",
    path: "/home",
    alt: "inicio",
    icon: (
      <House
        size={24}
        color="#352F2F"
      />
    ),
    $isVisibled: true,
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
    $isVisibled: true,
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
    $isVisibled: true,
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
    $isVisibled: true,
  },
];

const getNavigationOptions = (
  canResolveTicket?: boolean,
  canCreateTicket?: boolean,
) => {
  const availableNavigationOptions = produce(navigationOptions, (draft) => {
    draft.forEach((option) => {
      if (option.path === "/chamados" && !canCreateTicket) {
        option.$isVisibled = canCreateTicket;
      }

      if (option.path === "/solicitacoes" && !canResolveTicket) {
        option.$isVisibled = canCreateTicket;
      }
    });

    return draft;
  });

  return availableNavigationOptions;
};

export { getNavigationOptions, navigationOptions };
