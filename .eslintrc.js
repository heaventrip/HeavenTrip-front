module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/vue3-essential", "eslint:recommended", "@vue/prettier", "plugin:prettier/recommended"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-unused-vars": "off",
    'prettier/prettier': ['error', { endOfLine: 'auto' }]
  },
  "globals": {
    "$": true,
    "jQuery": true
  }
};
