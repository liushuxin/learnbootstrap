module.expoerts = {
    "extends": "eslint:recommended",
    "plugins": ["prettier"],
    "parserOptions":{
        "ecmaVersion": 7,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "env":{ "es6": true },
    "rules": {
      "prettier/prettier": "error"
    }
}