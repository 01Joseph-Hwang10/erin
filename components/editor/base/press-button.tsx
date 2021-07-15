import { setHelpMessage, SetHelpMessageInput } from "@slices/editor/editor-generic";
import React from "react";
import { GestureResponderEvent } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect, ConnectedProps } from "react-redux";
import { Dispatch } from "redux";

type PressButtonReduxProps = ConnectedProps<typeof connector>

interface PressButtonProps extends PressButtonReduxProps {
    icon: () => JSX.Element,
    onPress?: (((event: GestureResponderEvent) => void) & (() => void)) | undefined,
    helpMessage: string | null,
}

const PressButton: React.FC<PressButtonProps> = ({
  icon: Icon,
  onPress,
  helpMessage,
  setHelpMessage: SetHelpMessage
}) => {

  const onPressWithTimeout = () => {
    setTimeout(onPress, 50);
    SetHelpMessage(helpMessage);
  };

  return (
    <TouchableOpacity 
      onPressIn={onPressWithTimeout}
    >
      <Icon />
    </TouchableOpacity>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setHelpMessage: (payload: SetHelpMessageInput) => dispatch(setHelpMessage(payload))
});

const connector = connect(null, mapDispatchToProps);

export default connector(PressButton);
