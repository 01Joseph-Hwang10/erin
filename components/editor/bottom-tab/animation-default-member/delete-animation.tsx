import React from "react";
import XButton from "../../../common/x-button";
import { RootState } from "../../../../redux/root-reducer";
import { connect, ConnectedProps } from "react-redux";
import { ICON_COLOR } from "../../base/constants"

type DeleteAnimationReduxProps = ConnectedProps<typeof connector>

interface DeleteAnimationProps extends DeleteAnimationReduxProps {}

const DeleteAnimation: React.FC<DeleteAnimationProps> = ({
  iconSize
}) => {

  const onPress = () => {
    // Needa do sth here
  };
  
  return <XButton 
    onPress={onPress}
  />;
};

const mapStateToProps = (state: RootState) => {
  return {
    iconSize: state.editor.settings.iconSize,
  }
}

const connector = connect(mapStateToProps, { });

export default connector(DeleteAnimation);
