import React from "react";
import SwitchButton, { SwitchButton as SwitchButtonComponent } from "../../base/switch-button";
import { RootState } from "../../../../redux/root-reducer";
import { connect, ConnectedProps } from "react-redux";
import { Dispatch } from "redux";
import { MaterialIcons } from "@expo/vector-icons";
import { toggleStickerAnimationState } from "@slices/editor/editor-states";
import { stickerAnimationTypeToIndex } from "./sticker-animation.function";
import { stickerAnimationTypes } from "./sticker-animation.data";

type TextAnimationReduxProps = ConnectedProps<typeof connector>

interface TextAnimationProps extends TextAnimationReduxProps {}

const iconColor = "white";

class TextAnimation extends React.Component<TextAnimationProps> {

  private icon = () => (
    <MaterialIcons size={this.props.iconSize} color={iconColor} name="animation" />
  );

  private buttonRef = React.createRef<SwitchButtonComponent>();

  private onPress = () => {
    this.props.toggleStickerAnimation();
    this.buttonRef.current?.toggleItem();
  };

  private setStickerItemIndex = () => {
    this.buttonRef.current?.setItemIndex(
      stickerAnimationTypeToIndex(
        this.props.stickerAnimationType
      )
    );
  }

  componentDidMount = () => {
    this.setStickerItemIndex();
  }

  componentDidUpdate = (prevProps: TextAnimationProps) => {
    if ( prevProps.stickerAnimationType !== this.props.stickerAnimationType ) {
      this.setStickerItemIndex();
    }
  }

  render = (): React.ReactNode => {
    return <SwitchButton 
      ref={this.buttonRef}
      onPress={this.onPress}
      icon={this.icon}
      itemKeys={stickerAnimationTypes}
    />;
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    iconSize: state.editor.generic.settings.iconSize,
    stickerAnimationType: state.editor.states.stickerAnimationType
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  toggleStickerAnimation: () => dispatch(toggleStickerAnimationState()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(TextAnimation);
