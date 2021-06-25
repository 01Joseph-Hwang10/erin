import React from "react";
import CheckButton from "../../../common/check-button";
import { RootState } from "../../../../redux/root-reducer";
import { connect, ConnectedProps } from "react-redux";
import { ICON_COLOR } from "../../base/constants"

type CheckShapeReduxProps = ConnectedProps<typeof connector>

interface CheckShapeProps extends CheckShapeReduxProps {}

const CheckShape: React.FC<CheckShapeProps> = ({
  iconSize
}) => {

  const onPress = () => {
    // sth
  };

  return <CheckButton 
    onPress={onPress}
  />;
};

const mapStateToProps = (state: RootState) => {
  return {
    iconSize: state.editor.settings.iconSize,
  }
}

const connector = connect(mapStateToProps, { });

export default connector(CheckShape);
