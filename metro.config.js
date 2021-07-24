// Learn more https://docs.expo.io/guides/customizing-metro

// eslint-disable-next-line
const { getDefaultConfig } = require('expo/metro-config');

module.exports = getDefaultConfig(__dirname);

// eslint-disable-next-line
// module.exports = (async () => {
//   const {
//     resolver: { sourceExts, assetExts }
//   } = await getDefaultConfig(__dirname);
//   return {
//     transformer: {
//       babelTransformerPath: require.resolve("react-native-svg-transformer")
//     },
//     resolver: {
//       assetExts: assetExts.filter(ext => ext !== "svg"),
//       sourceExts: [...sourceExts, "svg"]
//     }
//   };
// })();

// const SVG = "svg";

// const metroConfig = getDefaultConfig(__dirname);

// metroConfig
//   .transformer
//   .babelTransformerPath =
//     require.resolve("react-native-svg-transformer");
  
// const defaultAssetExts = 
//   metroConfig.resolver.sourceExts;

// metroConfig
//   .resolver
//   .assetExts = 
//     defaultAssetExts.filter(ext => ext !== SVG);
  
// const defaultSourceExts =
//   metroConfig.resolver.sourceExts;

// metroConfig
//   .resolver
//   .sourceExts = 
//     [...defaultSourceExts, SVG];


// module.exports = metroConfig;
