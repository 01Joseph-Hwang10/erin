import React from "react";
import SwitchButton, { SwitchButton as SwitchButtonComponent } from "../../base/switch-button";
import { RootState } from "../../../../redux/root-reducer";
import { connect, ConnectedProps } from "react-redux";
import { Dispatch } from "redux";
import { MaterialIcons } from "@expo/vector-icons";
import { toggleTextAnimationState } from "@slices/editor/editor-states";
import { textAnimationTypeToIndex } from "./text-animation.function";
import { textAnimationTypes } from "./text-animation.data";

type TextAnimationReduxProps = ConnectedProps<typeof connector>

interface TextAnimationProps extends TextAnimationReduxProps {}

const iconColor = "white";

class TextAnimation extends React.Component<TextAnimationProps> {

  private icon = () => (
    <MaterialIcons size={this.props.iconSize} color={iconColor} name="animation" />
  );

  private buttonRef = React.createRef<SwitchButtonComponent>();

  private onPress = () => {
    this.props.toggleTextAnimation();
    this.buttonRef.current?.toggleItem();
  };

  private setTextItemIndex = () => {
    this.buttonRef.current?.setItemIndex(
      textAnimationTypeToIndex(
        this.props.textAnimationType
      )
    );
  }

  componentDidMount = () => {
    this.setTextItemIndex();
  }

  componentDidUpdate = (prevProps: TextAnimationProps) => {
    if ( prevProps.textAnimationType !== this.props.textAnimationType ) {
      this.setTextItemIndex();
    }
  }

  render = (): React.ReactNode => {
    return <SwitchButton 
      ref={this.buttonRef}
      onPress={this.onPress}
      icon={this.icon}
      itemKeys={textAnimationTypes}
    />;
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    iconSize: state.editor.generic.settings.iconSize,
    textAnimationType: state.editor.states.textAnimationType
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  toggleTextAnimation: () => dispatch(toggleTextAnimationState()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(TextAnimation);
