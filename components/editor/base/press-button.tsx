import { 
  setBottomFloatHelpMessage, 
  SetBottomFloatHelpMessageInput, 
  setTopFloatHelpMessage, 
  SetTopFloatHelpMessageInput
} from "@slices/editor/editor-generic";
import React from "react";
import { GestureResponderEvent } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect, ConnectedProps } from "react-redux";
import { Dispatch } from "redux";

type PressButtonReduxProps = ConnectedProps<typeof connector>

interface PressButtonProps extends PressButtonReduxProps {
    icon: () => JSX.Element,
    onPress?: (((event: GestureResponderEvent) => void) & (() => void)) | undefined,
    bottomFloatHelpMessage?: string | null,
    topFloatHelpMessage?: string | null,
}

const PressButton: React.FC<PressButtonProps> = ({
  icon: Icon,
  onPress,
  bottomFloatHelpMessage,
  topFloatHelpMessage,
  setBottomFloatHelpMessage: SetBottomFloatHelpMessage,
  setTopFloatHelpMessage: SetTopFloatHelpMessage
}) => {

  const onPressWithTimeout = () => {
    setTimeout(onPress, 50);
    if (bottomFloatHelpMessage !== undefined) {
      SetBottomFloatHelpMessage(bottomFloatHelpMessage);
    }
    if (topFloatHelpMessage !== undefined) {
      SetTopFloatHelpMessage(topFloatHelpMessage);
    }
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
  setBottomFloatHelpMessage: (payload: SetBottomFloatHelpMessageInput) => dispatch(setBottomFloatHelpMessage(payload)),
  setTopFloatHelpMessage: (payload: SetTopFloatHelpMessageInput) => dispatch(setTopFloatHelpMessage(payload)),
});

const connector = connect(null, mapDispatchToProps);

export default connector(PressButton);
