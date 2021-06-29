import { RootState } from "@redux/root-reducer";
import { setCreationPoint, SetCreationPointInput, setFocusedComponent, SetFocusedComponentInput } from "@slices/editor/editor-handle";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { StyleProp, ViewStyle } from "react-native";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import { useSharedValue } from "react-native-reanimated";
import { connect, ConnectedProps } from "react-redux";
import { Dispatch } from "redux";

type ErinTextMode = "editing" | "default"

type ErinTextReduxProps = ConnectedProps<typeof connector>

interface ErinTextProps extends ErinTextReduxProps {
  id: number,
  zIndex: number,
  animationId?: number
}

const ErinText: React.FC<ErinTextProps> = ({
  creationPoint: { x, y },
  setCreationPoint: SetCreationPoint,
  zIndex,
  id,
  setFocusedComponent: SetFocusedComponent
}) => {

  const [ mode, setMode ] = useState<ErinTextMode>("editing");
  const [ text, setText ] = useState<string>("");

  const posX = useSharedValue(0);
  const posY = useSharedValue(0);

  const animatedPosition = useAnimatedStyle(
    () => {
      return {
        top: posY.value,
        left: posX.value
      };
    },
    [posX, posY]
  );

  const toggleMode = () => {
    if ( mode === "editing" ) {
      setMode("default");
    } else {
      setMode("editing");
    }
  };

  useEffect(() => {
    if ( x && y ) {
      posX.value = x;
      posY.value = y;
    }
    SetCreationPoint({ x: null, y: null });
    SetFocusedComponent({
      focusedComponent: id,
      focusedComponentType: "text"
    });
  }, []);

  const rootStyle: StyleProp<ViewStyle> = {
    zIndex
  };

  return <Animated.View 
    style={[styles.root, animatedPosition, rootStyle]}
  >
    {
      mode === "editing" ? 
        <TextInput 
          onChangeText={setText}
          value={text}
          placeholder="내용을 입력해 주세요!"
          onSubmitEditing={toggleMode}
          autoFocus={true}
        /> :
        <Text style={styles.text}>{text}</Text>
    }
  </Animated.View>;
};

const mapStateToProps = (state: RootState) => {
  return {
    creationPoint: state.editor.handle.creationPoint
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setCreationPoint: (payload: SetCreationPointInput) => dispatch(setCreationPoint(payload)),
    setFocusedComponent: (payload: SetFocusedComponentInput) => dispatch(setFocusedComponent(payload))
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(ErinText);

const styles = StyleSheet.create({
  root: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange",
    position: "absolute"
  },
  text: {
    fontSize: 30
  }
});
