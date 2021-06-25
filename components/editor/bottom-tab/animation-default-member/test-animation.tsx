import React from "react";
import { Ionicons } from "@expo/vector-icons";
import PressButton from "../../base/press-button";
import { RootState } from "../../../../redux/root-reducer";
import { connect, ConnectedProps } from "react-redux";
import { ICON_COLOR } from "../../base/constants"

type TestAnimationReduxProps = ConnectedProps<typeof connector>

interface TestAnimationProps extends TestAnimationReduxProps {}

const TestAnimation: React.FC<TestAnimationProps> = ({
  iconSize
}) => {

  const renderIcon = () => (
    <Ionicons name="ios-play" size={iconSize} color={ICON_COLOR} />
  );

  const onPress = () => {
    // Needa do sth here
  };
  
  return <PressButton 
    icon={renderIcon}
    onPress={onPress}
  />;
};

const mapStateToProps = (state: RootState) => {
  return {
    iconSize: state.editor.settings.iconSize,
  }
}

const connector = connect(mapStateToProps, { });

export default connector(TestAnimation);
