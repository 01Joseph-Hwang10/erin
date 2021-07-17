import React from "react";
import { StyleSheet, View } from "react-native";
import Slider from "./slider";
import { RootState } from "@redux/root-reducer";
import { Dispatch } from "redux";
import { setFontSizeState, SetFontSizeStateInput } from "@slices/editor/editor-states";
import { connect, ConnectedProps } from "react-redux";
import { useState } from "react";
import COLORS from "@src/colors";

type FontSizeSliderReduxProps = ConnectedProps<typeof connector>

interface FontSizeSliderProps extends FontSizeSliderReduxProps {}

const FontSizeSlider: React.FC<FontSizeSliderProps> = ({
  fontSize,
  setFontSize: SetFontSize
}) => {

  // const [ fontSize ] = useState(recievedSize);

  return (
    <View style={styles.root}>
      <Slider 
        width="100%"
        height={40}
        primaryColor={COLORS.DARK.sharp}
        secondaryColor="lightseagreen"
        minimumValue={10}
        maximumValue={100}
        value={fontSize}
        onValueChange={SetFontSize}
      />
    </View>
  );
};

const mapStateToProps = (state: RootState) => ({
  fontSize: state.editor.states.fontSize,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setFontSize: (payload: SetFontSizeStateInput) => dispatch(setFontSizeState(payload))
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(FontSizeSlider);

const styles = StyleSheet.create({
  root: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 10
  },
});
