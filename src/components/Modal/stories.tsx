import { Modal } from "./index";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Modal> = {
	title: "Modal",
	component: Modal,
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
	render: () => <Modal isTrue />,
};
