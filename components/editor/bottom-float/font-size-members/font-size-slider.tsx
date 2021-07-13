import React from "react";
import { StyleSheet, View } from "react-native";
import Slider from "@react-native-community/slider";
import { RootState } from "@redux/root-reducer";
import { Dispatch } from "redux";
import { setFontSizeState, SetFontSizeStateInput } from "@slices/editor/editor-states";
import { connect, ConnectedProps } from "react-redux";
import { useState } from "react";

type FontSizeSliderReduxProps = ConnectedProps<typeof connector>

interface FontSizeSliderProps extends FontSizeSliderReduxProps {}

const FontSizeSlider: React.FC<FontSizeSliderProps> = ({
  fontSize: recievedSize,
  setFontSize: SetFontSize
}) => {

  const [ fontSize ] = useState(recievedSize);

  return (
    <View style={styles.root}>
      <Slider 
        style={styles.slider}
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
    paddingVertical: 10
  },
  slider: {
    width: "100%"
  }
});
