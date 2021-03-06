const path = require("path");

const eslintrc = {
  extends: "airbnb",
  plugins: ["react", "jsx-a11y", "import"],
  settings: {
    "import/core-modules": [
      "react",
      "react-dom",
      "react-router-dom",
      "config",
      "react-helmet",
      "prop-types"
    ]
  },
  rules: {
    "react/require-default-props": 0,
    "react/prop-types": "warn",
    "object-curly-spacing": "warn",
    "no-unused-vars": "warn",
    "implicit-arrow-linebreak": ["warn"],
    "no-confusing-arrow": 0,
    "global-require": 0,
    "react/jsx-one-expression-per-line": 0,
    "import/prefer-default-export": 0,
    "arrow-parens": 0,
    "react/forbid-prop-types": 0,
    "object-curly-newline": 0,
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "no-shadow": "warn",
    "no-console": 0,
    "linebreak-style": 0,
    "import/extensions": [
      2,
      "never",
      { "web.js": "never", json: "never", css: "always" }
    ],
    "import/no-extraneous-dependencies": [2, { devDependencies: true }],
    "import/no-unresolved": [0, { ignore: ["antd"] }],
    "no-underscore-dangle": ["warn", { allow: ["_id"] }],
    quotes: [
      "warn",
      "double",
      { avoidEscape: true, allowTemplateLiterals: true }
    ],
    "comma-dangle": ["warn", "never"],
    "import/order": 0
  },
  env: {
    browser: true
  }
};

module.exports = eslintrc;
