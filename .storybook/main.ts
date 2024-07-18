import { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: [
    "../docs/**/*.mdx",
    "../docs/**/*.stories.@(js|jsx|mjs|ts|tsx)"
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
        debug: true
      }
    },
    "@storybook/addon-mdx-gfm"
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {
      builder: {
        useSWC: true
      },
      strictMode: true,
      fastRefresh: true,
      nextConfigPath: "../next.config.js"
    }
  },
  docs: {
    autodocs: true
  },
  typescript: {
    reactDocgen: "react-docgen" // or false if you don't need docgen at all
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
