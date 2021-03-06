module.exports = {
    rules: {
        'unicorn/catch-error-name': ['error', {
            name: 'error'
        }],
        'unicorn/explicit-length-check': ['error', {
            'non-zero': 'greater-than'
        }],
        'unicorn/filename-case': ['off'],
        'unicorn/no-abusive-eslint-disable': ['error'],
        'unicorn/no-process-exit': ['error'],
        'unicorn/throw-new-error': ['error'],
        'unicorn/number-literal-case': ['error'],
        'unicorn/escape-case': ['error'],
        'unicorn/no-array-instanceof': ['error'],
        'unicorn/no-new-buffer': ['error'],
        'unicorn/no-hex-escape': ['error'],
        'unicorn/custom-error-definition': ['error'],
        'unicorn/prefer-starts-ends-with': ['error'],
        'unicorn/prefer-type-error': ['error'],
        'unicorn/no-fn-reference-in-iterator': ['off'],
        'unicorn/import-index': ['error'],
        'unicorn/new-for-builtins': ['error'],
        'unicorn/regex-shorthand': ['error'],
        'unicorn/prefer-spread': ['error'],
        'unicorn/error-message': ['error'],
        'unicorn/no-unsafe-regex': ['error'],
        'unicorn/prefer-add-event-listener': ['error'],
        'unicorn/prefer-exponentiation-operator': ['error']
    }
};
