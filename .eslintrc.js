module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "indent": ["error", 4, { "ignoredNodes": ["JSXElement"] }],
        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": "off",
        "no-console": "off",
        "react/prop-types": "off",
        "react/no-children-prop": "off",
        "implicit-arrow-linebreak": [0, "as-beside"],
        "react/require-default-props": [0],
        "react/prefer-stateless-function": [0, { "ignorePureComponents": true }]
    },
    "globals": {
        "window": 1,
        "document": 1,
        "localStorage": 1,
        "navigator": 1,
        "FormData": 1,
        "Audio": 1,
        "File": 1,
        "Blob": 1,
        "it": 1,
    }
};