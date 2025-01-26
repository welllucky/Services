import { SearchIcon } from "@/assets";
import { CustomButton, CustomButtonProps } from "@/components";
import { theme } from "@/styles";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Common/Buttons/CustomButton",
  component: CustomButton,
  tags: ["button", "common"],
  argTypes: {
    text: {
      description: "Texto do botão",
      control: "text",
      table: {
        category: "Conteúdo",
      },
    },
    mode: {
      description: "Estilo do botão",
      control: {
        type: "inline-radio",
        options: ["filled", "outlined"],
      },
      table: {
        category: "Aparência",
      },
    },
    color: {
      description: "Cor do texto",
      control: "color",
      table: {
        category: "Aparência",
      },
    },
    $backgroundColor: {
      description: "Cor do botão",
      control: "color",
      table: {
        category: "Aparência",
      },
    },
    icon: {
      description: "Ícone do botão",
      control: "object",
      table: {
        category: "Conteúdo",
      },
    },
    width: {
      description: "Largura do botão",
      control: "text",
      table: {
        category: "Aparência",
      },
    },
    height: {
      description: "Altura do botão",
      control: "text",
      table: {
        category: "Aparência",
      },
    },
    onClick: {
      description: "Função de clique",
      table: {
        category: "Ação",
      },
    },
    disabled: {
      description: "Desabilita o botão",
      control: "boolean",
      table: {
        category: "Estado",
      },
    },
    textSize: {
      description: "Tamanho do texto",
      control: "text",
      table: {
        category: "Aparência",
      },
    },
  },
} satisfies Meta<CustomButtonProps>;

export const FilledButton: StoryObj<CustomButtonProps> = {};

export const OutlinedButton: StoryObj<CustomButtonProps> = {
  args: {
    mode: "outlined",
    color: theme.colors.neutral.inverted,
    $backgroundColor: theme.colors.neutral.inverted,
  },
};

export const WithIcon: StoryObj<CustomButtonProps> = {
  args: {
    text: "Buscar",
    icon: (
      <SearchIcon
        height={26}
        width={26}
        color={theme.colors.neutral.default}
      />
    ),
  },
};

export const FilledDisabled: StoryObj<CustomButtonProps> = {
  args: {
    disabled: true,
  },
};

export const OutlinedDisabled: StoryObj<CustomButtonProps> = {
  args: {
    disabled: true,
    mode: "outlined",
  },
};
