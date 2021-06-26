import React from "react";
import { StyleSheet } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { connect, ConnectedProps } from "react-redux";
import { Dispatch } from "redux";
import { RootState } from "../../redux/root-reducer";
import { setBottomTabCurrent, SetBottomTabCurrentInput } from "../../redux/slices/editor";

type WorkspaceReduxProps = ConnectedProps<typeof connector>

interface WorkspaceProps extends WorkspaceReduxProps {}

class Workspace extends React.Component<WorkspaceProps> {

  public setCreateMode = (): void => {
    if (!this.props.animationMode) {
      this.props.setBottomTabCurrent("create");
    }
  }

  render(): React.ReactNode {
    return (
      <TouchableWithoutFeedback 
        style={styles.root}
        onPress={this.setCreateMode}
      ></TouchableWithoutFeedback>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    animationMode: state.editor.animationMode
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setBottomTabCurrent: (payload: SetBottomTabCurrentInput) => dispatch(setBottomTabCurrent(payload))
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(Workspace);

const styles = StyleSheet.create({
  root: {
    width: "100%",
    height: "100%",
  }
});