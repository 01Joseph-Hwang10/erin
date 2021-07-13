import { RootState } from "@redux/root-reducer";
import { setTextContentState, SetTextContentStateInput } from "@slices/editor/editor-states";
import COLORS from "@src/colors";
import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { connect, ConnectedProps } from "react-redux";
import { Dispatch } from "redux";

type EditTextReduxProps = ConnectedProps<typeof connector>

interface EditTextProps extends EditTextReduxProps {}

const fontSize = 20;

const EditText: React.FC<EditTextProps> = ({
  textContent,
  setTextContent
}) => {

  return (
    <View style={styles.root}>
      <View style={styles.textInputWrapper}>
        <TextInput 
          onChangeText={setTextContent}
          value={textContent || ""}
          placeholder="내용을 입력해 주세요!"
          autoFocus={true}
          style={styles.inputText}
          multiline={true}
        />
      </View>
    </View>
  );
};

const mapStateToProps = (state: RootState) => ({
  textContent: state.editor.states.textContent,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setTextContent: (payload: SetTextContentStateInput) => dispatch(setTextContentState(payload))
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(EditText);

const styles = StyleSheet.create({
  root: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  textInputWrapper: {
    width: "100%",
    backgroundColor: COLORS.DARK.sharp,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: COLORS.DARK.secondary,
  },
  buttonWrapper: {
    flex: 1,
  },
  textWrapper: {
    justifyContent: "flex-start",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    color: COLORS.DARK.secondary,
    fontSize,
  },
  button: {
    backgroundColor: COLORS.DARK.highlight,
    borderRadius: 5,
    paddingVertical: 5,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "teal",
    zIndex: 9999,
    marginVertical: 5
  },
  inputText: {
    fontWeight: "bold",
    fontSize,
    color: COLORS.DARK.secondary,
    paddingVertical: 5
  },
  buttonsWrapper: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  }
});
