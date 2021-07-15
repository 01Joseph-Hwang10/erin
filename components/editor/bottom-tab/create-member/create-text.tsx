import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { RootState } from "../../../../redux/root-reducer";
import { connect, ConnectedProps } from "react-redux";
import { ICON_COLOR } from "../../base/constants";
import PressButton from "../../base/press-button";

type CreateTextReduxProps = ConnectedProps<typeof connector>

interface CreateTextProps extends CreateTextReduxProps {}

const CreateText: React.FC<CreateTextProps> = ({
  iconSize,
  pushComponent,
}) => {

  const renderIcon = () => (
    <MaterialIcons name="text-fields" size={iconSize} color={ICON_COLOR} />
  );

  const onPress = () => {
    if (pushComponent) {
      pushComponent({
        animationId: -1,
        type: "text"
      });
    }
  };
  
  return <PressButton 
    icon={renderIcon}
    onPress={onPress}
    helpMessage={"텍스트를 만듭니다"}
  />;
};

const mapStateToProps = (state: RootState) => {
  return {
    iconSize: state.editor.generic.settings.iconSize,
    pushComponent: state.editor.handle.pushComponent
  };
};

const connector = connect(mapStateToProps, {});

export default connector(CreateText);
