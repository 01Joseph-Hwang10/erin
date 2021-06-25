import React from "react";
import XButton from "../../../common/x-button";
import { RootState } from "../../../../redux/root-reducer";
import { connect, ConnectedProps } from "react-redux";
import { ICON_COLOR } from "../../base/constants";
import { Alert } from "react-native";
import { voidFunction } from "../../../../src/constants";

type NotSaveReduxProps = ConnectedProps<typeof connector>

interface NotSaveProps extends NotSaveReduxProps {}

const NotSave: React.FC<NotSaveProps> = ({
  iconSize,
  popAtEditor
}) => {

  const onPress = () => {
    Alert.alert(
      "Erin",
      "변경사항을 저장하지 않았어요! 정말 나가도 괜찮으시겠어요?",
      [
        { 
          text: "아니요", 
          style: "cancel", 
          onPress: voidFunction
        },
        {
          text: "예",
          style: "destructive",
          // If the user confirmed, then we dispatch the action we blocked earlier
          // This will continue the action that had triggered the removal of the screen
          onPress: popAtEditor,
        },
      ]
    );
  };

  return <XButton 
    onPress={onPress}
  />;
};

const mapStateToProps = (state: RootState) => {
  return {
    iconSize: state.editor.settings.iconSize,
    popAtEditor: state.navigation.popAtEditor
  };
};

const connector = connect(mapStateToProps, { });

export default connector(NotSave);
