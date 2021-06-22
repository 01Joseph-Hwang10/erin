import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { View, Text } from "react-native";
import { NavigationStackProp } from "react-navigation-stack";
import { ROUTES } from "../src/constants";

interface NavigationProps {
  navigation: NavigationStackProp<undefined>
}

const Navigation: React.FC<NavigationProps> = ({
  navigation
}) => {

  const navigateToFriends = () => {
    navigation.navigate(ROUTES.FRIENDS);
  };

  const navigateToPostbox = () => {
    navigation.navigate(ROUTES.POSTBOX);
  };

  const navigateToMyPage = () => {
    navigation.navigate(ROUTES.MY_PAGE);
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
