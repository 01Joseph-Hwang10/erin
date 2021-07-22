import StickerRenderer from "@components/common/stickers/sticker-renderer";
import { RootState } from "@redux/root-reducer";
import { setStickerIdState, SetStickerIdStateInput } from "@slices/editor/editor-states";
import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { connect, ConnectedProps } from "react-redux";
import { Dispatch } from "redux";

type StickerReduxProps = ConnectedProps<typeof connector>

interface StickersProps extends StickerReduxProps {}

class Stickers extends Component<StickersProps> {
  render(): React.ReactNode {
    return (
      <View style={styles.root}>
        <StickerRenderer 
          stickerId={this.props.stickerId}
        />
      </View>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  stickerId: state.editor.states.stickerId
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setStickerId: (payload: SetStickerIdStateInput) => dispatch(setStickerIdState(payload))
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(Stickers);

const styles = StyleSheet.create({
  root: {
    justifyContent: "center",
    alignItems: "center",
  }
});
