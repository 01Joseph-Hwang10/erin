import React from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../../redux/root-reducer";

type PlaceholderReduxProps = ConnectedProps<typeof connector>

interface PlaceholderProps extends PlaceholderReduxProps {}

const Placeholder: React.FC<PlaceholderProps> = ({
  width: screenWidth
}) => {

  const placeholderStyle: StyleProp<ViewStyle> = {
    width: screenWidth / 7,
    height: 1
  };

  return (
    <View style={placeholderStyle}></View>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    width: state.screen.screenSpec.width
  };
};

const connector = connect(mapStateToProps, {});

// export default React.memo(connector(Placeholder));
export default connector(Placeholder);

