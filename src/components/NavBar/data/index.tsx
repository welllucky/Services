/* eslint-disable no-param-reassign */
import {
  ClipboardText,
  House,
  ListDashes,
  MagnifyingGlass,
} from "@phosphor-icons/react/dist/ssr";
import { produce } from "immer";

import { OptionMenuProps } from "@/types";

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
    path: "/search",
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
    path: "/tickets",
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
    path: "/issues",
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
