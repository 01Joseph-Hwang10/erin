import React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { ICON_COLOR } from "../../base/constants";
import { RootState } from "../../../../redux/root-reducer";
import { connect, ConnectedProps } from "react-redux";

type TimeDialReduxProps = ConnectedProps<typeof connector>

interface TimeDialProps extends TimeDialReduxProps {}

const TimeDial: React.FC<TimeDialProps> = ({
  iconSize
}) => {

  const time = 0; // Temporal value

  return (
    <View style={styles.root}>
      <Entypo name="chevron-left" size={iconSize} color={ICON_COLOR} />
      <View style={styles.indicator}>
        <Text>{time}s</Text>
      </View>
      <Entypo name="chevron-right" size={iconSize} color={ICON_COLOR} />
    </View>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    iconSize: state.editor.generic.settings.iconSize
  };
};

const connector = connect(mapStateToProps, {});

export default connector(TimeDial);

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
