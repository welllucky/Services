import { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
	stories: [
		"../stories/**/*.mdx",
		"../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
	],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-onboarding",
		"@storybook/addon-interactions",
		"@storybook/addon-themes",
	],
	framework: {
		name: "@storybook/nextjs",
		options: {
			strictMode: true,
			fastRefresh: true,
      
			nextConfigPath: "../next.config.js",
		},
	},
	docs: {
		autodocs: true,
	},
};

export default config;
