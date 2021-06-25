import React from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "../layout/mobile-layout";
import { RootState } from "../redux/root-reducer";
import { Dispatch } from "redux";
import { setLoading, SetLoadingInput } from "../redux/slices/app-state";
import { connect, ConnectedProps } from "react-redux";

type PostboxNavigationProp = StackNavigationProp<
  StackParamList,
  "main"
>

type PostboxReduxProps = ConnectedProps<typeof connector>

interface PostboxProps extends PostboxReduxProps {
  navigation: PostboxNavigationProp
}

const Postbox: React.FC<PostboxProps> = ({
  navigation,
  loading,
  setLoading: SetLoading
}) => {

  const navigateToEditor = () => {
    SetLoading(true);
  };

  const handleNavigate = () => {
    navigation.navigate("editor");
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={navigateToEditor}
      >
        <Text style={styles.text}>{loading ? "Loading" : "Editor" }</Text>
        {
          loading && 
          <ActivityIndicator 
            size='large' 
            onLayout={handleNavigate}
            color='black'
          />
        }
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    loading: state.appState.loading
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setLoading: (payload: SetLoadingInput) => dispatch(setLoading(payload))
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(Postbox);


const styles = StyleSheet.create({
  button: {
    backgroundColor: "orange",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    fontSize: 36,
    fontWeight: "bold",
    color: "white"
  }
});
