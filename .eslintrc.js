module.exports = {
    "parser": "@typescript-eslint/parser",
    "extends": [
        "plugin:@typescript-eslint/recommended",
        'plugin:react-hooks/recommended',
        "plugin:prettier/recommended",
        "prettier",
        "eslint:recommended"
    ],
    "plugins": ["@typescript-eslint"],
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "@typescript-eslint/no-explicit-any": "warn",
        // This config will skip the parameter match _
        "@typescript-eslint/no-unused-vars": [
            "warn",
            {
                argsIgnorePattern: "^_",
                varsIgnorePattern: "^_",
                caughtErrorsIgnorePattern: "^_",
            },
        ],
        "semi": "warn",
        "space-in-parens": "warn",
        "prefer-const": "warn",
        "no-undef": "off",
        "no-unused-vars": "off",
        "no-console": ["warn", { allow: ["warn"] }],
        "prettier/prettier": [
            "error",
            {
                endOfLine: "auto",
            },
        ],
    },
    "env": {
        "node": true
    }
}