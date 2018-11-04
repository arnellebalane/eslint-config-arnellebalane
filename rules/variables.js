module.exports = {
    rules: {
        'init-declarations': ['off'],
        'no-delete-var': ['error'],
        'no-label-var': ['error'],
        'no-restricted-globals': ['off'],
        'no-shadow': ['error', {
            builtinGlobals: true,
            hoist: 'all'
        }],
        'no-shadow-restricted-names': ['error'],
        'no-undef': ['error'],
        'no-undef-init': ['error'],
        'no-undefined': ['off'],
        'no-unused-vars': ['error', {
            args: 'after-used',
            ignoreRestSiblings: true,
            caughtErrors: 'none'
        }],
        'no-use-before-define': ['error']
    }
};
