import { FormButtons } from "@/components/Form/FormButtons";
import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

export default {
  title: "Common/Form/FormButtons",
  component: FormButtons,
  tags: ["form", "buttons"],
  argTypes: {
    canBack: {
      control: {
        type: "boolean",
      },
      table: {
        category: "Estado",
      },
      if: {
        arg: "hasBackButton",
        eq: true,
      },
      description: "Habilita que o usuário possa voltar para a página anterior",
    },
    canNext: {
      control: {
        type: "boolean",
      },
      table: {
        category: "Estado",
      },
      description: "Habilita que o usuário possa avançar para a próxima página",
    },
    hasBackButton: {
      control: {
        type: "boolean",
      },
      table: {
        category: "Estado",
      },
      description: "Mostra o botão de voltar",
    },
    $hasSeparator: {
      name: "hasSeparator",
      control: {
        type: "boolean",
      },
      table: {
        category: "Estado",
      },
      description: "Mostra o separador",
    },
    nextPage: {
      control: {
        type: "text",
      },
      table: {
        category: "Valor",
      },
      description: "Define a próxima página a ser acessada",
    },
    onClickNextButton: {
      table: {
        category: "Ação",
      },
      description: "Função a ser executada ao clicar no botão de próximo",
    },
    onClickBackButton: {
      table: {
        category: "Ação",
      },
      description: "Função a ser executada ao clicar no botão de voltar",
    },
  },
  args: {
    nextPage: "/home",
    onClickNextButton: fn(),
    onClickBackButton: fn(),
  },
  parameters: {
    nextjs: {
      appDirectory: true,
    },
    layout: "padded",
  },
} satisfies Meta;

export const DefaultFormButtons: StoryObj<typeof FormButtons> = {
  args: {
    canBack: true,
    canNext: true,
    hasBackButton: true,
    $hasSeparator: true,
    nextPage: "/home",
  },
};

export const WithoutSeparator: StoryObj<typeof FormButtons> = {
  args: {
    $hasSeparator: false,
    nextPage: "/home",
  },
};

export const WithBackButtonDeactivatedAndNextActivated: StoryObj<
  typeof FormButtons
> = {
  args: {
    hasBackButton: true,
    canBack: false,
    canNext: true,
    nextPage: "/home",
  },
};

export const WithBackButtonActivatedAndNextDeactivated: StoryObj<
  typeof FormButtons
> = {
  args: {
    hasBackButton: true,
    canBack: true,
    canNext: false,
    nextPage: "/home",
  },
};

export const FormButtonsDeactivates: StoryObj<typeof FormButtons> = {
  args: {
    hasBackButton: true,
    canBack: false,
    canNext: false,
    nextPage: "/home",
  },
};

export const WithoutBackButton: StoryObj<typeof FormButtons> = {
  args: {
    hasBackButton: false,
    nextPage: "/home",
  },
};

export const WithoutBackButtonAndDeactivated: StoryObj<typeof FormButtons> = {
  args: {
    hasBackButton: false,
    canNext: false,
    nextPage: "/home",
  },
};
