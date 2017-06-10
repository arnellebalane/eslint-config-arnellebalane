module.exports = {
    extends: [
        'eslint:recommended',
        './rules/errors',
        './rules/best-practices',
        './rules/strict',
        './rules/variables',
        './rules/node',
        './rules/style'
    ]
};
