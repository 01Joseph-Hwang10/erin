import React from "react";
import ToggleButton, { ToggleButton as ToggleButtonComponent } from "../../base/toggle-button";
import { RootState } from "../../../../redux/root-reducer";
import { connect, ConnectedProps } from "react-redux";
import { Dispatch } from "redux";
import { toggleTextAlignState } from "@slices/editor/editor-states";
import { Feather } from "@expo/vector-icons";
import { textAlignToIndex } from "./text-align.function";

type TextAlignReduxProps = ConnectedProps<typeof connector>

interface TextAlignProps extends TextAlignReduxProps {}

class TextAlign extends React.Component<TextAlignProps> {

  private icons: JSX.Element[] = [
    <Feather key={0} name="align-justify" size={this.props.iconSize} color="white" />,
    <Feather key={1} name="align-center" size={this.props.iconSize} color="white" />,
    <Feather key={2} name="align-left" size={this.props.iconSize} color="white" />,
    <Feather key={3} name="align-right" size={this.props.iconSize} color="white" />,
  ];

  private buttonRef = React.createRef<ToggleButtonComponent>();

  private onPress = () => {
    this.props.toggleTextAlign();
    this.buttonRef.current?.toggleIcon();
  };

  private setTextAlignIconIndex = () => {
    this.buttonRef.current?.setIconIndex(
      textAlignToIndex(
        this.props.textAlign
      )
    );
  }

  componentDidMount = () => {
    this.setTextAlignIconIndex();
  }

  componentDidUpdate = (prevProps: TextAlignProps) => {
    if ( prevProps.textAlign !== this.props.textAlign ) {
      this.setTextAlignIconIndex();
    }
  }

  render = (): React.ReactNode => {
    return <ToggleButton 
      ref={this.buttonRef}
      onPress={this.onPress}
      icons={this.icons}
      helpMessage={"텍스트를 어떻게 정렬할지 설정합니다"}
    />;
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    iconSize: state.editor.generic.settings.iconSize,
    textAlign: state.editor.states.textAlign
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  toggleTextAlign: () => dispatch(toggleTextAlignState())
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(TextAlign);
