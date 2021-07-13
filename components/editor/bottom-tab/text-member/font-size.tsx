import React from "react";
import { RootState } from "../../../../redux/root-reducer";
import { connect, ConnectedProps } from "react-redux";
import PressButton from "../../base/press-button";
import { Dispatch } from "redux";
import { Text, StyleSheet } from "react-native";
import CircularFrame from "@components/common/circular-frame";

type FontSizeReduxProps = ConnectedProps<typeof connector>

interface FontSizeProps extends FontSizeReduxProps {}

const FontSize: React.FC<FontSizeProps> = ({
  iconSize,
  fontSize,
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

  const onPress = () => {};
  
  return <PressButton 
    icon={renderIcon}
    onPress={onPress}
  />;
};

const mapStateToProps = (state: RootState) => {
  return {
    iconSize: state.editor.generic.settings.iconSize,
    fontSize: state.editor.states.fontSize
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({});

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(FontSize);


const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "bold"
  }
});
