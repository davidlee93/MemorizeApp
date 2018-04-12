module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "comma-dangle": [
          "error",
          "never"
        ],
        "comma-style": [
            "error", "last"
        ],
        "eqeqeq": [
            "error",
            "smart"
        ],
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "no-else-return": [
            "error",
            { "allowElseIf": true }
        ],
        "prefer-const": [
            "error"
        ],
        "quotes": [
            "error",
            "single",
            { "allowTemplateLiterals": true }
        ],
        "semi": [
            "error",
            "always"
        ],
        "sort-imports": [
            "error",
            { "ignoreCase": true }
        ]
    }
};