module.exports = {
  extends: ["airbnb-base", "prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": ["error"],
    "linebreak-style": ["error", "windows"],
    "no-unused-vars": ["error", { args: "none" }],
    // "no-unused-vars": ["warn"],
    "no-shadow": [2, { allow: ["err"] }]
  }
};