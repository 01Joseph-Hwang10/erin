module.exports = function(api) {
  api.cache(false);
  return {
    presets: [
      "babel-preset-expo"
    ],
    plugins: [
      // "transform-remove-console",
      "react-native-reanimated/plugin",
    ]
  };
};
