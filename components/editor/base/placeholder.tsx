import React from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../../redux/root-reducer";

type PlaceholderReduxProps = ConnectedProps<typeof connector>

interface PlaceholderProps extends PlaceholderReduxProps {}

const Placeholder: React.FC<PlaceholderProps> = ({
  iconSize
}) => {

  const placeholderStyle: StyleProp<ViewStyle> = {
    width: iconSize,
    height: iconSize
  };

  return (
    <View style={placeholderStyle}></View>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    iconSize: state.editor.settings.iconSize
  };
};

const connector = connect(mapStateToProps, {});

// export default React.memo(connector(Placeholder));
export default connector(Placeholder);

