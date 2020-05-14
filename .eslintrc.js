module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module",
  },
  extends: ["react-app", "prugin:prettier/recommended"],
  env: {
    jest: true,
  },
  globals: {
    window: true,
    document: true,
  },
};
