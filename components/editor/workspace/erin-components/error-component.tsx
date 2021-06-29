import { RootState } from "@redux/root-reducer";
import React, { Component } from "react";
import { View, Text, StyleSheet, StyleProp, ViewStyle } from "react-native";
import { connect, ConnectedProps } from "react-redux";

type ErrorComponentReduxProps = ConnectedProps<typeof connector>

interface ErrorComponentProps extends ErrorComponentReduxProps {}

class ErrorComponent extends Component<ErrorComponentProps> {

    private rootWidthStyle: StyleProp<ViewStyle> = {
      width: this.props.screenWidth / 3
    }

    render(): React.ReactNode {
      return (
        <View 
          style={[styles.root, this.rootWidthStyle]}
        >
          <Text style={styles.text}>앗! 예기치 않은 오류가 발생했어요ㅠㅠ</Text>
        </View>
      );
    }
}

const mapStateToProps = (state: RootState) => {
  return {
    screenWidth: state.screen.screenSpec.width
  };
};

const connector = connect(mapStateToProps, {});

export default connector(ErrorComponent);

const styles = StyleSheet.create({
  root: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  text: {
    fontWeight: "600",
    color: "brown"
  }
});
