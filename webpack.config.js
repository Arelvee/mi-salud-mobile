const createExpoWebpackConfigAsync = require('@expo/webpack-config')

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(
    {
      ...env,
      babel: {
        dangerouslyAddModulePathsToTranspile: [
          '@codler/react-native-keyboard-aware-scroll-view'
        ]
      }
    },
    argv
  )

  config.resolve.alias['react-native-screens$'] = require.resolve(
    './src/shims/react-native-screens.web.js'
  )

  return config
}
