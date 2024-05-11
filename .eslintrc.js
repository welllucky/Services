module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `config`
  extends: ["config"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
