module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "globals": {
        "angular": true,
        "$": true
    },
    "parser": "babel-eslint",
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "experimentalObjectRestSpread ": true,
            "modules": true
        }
    },
    "rules": {
        "comma-dangle": [ 1, "always-multiline" ],
        "indent": [ 2, 2 ],
        // "linebreak-style": 0,
        "no-console": 1,
        "no-empty": 1,
        "no-unused-vars": 1,
        "no-var": 2,
        "quotes": [ 2, "single" ],
        "semi": [ 2, "always" ],
    }
};
