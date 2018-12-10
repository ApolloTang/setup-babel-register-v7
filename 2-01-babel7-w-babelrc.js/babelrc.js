module.exports = () => {
  return {
    "presets": [
      [
        '@babel/env',
        {
          'modules': 'commonjs',
          targets: { "node": "current" }
        }
      ]
    ],
    "plugins": [
      "@babel/plugin-proposal-class-properties"
    ]
  }
}
