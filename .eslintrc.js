module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "plugin:react/recommended",
    "google",
    "plugin:prettier/recommended"
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    "require-jsdoc": "off",
    "prettier/prettier": [
      "warn",
      {
        singleQuote: false,
        semi: true
      }
    ]
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};
