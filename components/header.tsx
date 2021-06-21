import React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native";

const Header: React.FC = () => {
  return (
    <View style={styles.root}>
      <Text>Header</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "space-between"
  }
});
