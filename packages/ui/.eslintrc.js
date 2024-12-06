/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["@repo/eslint-config/react-internals.js"],
  parser: "@typescript-eslint/parser",
  rules : {
    "no-redeclare": "off",
    "no-unused-vars" : "off"
  },
  parserOptions: {
    project: true,
  },
};
