module.exports = {
    "presets": [
        ['@babel/preset-env', {targets: {node: 'current'}}],
        "@babel/typescript"
    ],
    "plugins": [
        "@babel/plugin-proposal-numeric-separator",
        "@babel/proposal-class-properties",
        "@babel/proposal-object-rest-spread"
    ]
}