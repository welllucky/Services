import { CustomTextArea } from "@/components";
import { StoryObj, Meta } from "@storybook/react";

export default {
  component: CustomTextArea,
  title: "Common/Inputs/CustomTextArea",
  tags: ["fildset", "common", "input"],
  argTypes: {
    labelText: {
      control: "text",
      description: "Texto do label",
      table: {
        category: "Conteúdo",
        type: {
          summary: "string",
        },
      },
    },
    placeholder: {
      control: "text",
      description: "Texto do placeholder",
      table: {
        category: "Conteúdo",
        type: {
          summary: "string",
        },
      },
    },
    value: {
      control: "text",
      description: "Valor do input",
      table: {
        category: "Valor",
        type: {
          summary: "string",
        },
      },
    },
    width: {
      control: "text",
      description: "Largura do input",
      table: {
        category: "Aparência",
        type: {
          summary: "string",
        },
      },
    },
    height: {
      control: "text",
      description: "Altura do input",
      table: {
        category: "Aparência",
        type: {
          summary: "string",
        },
      },
    },
    isRequired: {
      control: "boolean",
      description: "Se o input é obrigatório",
      table: {
        category: "Estado",
        type: {
          summary: "boolean",
        },
      },
    },
    onChange: {
      control: "function",
      description: "Função que é chamada quando o input é alterado",
      table: {
        category: "Eventos",
        type: {
          summary: "function",
        },
      },
    },
  },
  args: {
    labelText: "Descrição",
    placeholder: "Nos conte mais detalhes sobre o ocorrido...",
    width: "320px",
  },
} satisfies Meta;

export const TextArea: StoryObj<typeof CustomTextArea> = {
  args: {
    labelText: "Descrição",
    placeholder: "Nos conte mais detalhes sobre o ocorrido...",
    value: "",
  },
};
