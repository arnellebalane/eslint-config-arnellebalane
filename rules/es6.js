module.exports = {
    rules: {
        'arrow-body-style': ['error', 'as-needed'],
        'arrow-parens': ['error', 'as-needed'],
        'arrow-spacing': ['error', {
            before: true,
            after: true
        }],
        'constructor-super': ['error'],
        'generator-star-spacing': ['error', {
            before: false,
            after: true
        }],
        'no-class-assign': ['error'],
        'no-confusing-arrow': ['error', {
            allowParens: true
        }],
        'no-const-assign': ['error'],
        'no-dupe-class-members': ['error'],
        'no-duplicate-imports': ['error'],
        'no-new-symbol': ['error'],
        'no-restricted-imports': ['off'],
        'no-this-before-super': ['error'],
        'no-useless-computed-key': ['error'],
        'no-useless-constructor': ['error'],
        'no-useless-rename': ['error'],
        'no-var': ['error'],
        'object-shorthand': ['error', 'always'],
        'prefer-arrow-callback': ['error', {
            allowNamedFunctions: true
        }],
        'prefer-const': ['error'],
        'prefer-destructuring': ['off'],
        'prefer-numeric-literals': ['error'],
        'prefer-rest-params': ['error'],
        'prefer-spread': ['error'],
        'prefer-template': ['error'],
        'require-yield': ['error'],
        'rest-spread-spacing': ['error', 'never'],
        'sort-imports': ['off'],
        'symbol-description': ['error'],
        'template-curly-spacing': ['error', 'never'],
        'yield-star-spacing': ['error', 'after']
    }
};
