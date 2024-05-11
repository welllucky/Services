export const eslintConfig = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  globals: {
    React: true,
    jsdom: true,
    JSX: true,
    BodyInit: true,
    RequestInfo: true,
    RequestInit: true,
  },
  settings: {
    next: {
      rootDir: "apps/*/",
    },
    react: {
      version: "detect",
    },
    "import/resolver": {
      node: {
        extensions: [".ts", ".tsx"],
      },
    },
  },
  extends: [
    "next",
    "prettier",
    "eslint:recommended",
    "plugin:react/recommended",
    // "plugin:prettier/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "airbnb",
    "eslint:recommended",
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
    "plugin:sonarjs/recommended",
    "plugin:security/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:cypress/recommended",
    "next",
    "turbo",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "react", "jest"],
  rules: {
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "no-unused-vars": "error",
    "linebreak-style": "off",
    "import/extensions": "off",
    "import/prefer-default-export": ["warn", { target: "single" }],
    "react-in-jsx-scope": "off",
    "react/require-default-props": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": "off",
    "react/jsx-props-no-spreading": "off",
    "import/no-cycle": "off",
    "react/jsx-closing-bracket-location": "off",
    "react/jsx-curly-newline": "off",
    "no-nested-ternary": "warn",
    "no-tabs": "off",
    "object-curly-newline": "off",
    "implicit-arrow-linebreak": "off",
    "operator-linebreak": "off",
    "function-paren-newline": "off",
    "no-extra-boolean-cast": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/function-component-definition": [
      2,
      { namedComponents: "arrow-function" },
    ],
    "arrow-body-style": ["off", "always"],
    "react/jsx-wrap-multilines": "off",
    "@next/next/no-html-link-for-pages": ["warn", "apps/**/pages"],
    "@typescript-eslint/no-unused-vars": "error",
    "react/prop-types": "off",
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight"],
        aspects: ["invalidHref", "preferButton"],
      },
    ],
    "jsx-a11y/control-has-associated-label": [
      "error",
      {
        required: {
          some: ["nesting", "id"],
        },
      },
    ],
    "jsx-a11y/label-has-associated-control": [
      "error",
      {
        required: {
          some: ["nesting", "id"],
        },
      },
    ],
    "jsx-a11y/label-has-for": [
      "error",
      {
        required: {
          some: ["nesting", "id"],
        },
      },
    ],

    "no-console": "error",
    // "react/no-array-index-key": "off",
    "react/no-unknown-property": [
      2,
      {
        ignore: ["jsx"],
      },
    ],
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: true,
      },
    ],
  },
};
