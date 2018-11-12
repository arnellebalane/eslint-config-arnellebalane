module.exports = {
    rules: {
        // Static analysis
        'import/no-unresolved': ['error', {
            commonjs: true,
            amd: true
        }],
        'import/named': ['error'],
        'import/default': ['error'],
        'import/namespace': ['error', {
            allowComputed: true
        }],
        'import/no-restricted-paths': ['off'],
        'import/no-absolute-path': ['error'],
        'import/no-dynamic-require': ['error'],
        'import/no-internal-modules': ['off'],
        'import/no-webpack-loader-syntax': ['error'],
        'import/no-self-import': ['error'],
        'import/no-cycle': ['error'],
        'import/no-useless-path-segments': ['error'],
        'import/no-relative-parent-imports': ['off'],

        // Helpful warnings
        'import/export': ['error'],
        'import/no-named-as-default': ['off'],
        'import/no-named-as-default-member': ['error'],
        'import/no-deprecated': ['off'],
        'import/no-extraneous-dependencies': ['error'],
        'import/no-mutable-exports': ['error'],

        // Module systems
        'import/unambiguous': ['error'],
        'import/no-commonjs': ['off'],
        'import/no-amd': ['off'],
        'import/no-nodejs-modules': ['off'],

        // Style guide
        'import/first': ['error', 'absolute-first'],
        'import/exports-last': ['off'],
        'import/no-duplicates': ['error'],
        'import/no-namespace': ['off'],
        'import/extensions': ['error', 'always', {
            js: 'never'
        }],
        'import/order': ['off'],
        'import/newline-after-import': ['error', {
            count: 1
        }],
        'import/prefer-default-export': ['off'],
        'import/max-dependencies': ['off'],
        'import/no-unassigned-import': ['off'],
        'import/no-named-default': ['error'],
        'import/no-default-export': ['off'],
        'import/no-anonymous-default-export': ['off'],
        'import/group-exports': ['off']
    }
};
