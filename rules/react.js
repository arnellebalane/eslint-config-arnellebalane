module.exports = {
    plugins: [
        'react'
    ],
    ecmaFeatures: {
        jsx: true
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        }
    },
    rules: {
        'react/no-direct-mutation-state': ['error'],
        'react/no-render-return-value': ['error'],
        'react/prefer-es6-class': ['warn'],
        'react/self-closing-comp': ['error'],
        'react/sort-comp': ['warn', { order: [
            'static-methods',
            'lifecycle',
            'everything-else',
            'render'
        ] }],
        'react/jsx-boolean-value': ['error', 'never'],
        'react/jsx-closing-bracket-location': ['error', {
            selfClosing: 'props-aligned',
            nonEmpty: 'tag-aligned'
        }],
        'react/jsx-curly-spacing': ['error', 'never'],
        'react/jsx-equals-spacing': ['error', 'never'],
        'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
        'react/jsx-first-prop-new-line': ['error', 'multiline'],
        'react/jsx-handler-names': ['error', {
            eventHandlerPrefix: 'handle',
            eventHandlerPropPrefix: 'on'
        }],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-key': ['error'],
        'react/jsx-max-props-per-line': ['error', {
            maximum: 1,
            when: 'multiline'
        }],
        'react/jsx-no-bind': ['error', { allowArrowFunctions: true }],
        'react/jsx-no-duplicate-props': ['error'],
        'react/jsx-no-undef': ['error'],
        'react/jsx-pascal-case': ['error'],
        'react/jsx-sort-props': ['error', {
            callbacksLast: true,
            noSortAlphabetically: true,
            reservedFirst: true
        }],
        'react/jsx-tag-spacing': ['error', {
            beforeSelfClosing: 'always',
            closingSlash: 'never'
        }],
        'react/jsx-uses-react': ['error'],
        'react/jsx-wrap-multilines': ['error']
    }
};
