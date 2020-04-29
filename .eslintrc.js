module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "airbnb-typescript",
    "plugin:prettier/recommended",
    "prettier/react"
  ],
  parserOptions: {
    project: "./tsconfig.json",
  },
};
