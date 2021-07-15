import React from "react";
import { ViewStyle } from "react-native";
import { StyleProp, StyleSheet } from "react-native";
import { View } from "react-native";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../redux/root-reducer";
import Placeholder from "./base/placeholder";
import { returnShadowProps } from "./base/constants";
import iconMembers from "./top-float.data";

type TopFloatReduxProps = ConnectedProps<typeof connector>

interface TopFloatProps extends TopFloatReduxProps {}

const TopFloat: React.FC<TopFloatProps> = ({
  settings: {
    iconGap,
    iconSize
  },
  topFloatCurrent,
  onDrag
}) => {

  const marginSetter: StyleProp<ViewStyle> = {
    marginHorizontal: iconGap,
  };

  const iconWrapperStyle: StyleProp<ViewStyle> = {
    width: iconSize,
    height: iconSize,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    borderColor: "transparent",
    borderWidth: 1,
  };

  const shadowStyle: StyleProp<ViewStyle> = returnShadowProps(45);

  const placeholderStyle: StyleProp<ViewStyle> = {
    width: iconSize * 0.8,
    height: iconSize
  };

  if (onDrag) {
    return <View style={placeholderStyle}></View>;
  }

  return (
    <View style={styles.root}>
      {
        iconMembers[topFloatCurrent].map((member, index) => {
          if (member) {
            const Icon = () => member;
            return <View 
              key={index} 
              style={[iconWrapperStyle, marginSetter, shadowStyle]}
            >
              <Icon />
            </View>;
          }
          return <View 
            key={index}
            style={[placeholderStyle, marginSetter]}
          >
            <Placeholder />
          </View>;
        })
      }
    </View>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    topFloatCurrent: state.editor.generic.topFloatCurrent,
    settings: state.editor.generic.settings,
    onDrag: state.editor.handle.onDrag
  };
};

const connector = connect(mapStateToProps, {});

export default connector(TopFloat);

const styles = StyleSheet.create({
  root: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999
  }
});