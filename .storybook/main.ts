import { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: [
    "../src/docs/**/*.mdx",
    "../src/docs/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-themes",
    "storybook-addon-mock",
    {
      name: "@storybook/addon-coverage",
      options: {
        extension: [".tsx", ".mdx"],
        debug: true,
      },
    },
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {
      builder: {
        useSWC: true,
      },
      strictMode: true,
      fastRefresh: true,
      nextConfigPath: "../next.config.js",
    },
  },
  typescript: {
    reactDocgen: "react-docgen-typescript", // or false if you don't need docgen at all
  },
  // build: {
  //   test: {
  //     disabledAddons: [
  //       "@storybook/addon-docs",
  //       "@storybook/addon-essentials/docs"
  //     ]
  //   }
  // }
};

export default config;
