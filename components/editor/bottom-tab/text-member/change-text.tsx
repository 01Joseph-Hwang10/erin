import { Feather } from "@expo/vector-icons";
import React from "react";
import { RootState } from "../../../../redux/root-reducer";
import { connect, ConnectedProps } from "react-redux";
import { ICON_COLOR } from "../../base/constants";
import PressButton from "../../base/press-button";
import { Dispatch } from "redux";
import { setTextOnEditState, SetTextOnEditStateInput } from "@slices/editor/editor-states";

type CreateShapeReduxProps = ConnectedProps<typeof connector>

interface CreateShapeProps extends CreateShapeReduxProps {}

const CreateShape: React.FC<CreateShapeProps> = ({
  iconSize,
  setTextOnEditState: SetTextOnEditState
}) => {

  const renderIcon = () => (
    <Feather name="edit" size={iconSize} color={ICON_COLOR} />
  );

  const onPress = () => {
    SetTextOnEditState(true);
  };
  
  return <PressButton 
    icon={renderIcon}
    onPress={onPress}
  />;
};

const mapStateToProps = (state: RootState) => {
  return {
    iconSize: state.editor.generic.settings.iconSize,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setTextOnEditState: (payload: SetTextOnEditStateInput) => dispatch(setTextOnEditState(payload))
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(CreateShape);
