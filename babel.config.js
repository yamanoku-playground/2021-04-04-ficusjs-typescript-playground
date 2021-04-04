module.exports = function (api) {
    api.cache(false)
    const presets = [
      ['@babel/preset-typescript'],
    ]
    const plugins = [
      ['@babel/transform-runtime']
    ]
    return {
        presets,
        plugins
    }
}
