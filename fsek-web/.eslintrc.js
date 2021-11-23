module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": ["next/core-web-vitals", "prettier", "plugin:prettier/recommended"],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
            "tsx": true
        },
        "ecmaVersion": 13,
        "sourceType": "module"
    },
    "plugins": ["prettier"],
    "rules": {
      "prettier/prettier": "error"
    }
};