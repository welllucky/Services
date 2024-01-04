import { CustomSelect } from "@/components";
import { StoryObj, Meta } from "@storybook/react";

export default {
  title: "Common/Select",
  component: CustomSelect,
  tags: ["select", "common"],
} satisfies Meta;

export const DefaultSelect: StoryObj<typeof CustomSelect> = {
  args: {
    labelText: "Select",
    placeholder: "Select",
    width: "320px",
    options: [
      {
        key: "1",
        value: "1",
        text: "Option 1",
      },
      {
        key: "2",
        value: "2",
        text: "Option 2",
      },
      {
        key: "3",
        value: "3",
        text: "Option 3",
      },
    ],
  },
  // parameters: {
  //   mockData: {
  //     url: "https://jsonplaceholder.typicode.com/todos/1",
  //     method: "GET",
  //     status: 200,
  //     response: {
  //       data: {
  //         id: 1,
  //         label: "Tipo de chamado",
  //         placeholder: "Selecione o tipo de chamado",
  //         options: [
  //           {
  //             key: "1",
  //             value: "1",
  //             text: "Option 1",
  //           },
  //           {
  //             key: "2",
  //             value: "2",
  //             text: "Option 2",
  //           },
  //           {
  //             key: "3",
  //             value: "3",
  //             text: "Option 3",
  //           },
  //         ],
  //       },
  //     },
  //   },
  //   mockAddonConfigs: {
  //     disable: false,
  //   },
  // },
};
