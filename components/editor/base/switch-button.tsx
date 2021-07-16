import { setHelpMessage, SetHelpMessageInput } from "@slices/editor/editor-generic";
import React, { Component } from "react";
import { GestureResponderEvent } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect, ConnectedProps } from "react-redux";
import { Dispatch } from "redux";

type SwitchButtonReduxProps = ConnectedProps<typeof connector>

interface SwitchButtonProps extends SwitchButtonReduxProps {
    itemKeys: string[],
    onPress?: (((event: GestureResponderEvent) => void) & (() => void)) | undefined,
    icon: () => JSX.Element,
}

interface SwitchButtonState {
    itemIndex: number
}

export class SwitchButton extends Component<SwitchButtonProps, SwitchButtonState> {

    public state: SwitchButtonState = {
      itemIndex: 0
    }

    public toggleItem = (): void => {
      if ( this.state.itemIndex + 1 === this.props.itemKeys.length ) {
        this.setState({ itemIndex: 0 });
      } else {
        this.setState({ itemIndex: this.state.itemIndex + 1 });
      }
    }

    public setItemIndex = (itemIndex: number): void => {
      this.setState({ itemIndex });
    }
    
    private onPress = () => {
      if (this.props.onPress) {
        this.props.onPress();
        this.props.setHelpMessage(this.props.itemKeys[this.state.itemIndex]);
      }
    }

    render(): React.ReactNode {

      const Icon = this.props.icon;

      return (
        <TouchableOpacity
          onPress={this.onPress}
        >
          <Icon />
        </TouchableOpacity>
      );
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setHelpMessage: (payload: SetHelpMessageInput) => dispatch(setHelpMessage(payload))
});
  
const connector = connect(null, mapDispatchToProps, null, { forwardRef: true });

export default connector(SwitchButton);
