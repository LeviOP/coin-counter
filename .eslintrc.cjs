module.exports = {
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:svelte/recommended"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        extraFileExtensions: [".svelte"]
    },
    plugins: ["@typescript-eslint"],
    root: true,
    overrides: [
        {
            files: ["*.svelte"],
            parser: "svelte-eslint-parser",
            parserOptions: {
                parser: "@typescript-eslint/parser"
            }
        }
    ],
    rules: {
        "indent": ["error", 4],
        "arrow-spacing": ["error", { before: true, after: true }],
        "arrow-parens": ["error", "always"],
        "quotes": ["error", "double"],
        "semi": ["error", "always"],
        "object-curly-spacing": ["error", "always"],
        "comma-dangle": "error",
        "no-trailing-spaces": "error"
    },
    env: {
        browser: true
    }
};
