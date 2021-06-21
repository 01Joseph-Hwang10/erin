import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Actions } from "react-native-router-flux";

const Postbox: React.FC = () => {

  const navigateToEditor = () => {
    Actions.editor();
  };

  return (
    <View>
      <TouchableOpacity
        onPress={navigateToEditor}
      >
        <Text>Editor</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Postbox;
