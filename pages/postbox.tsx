import React from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "../layout/mobile-layout";
import { RootState } from "../redux/root-reducer";
import { Dispatch } from "redux";
import { setLoading, SetLoadingInput } from "../redux/slices/app-state";
import { connect, ConnectedProps } from "react-redux";
import { useFonts } from "expo-font";
import Svg, { Path } from "react-native-svg";
import { setBottomFloatHelpMessage, SetBottomFloatHelpMessageInput, setTopFloatHelpMessage, SetTopFloatHelpMessageInput } from "@slices/editor/editor-generic";

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
  setLoading: SetLoading,
  setTopFloatHelpMessage: SetTopFloatHelpMessage,
  setBottomFloatHelpMessage: SetBottomFloatHelpMessage
}) => {

  // NotoSansKR, Gaegu, Sunflower, SingleDay, NanumGothic, Jua
  const [ loaded ] = useFonts({
    "NotoSansKR-Thin": require("@assets/fonts/NotoSansKR-Thin.otf"),
    "Gaegu-Light": require("@assets/fonts/Gaegu-Light.ttf"),
    "Sunflower-Bold": require("@assets/fonts/Sunflower-Bold.ttf"),
    "NotoSansKR-Light": require("@assets/fonts/NotoSansKR-Light.otf"),
    "NotoSansKR-Bold": require("@assets/fonts/NotoSansKR-Bold.otf"),
    "Gaegu-Bold": require("@assets/fonts/Gaegu-Bold.ttf"),
    "Sunflower-Medium": require("@assets/fonts/Sunflower-Medium.ttf"),
    "Sunflower-Light": require("@assets/fonts/Sunflower-Light.ttf"),
    "SingleDay-Regular": require("@assets/fonts/SingleDay-Regular.ttf"),
    "NotoSansKR-Regular": require("@assets/fonts/NotoSansKR-Regular.otf"),
    "NotoSansKR-Medium": require("@assets/fonts/NotoSansKR-Medium.otf"),
    "NotoSansKR-Black": require("@assets/fonts/NotoSansKR-Black.otf"),
    "NanumGothic-Regular": require("@assets/fonts/NanumGothic-Regular.ttf"),
    "NanumGothic-ExtraBold": require("@assets/fonts/NanumGothic-ExtraBold.ttf"),
    "NanumGothic-Bold": require("@assets/fonts/NanumGothic-Bold.ttf"),
    "Jua-Regular": require("@assets/fonts/Jua-Regular.ttf"),
    "Gaegu-Regular": require("@assets/fonts/Gaegu-Regular.ttf"),
  });

  const navigateToEditor = () => {
    SetLoading(true);
  };

  const handleNavigate = () => {
    const loading = setInterval(
      () => {
        if (loaded) {
          SetTopFloatHelpMessage(null);
          SetBottomFloatHelpMessage(null);
          navigation.navigate("editor");
          clearInterval(loading);
        }
      },
      100
    );
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
    setLoading: (payload: SetLoadingInput) => dispatch(setLoading(payload)),
    setBottomFloatHelpMessage: (payload: SetBottomFloatHelpMessageInput) => dispatch(setBottomFloatHelpMessage(payload)),
    setTopFloatHelpMessage: (payload: SetTopFloatHelpMessageInput) => dispatch(setTopFloatHelpMessage(payload)),
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
