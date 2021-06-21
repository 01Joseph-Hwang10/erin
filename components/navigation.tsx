import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { View, Text } from "react-native";
import { Actions } from "react-native-router-flux";
import { ROUTES } from "../src/constants";

const Navigation: React.FC = () => {

  const navigateToFriends = () => {
    if (Actions.currentScene !== ROUTES.FRIENDS) {
      Actions.friends();
    }
  };

  const navigateToPostbox = () => {
    if (Actions.currentScene !== ROUTES.POSTBOX ) {
      Actions.postbox();
    }
  };

  const navigateToMyPage = () => {
    if (Actions.currentScene !== ROUTES.MY_PAGE ) {
      Actions.myPage();
    }
  };

  return (
    <View style={styles.root}>
      <TouchableOpacity
        onPress={navigateToFriends}
      >
        <Text>친구</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={navigateToPostbox}
      >
        <Text>편지함</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={navigateToMyPage}
      >
        <Text>내 편지지</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Navigation;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 10,
    justifyContent: "space-evenly",
    alignItems: "center"
  }
});
