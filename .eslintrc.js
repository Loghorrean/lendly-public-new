module.exports = {
  extends: [
    "next",
    "next/core-web-vitals",
    "plugin:react/recommended",
    "prettier",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  rules: {
    "prettier/prettier": "error",
    "react-hooks/exhaustive-deps": "off",
    "no-use-before-define": "warn",
    "no-unused-vars": "off",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "react/jsx-no-bind": "off",
  },
  ignorePatterns: ["jest.config.js"],
};
