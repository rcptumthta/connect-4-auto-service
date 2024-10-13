module.exports = {
  root: true,
  overrides: [
    {
      files: ["*.json", "*.json5", "*.jsonc", "*.jsonl"],
      parser: "jsonc-eslint-parser",
      parserOptions: {
        jsonSyntax: "JSONC"
      },
      extends: ["plugin:jsonc/recommended-with-jsonc"],
      rules: {
        "jsonc/array-bracket-newline": "error",
        "jsonc/array-bracket-spacing": "error",
        "jsonc/array-element-newline": "error",
        "jsonc/comma-dangle": "error",
        "jsonc/comma-style": "error",
        "jsonc/indent": ["error", 2],
        "jsonc/key-spacing": "error",
        "jsonc/no-comments": "error",
        "jsonc/no-irregular-whitespace": "error",
        "jsonc/no-octal-escape": "error",
        "jsonc/object-curly-newline": "error",
        "jsonc/object-curly-spacing": "error",
        "jsonc/object-property-newline": "error"
      }
    }
  ]
};
