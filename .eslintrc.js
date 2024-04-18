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
        "@typescript-eslint/no-unused-vars": "off",
        "semi": "warn",
        "space-in-parens": "warn",
        "prefer-const": "warn",
        "no-undef": "off"
    },
    "env": {
        "node": true
    }
}