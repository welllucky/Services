import { ToolsComponent } from "./index";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ToolsComponent> = {
	title: "ToolsComponent",
	component: ToolsComponent,
};

export default meta;

type Story = StoryObj<typeof ToolsComponent>;

export const Primary: Story = {
	render: () => (
		<ToolsComponent
			postImage={(image: Array<File>) => {
				image.forEach((img) => img.name + img.size);
			}}
		/>
	),
};
