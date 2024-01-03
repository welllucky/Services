import { CustomSelect } from "@/components";
import { StoryObj, Meta } from "@storybook/react";

export default {
	id: "select",
	title: "Common/Select",
	component: CustomSelect,
	tags: ["select", "common"],
} satisfies Meta;

export const DefaultSelect: StoryObj<typeof CustomSelect> = {
	args: {
		labelText: "Select",
		placeholder: "Select",
		width: "320px",
	},
};
