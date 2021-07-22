// Learn more https://docs.expo.io/guides/customizing-metro

// eslint-disable-next-line
const { getDefaultConfig } = require('expo/metro-config');

// eslint-disable-next-line
module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts }
  } = await getDefaultConfig(__dirname);
  return {
    transformer: {
      babelTransformerPath: require.resolve("react-native-svg-transformer")
    },
    resolver: {
      assetExts: assetExts.filter(ext => ext !== "svg"),
      sourceExts: [...sourceExts, "svg"]
    }
  };
})();
