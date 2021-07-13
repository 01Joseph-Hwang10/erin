import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { GestureResponderEvent } from "react-native";
import CircularFrame, { CircularFrameProps } from "@components/common/circular-frame";

interface ToggleButtonProps {
    icons: JSX.Element[],
    onPress?: (((event: GestureResponderEvent) => void) & (() => void)) | undefined,
    enableCircularFrame?: boolean,
    circularFrameProps?: CircularFrameProps
}

interface ToggleButtonState {
    iconIndex: number
}

class ToggleButton extends React.Component<ToggleButtonProps, ToggleButtonState> {
    
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

    render(): React.ReactNode {

      const { icons, onPress } = this.props;
      const Icon = () => icons[this.state.iconIndex];
      // const Icon: React.FC = () => <IconElement />;

      return (
        <TouchableOpacity
          onPress={onPress}
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

export default ToggleButton;
