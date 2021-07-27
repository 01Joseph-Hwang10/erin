import { RootState } from "@redux/root-reducer";
import { setBottomDrawerCurrent, SetBottomDrawerCurrentInput } from "@slices/editor/editor-generic";
import { setStickerIdState, SetStickerIdStateInput } from "@slices/editor/editor-states";
import COLORS from "@src/colors";
import { voidFunction } from "@src/constants";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect, ConnectedProps } from "react-redux";
import { Dispatch } from "redux";

type StickerButtonReduxProps = ConnectedProps<typeof connector>

interface StickerButtonProps extends StickerButtonReduxProps {
    children?: React.ReactNode,
    stickerId: string,
    index: number
}

const lazyLoadingDelay = 50;

const StickerButton: React.FC<StickerButtonProps> = ({
  children,
  setBottomDrawerCurrent: SetBottomDrawerCurrent,
  setStickerId,
  stickerId,
  screenWidth,
  pushComponent,
  index
}) => {

  const [ loading, setLoading ] = useState(true);

  const onPress = () => {
    setStickerId(stickerId);
    SetBottomDrawerCurrent("none");
    if (pushComponent) {
      pushComponent({
        type: "sticker"
      });
    }
  };

  useEffect(
    () => {
      const loadingHandler = setTimeout(
        () => {
          setLoading(false);
        },
        index * lazyLoadingDelay
      );
      return () => clearInterval(loadingHandler);
    }
  );

  return (
    <View 
      style={[
        styles.stickerButtonWrapper, 
        { width: screenWidth / 3 }
      ]}
    >
      <TouchableOpacity
        onPress={onPress}
        onLongPress={voidFunction}
        style={styles.root}
      >
        {
          loading ? 
            <ActivityIndicator 
              size="large"
              color={COLORS.LIGHT.secondary}
            /> :
            children
        }
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state: RootState) => ({
  screenWidth: state.screen.screenSpec.width,
  pushComponent: state.editor.handle.pushComponent,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setBottomDrawerCurrent: (payload: SetBottomDrawerCurrentInput) => dispatch(setBottomDrawerCurrent(payload)),
  setStickerId: (payload: SetStickerIdStateInput) => dispatch(setStickerIdState(payload)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(StickerButton);

const styles = StyleSheet.create({
  root: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  stickerButtonWrapper: {
    justifyContent: "center",
    alignContent: "center"
  },
});
