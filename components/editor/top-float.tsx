import { Erin } from "erin";
import React from "react";
import { Platform, ViewStyle } from "react-native";
import { StyleProp, StyleSheet } from "react-native";
import { View } from "react-native";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../redux/root-reducer";
import { IconMembers } from "../common/types";
import AddPage from "./top-float/default-member/add-page";
import CopyPage from "./top-float/default-member/copy-page";
import DeletePage from "./top-float/default-member/delete-page";
import LinkToPage from "./top-float/default-member/link-to-page";
import TogglePages from "./top-float/default-member/toggle-pages";
import Placeholder from "./base/placeholder";
import { Shadow } from "react-native-shadow-2";
import { returnShadowProps } from "./base/constants";

const defaultMembers = [
  <TogglePages key={0} />,
  <LinkToPage key={1} />,
  null,
  null,
  <DeletePage key={4} />,
  <CopyPage key={5} />,
  <AddPage key={6} />
];

type TopFloatReduxProps = ConnectedProps<typeof connector>

interface TopFloatProps extends TopFloatReduxProps {}

const TopFloat: React.FC<TopFloatProps> = ({
  settings: {
    iconGap,
    iconSize
  }
}) => {

  const marginSetter: StyleProp<ViewStyle> = {
    marginHorizontal: iconGap,
  };

  const iconWrapperStyle: StyleProp<ViewStyle> = {
    width: iconSize,
    height: iconSize,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    ...Object(returnShadowProps(45)),
    borderColor: "transparent",
    borderWidth: 1,
  };

  const placeholderStyle: StyleProp<ViewStyle> = {
    width: iconSize * 0.8,
    height: iconSize
  };

  return (
    <View style={styles.root}>
      {
        defaultMembers.map((member, index) => {
          if (member) {
            const Icon = () => member;
            return <View 
              key={index} 
              style={[iconWrapperStyle, marginSetter]}
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
    topFloatCurrent: state.editor.topFloatCurrent,
    settings: state.editor.settings
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