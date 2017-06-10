module.exports = {
    rules: {
        'init-declarations': ['off'],
        'no-catch-shadow': ['error'],
        'no-delete-var': ['error'],
        'no-label-var': ['error'],
        'no-restricted-globals': ['error'],
        'no-shadow': ['error', { 'builtinGlobals': true, 'hoist': 'all' }],
        'no-shadow-restricted-names': ['error'],
        'no-undef': ['error'],
        'no-undef-init': ['warn'],
        'no-undefined': ['off'],
        'no-unused-vars': ['warn'],
        'no-use-before-define': ['error']
    }
};
