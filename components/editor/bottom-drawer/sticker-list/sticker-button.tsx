import { setBottomDrawerCurrent, SetBottomDrawerCurrentInput } from "@slices/editor/editor-generic";
import { setStickerIdState, SetStickerIdStateInput } from "@slices/editor/editor-states";
import React from "react";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect, ConnectedProps } from "react-redux";
import { Dispatch } from "redux";

type StickerButtonReduxProps = ConnectedProps<typeof connector>

interface StickerButtonProps extends StickerButtonReduxProps {
    children?: React.ReactNode,
    stickerId: string
}

const StickerButton: React.FC<StickerButtonProps> = ({
  children,
  setBottomDrawerCurrent: SetBottomDrawerCurrent,
  setStickerId,
  stickerId,
}) => {

  const onPress = () => {
    setStickerId(stickerId);
    SetBottomDrawerCurrent("none");
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.root}
    >
      {children}
    </TouchableOpacity>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setBottomDrawerCurrent: (payload: SetBottomDrawerCurrentInput) => dispatch(setBottomDrawerCurrent(payload)),
  setStickerId: (payload: SetStickerIdStateInput) => dispatch(setStickerIdState(payload)),
});

const connector = connect(null, mapDispatchToProps);

export default connector(StickerButton);

const styles = StyleSheet.create({
  root: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  }
});
