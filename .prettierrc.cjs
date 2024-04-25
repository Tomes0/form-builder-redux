/** @type {import("prettier").Config} */
const config = {
    trailingComma: 'es5',
    tabWidth: 1,
    semi: true,
    singleQuote: true,
    plugins: ['prettier-plugin-tailwindcss'],
    jsxSingleQuote: true,
    useTabs: true,
    bracketSameLine: true,

}

module.exports = config
