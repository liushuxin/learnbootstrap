module.exports = {
    "parser":"babel-eslint",
    "extends": "eslint:recommended",
    "plugins": ["prettier"],
    "parserOptions":{
        "ecmaVersion": 7,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "rules": {
      "prettier/prettier": "error"
    }
}