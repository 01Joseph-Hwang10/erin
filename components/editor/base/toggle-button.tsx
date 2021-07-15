import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { GestureResponderEvent } from "react-native";
import CircularFrame, { CircularFrameProps } from "@components/common/circular-frame";
import { connect, ConnectedProps } from "react-redux";
import { Dispatch } from "redux";
import { setHelpMessage, SetHelpMessageInput } from "@slices/editor/editor-generic";
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
          this.props.setHelpMessage(this.props.helpMessage);
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
  currentHelpMessage: state.editor.generic.helpMessage
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setHelpMessage: (payload: SetHelpMessageInput) => dispatch(setHelpMessage(payload))
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(ToggleButton);
