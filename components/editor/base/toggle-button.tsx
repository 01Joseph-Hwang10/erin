import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { GestureResponderEvent } from "react-native";
import CircularFrame, { CircularFrameProps } from "@components/common/circular-frame";
import { connect, ConnectedProps, Options } from "react-redux";
import { Dispatch } from "redux";
import { setBottomFloatHelpMessage, SetBottomFloatHelpMessageInput } from "@slices/editor/editor-generic";
import { RootState } from "@redux/root-reducer";

type ToggleButtonReduxProps = ConnectedProps<typeof connector>

interface ToggleButtonProps extends ToggleButtonReduxProps {
    icons: JSX.Element[],
    onPress?: (((event: GestureResponderEvent) => void) & (() => void)) | undefined,
    enableCircularFrame?: boolean,
    circularFrameProps?: CircularFrameProps,
    helpMessage: string
}

interface ToggleButtonState {
    iconIndex: number
}

export class ToggleButton extends React.Component<ToggleButtonProps, ToggleButtonState> {
    
    public state: ToggleButtonState = {
      iconIndex: 0
    }

    public toggleIcon = (): void => {
      if ( this.state.iconIndex + 1 === this.props.icons.length ) {
        this.setState({ iconIndex: 0 });
      } else {
        this.setState({ iconIndex: this.state.iconIndex + 1 });
      }
    }

    public setIconIndex = (iconIndex: number): void => {
      this.setState({ iconIndex });
    }

    private onPress = () => {
      if (this.props.onPress) {
        this.props.onPress();
        if (this.props.helpMessage !== this.props.currentHelpMessage) {
          this.props.setBottomFloatHelpMessage(this.props.helpMessage);
        }
      }
    }

    render(): React.ReactNode {

      const Icon = () => this.props.icons[this.state.iconIndex];
      // const Icon: React.FC = () => <IconElement />;

      return (
        <TouchableOpacity
          onPress={this.onPress}
        >
          {
            this.props.enableCircularFrame && this.props.circularFrameProps ? 
              (
                <CircularFrame {...this.props.circularFrameProps}>
                  <Icon />
                </CircularFrame>
              ) :
              <Icon />
          }
        </TouchableOpacity>
      );
    }
}

const mapStateToProps = (state: RootState) => ({
  currentHelpMessage: state.editor.generic.bottomFloatHelpMessage
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setBottomFloatHelpMessage: (payload: SetBottomFloatHelpMessageInput) => dispatch(setBottomFloatHelpMessage(payload))
});

const options: Options = {
  forwardRef: true
};

const connector = connect(mapStateToProps, mapDispatchToProps, null, options);

export default connector(ToggleButton);
