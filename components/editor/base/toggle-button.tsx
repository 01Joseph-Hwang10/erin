import React from "react";
import { TouchableOpacity } from "react-native";
import { GestureResponderEvent } from "react-native";

interface ToggleButtonProps {
    icons: JSX.Element[],
    onPress?: (e: GestureResponderEvent) => void
}

interface ToggleButtonState {
    iconIndex: number
}

class ToggleButton extends React.Component<ToggleButtonProps, ToggleButtonState> {
    
    public state = {
      iconIndex: 0
    }

    public getToggleIndex = (): number => {
      return this.state.iconIndex;
    }

    public setToggleIndex = (iconIndex: number): void => {
      this.setState({ iconIndex });
    }

    render(): React.ReactNode {

      const { icons, onPress } = this.props;
      const Icon = icons[this.state.iconIndex];

      return (
        <TouchableOpacity
          onPress={onPress}
        >
          {Icon}
        </TouchableOpacity>
      );
    }
}

export default ToggleButton;
