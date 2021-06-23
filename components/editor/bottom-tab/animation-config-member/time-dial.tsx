import React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { ICON_SIZE } from "../../base/contants";

const TimeDial: React.FC = () => {

  const time = 0; // Temporal value

  return (
    <View style={styles.root}>
      <Entypo name="chevron-left" size={ICON_SIZE} color='white' />
      <View style={styles.indicator}>
        <Text>{time}s</Text>
      </View>
      <Entypo name="chevron-right" size={ICON_SIZE} color='white' />
    </View>
  );
};

export default TimeDial;

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  indicator: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 5, // These are just temporal values
    paddingHorizontal: 30, // These are just temporal values
    marginHorizontal: 3
  }
});
