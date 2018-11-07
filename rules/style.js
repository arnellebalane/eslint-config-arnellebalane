module.exports = {
    rules: {
        'array-bracket-newline': ['error', 'consistent'],
        'array-bracket-spacing': ['error', 'never'],
        'array-element-newline': ['error', 'consistent'],
        'block-spacing': ['error', 'always'],
        'brace-style': ['error', '1tbs', {
            allowSingleLine: true
        }],
        'camelcase': ['error', {
            properties: 'always'
        }],
        'capitalized-comments': ['error', 'always', {
            ignoreConsecutiveComments: true
        }],
        'comma-dangle': ['error', 'never'],
        'comma-spacing': ['error', {
            before: false,
            after: true
        }],
        'comma-style': ['error', 'last'],
        'computed-property-spacing': ['error', 'never'],
        'consistent-this': ['error', 'that'],
        'eol-last': ['error'],
        'func-call-spacing': ['error', 'never'],
        'func-name-matching': ['error'],
        'func-names': ['off'],
        'func-style': ['error', 'declaration', {
            allowArrowFunctions: true
        }],
        'function-paren-newline': ['error', 'multiline'],
        'id-blacklist': ['off'],
        'id-length': ['off'],
        'id-match': ['off'],
        'implicit-arrow-linebreak': ['error', 'beside'],
        'indent': ['error', 4],
        'jsx-quotes': ['off'],
        'key-spacing': ['error', {
            beforeColon: false,
            afterColon: true
        }],
        'keyword-spacing': ['error', {
            before: true,
            after: true
        }],
        'line-comment-position': ['error', 'above'],
        'linebreak-style': ['error', 'unix'],
        'lines-around-comment': ['off'],
        'lines-between-class-members': ['error', 'always'],
        'max-depth': ['warn', {
            max: 4
        }],
        'max-len': ['error', {
            code: 120,
            tabWidth: 4
        }],
        'max-lines': ['off'],
        'max-lines-per-function': ['off'],
        'max-nested-callbacks': ['error', {
            max: 10
        }],
        'max-params': ['off'],
        'max-statements': ['off'],
        'max-statements-per-line': ['error', {
            max: 2
        }],
        'multiline-comment-style': ['error', 'starred-block'],
        'multiline-ternary': ['error', 'always-multiline'],
        'new-cap': ['error'],
        'new-parens': ['error'],
        'newline-per-chained-call': ['error', {
            ignoreChainWithDepth: 3
        }],
        'no-array-constructor': ['error'],
        'no-bitwise': ['off'],
        'no-continue': ['off'],
        'no-inline-comments': ['off'],
        'no-lonely-if': ['error'],
        'no-mixed-operators': ['error'],
        'no-mixed-spaces-and-tabs': ['error'],
        'no-multi-assign': ['error'],
        'no-multiple-empty-lines': ['error', {
            max: 2
        }],
        'no-negated-condition': ['error'],
        'no-nested-ternary': ['error'],
        'no-new-object': ['error'],
        'no-plusplus': ['off'],
        'no-restricted-syntax': ['off'],
        'no-tabs': ['error'],
        'no-ternary': ['off'],
        'no-trailing-spaces': ['error'],
        'no-underscore-dangle': ['off'],
        'no-unneeded-ternary': ['error'],
        'no-whitespace-before-property': ['error'],
        'nonblock-statement-body-position': ['error', 'beside'],
        'object-curly-newline': ['error', {
            consistent: true
        }],
        'object-curly-spacing': ['error', 'never'],
        'object-property-newline': ['error', {
            allowAllPropertiesOnSameLine: true
        }],
        'one-var': ['error', 'never'],
        'one-var-declaration-per-line': ['error', 'always'],
        'operator-assignment': ['error', 'always'],
        'operator-linebreak': ['error', 'before'],
        'padded-blocks': ['error', 'never'],
        'padding-line-between-statements': ['off'],
        'prefer-object-spread': ['error'],
        'quote-props': ['error', 'consistent-as-needed'],
        'quotes': ['error', 'single', {
            allowTemplateLiterals: true
        }],
        'require-jsdoc': ['off'],
        'semi': ['error', 'always'],
        'semi-spacing': ['error', {
            before: false,
            after: true
        }],
        'semi-style': ['error', 'last'],
        'sort-keys': ['off'],
        'sort-imports': ['off'],
        'soft-vars': ['off'],
        'space-before-blocks': ['error', 'always'],
        'space-before-function-paren': ['error', 'never'],
        'space-in-parens': ['error', 'never'],
        'space-infix-ops': ['off'],
        'space-unary-ops': ['error', {
            words: true
        }],
        'spaced-comment': ['error', 'always'],
        'switch-colon-spacing': ['error', {
            before: false,
            after: true
        }],
        'template-tag-spacing': ['error', 'never'],
        'unicode-bom': ['off'],
        'wrap-regex': ['off']
    }
};
