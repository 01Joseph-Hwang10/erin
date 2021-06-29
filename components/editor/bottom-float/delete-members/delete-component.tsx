import React from "react";
import { RootState } from "../../../../redux/root-reducer";
import { connect, ConnectedProps } from "react-redux";
import { BOTTOM_MARGIN, ICON_COLOR } from "../../base/constants";
import { Feather } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";

type DeleteComponentReduxProps = ConnectedProps<typeof connector>

interface DeleteComponentProps extends DeleteComponentReduxProps {}

const DeleteComponent: React.FC<DeleteComponentProps> = ({
  iconSize,
}) => {

  return <View style={styles.root}>
    <Feather name="x-circle" size={iconSize} color={ICON_COLOR} />
  </View>;
};

const mapStateToProps = (state: RootState) => {
  return {
    iconSize: state.editor.generic.settings.iconSize,
  };
};

const connector = connect(mapStateToProps, { });

export default connector(DeleteComponent);


const styles = StyleSheet.create({
  root: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: BOTTOM_MARGIN
  }
});
