import React from "react";
import { RootState } from "../../../../redux/root-reducer";
import { connect, ConnectedProps } from "react-redux";
import PressButton from "../../base/press-button";
import { Dispatch } from "redux";
import { Text, StyleSheet } from "react-native";
import CircularFrame from "@components/common/circular-frame";
import { setBottomFloatCurrent, SetBottomFloatCurrentInput } from "@slices/editor/editor-generic";

type FontSizeReduxProps = ConnectedProps<typeof connector>

interface FontSizeProps extends FontSizeReduxProps {}

const FontSize: React.FC<FontSizeProps> = ({
  iconSize,
  fontSize,
  setBottomFloatCurrent: SetBottomFloatCurrent,
  bottomFloatCurrent
}) => {

  const renderIcon = () => (
    <CircularFrame
      size={iconSize}
      borderColor={"white"}
      borderWidth={2.5}
      backgroundColor={"skyblue"}
    >
      <Text style={styles.text}>{Math.round(fontSize).toString()}</Text>
    </CircularFrame>
  );

  const onPress = () => {
    if (bottomFloatCurrent === "fontSize") {
      SetBottomFloatCurrent("none");
    } else {
      SetBottomFloatCurrent("fontSize");
    }
  };
  
  return <PressButton 
    icon={renderIcon}
    onPress={onPress}
  />;
};

const mapStateToProps = (state: RootState) => {
  return {
    iconSize: state.editor.generic.settings.iconSize,
    fontSize: state.editor.states.fontSize,
    bottomFloatCurrent: state.editor.generic.bottomFloatCurrent
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setBottomFloatCurrent: (payload: SetBottomFloatCurrentInput) => dispatch(setBottomFloatCurrent(payload))
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(FontSize);


const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "bold"
  }
});
