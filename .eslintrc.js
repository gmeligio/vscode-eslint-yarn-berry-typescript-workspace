module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier"],
  extends: ["airbnb-typescript", "prettier"],
  parserOptions: {
    project: "./tsconfig.json",
  },
  ignorePatterns: [
    ".eslintrc.js",
    "next.config.js",
    "babel.config.js",
    "aws-exports.js",
    "i18n.js",
  ],
  rules: {
    "import/prefer-default-export": "off",
    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
        trailingComma: "all",
        semi: true,
        printWidth: 80,
        useTabs: false,
        tabWidth: 2,
      },
    ],
    "no-param-reassign": [
      "error",
      {
        props: true,
        ignorePropertyModificationsFor: ["state"],
      },
    ],
    "react/require-default-props": "off",
    "react/prop-types": "off",
    "jsx-a11y/label-has-associated-control": [
      2,
      {
        assert: "nesting",
      },
    ],
  },
};
