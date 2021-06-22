import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { NavigationStackProp } from "react-navigation-stack";
import { ROUTES } from "../src/constants";

interface PostboxProps {
  navigation: NavigationStackProp<undefined>
}

const Postbox: React.FC<PostboxProps> = ({
  navigation
}) => {

  const navigateToEditor = () => {
    navigation.navigate(ROUTES.EDITOR);
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={navigateToEditor}
      >
        <Text>Editor</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Postbox;


const styles = StyleSheet.create({
  button: {
    backgroundColor: "orange",
    padding: 10
  }
});
