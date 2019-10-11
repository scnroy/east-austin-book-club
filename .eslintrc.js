module.exports = {
    extends: ['react-app', 'plugin:prettier/recommended'],
    plugins: ['emotion'],
    rules: {
        "emotion/jsx-import": "error",
        "emotion/no-vanilla": "error",
    }
}
