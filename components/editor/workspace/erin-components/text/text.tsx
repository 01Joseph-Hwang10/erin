import { FontStyles } from "@components/editor/bottom-float/font-style-members/font-style.data";
import { RootState } from "@redux/root-reducer";
import { setCreationPoint, SetCreationPointInput, setFocusedComponent, SetFocusedComponentInput } from "@slices/editor/editor-handle";
import { setTextOnEditState, SetTextOnEditStateInput } from "@slices/editor/editor-states";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { TextStyle } from "react-native";
import { StyleProp, ViewStyle } from "react-native";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native";
import { PanGestureHandler, RotationGestureHandler, PinchGestureHandler } from "react-native-gesture-handler";
import { TextInput, TapGestureHandler } from "react-native-gesture-handler";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import { useSharedValue } from "react-native-reanimated";
import { connect, ConnectedProps } from "react-redux";
import { Dispatch } from "redux";

type ErinTextReduxProps = ConnectedProps<typeof connector>

interface ErinTextProps extends ErinTextReduxProps {
  id: number,
  zIndex: number,
  animationId?: number
}

const defaultFont: FontStyles = "Gaegu-Bold";

const ErinText: React.FC<ErinTextProps> = ({
  creationPoint: { x, y },
  setCreationPoint: SetCreationPoint,
  zIndex,
  id,
  setFocusedComponent: SetFocusedComponent,
  setTextOnEditState: SetTextOnEditState,
  focusedComponent,
  textOnEdit,
  fontColor: fontColorRaw,
  fontStyle: fontStyleRaw
}) => {

  const [ firstAccess, setFirstAccess ] = useState<boolean>(true);
  const [ fontColor, setFontColor ] = useState<string>("white");
  const [ fontStyle, setFontStyle ] = useState<FontStyles>(defaultFont);
  const [ text, setText ] = useState<string>("");

  const tapHandlerRef = React.createRef();
  const panHandlerRef = React.createRef();
  const pinchHandlerRef = React.createRef();
  const rotationHandlerRef = React.createRef();

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

  const setToDefault = () => {
    SetTextOnEditState(false);
  };

  const focusToThis = () => {
    SetFocusedComponent({
      focusedComponent: id,
      focusedComponentType: "text"
    });
    SetTextOnEditState(true);
  };

  useEffect(() => {
    if (firstAccess) {
      if ( x && y ) {
        posX.value = x;
        posY.value = y;
      }
      SetCreationPoint({ x: null, y: null });
      SetFocusedComponent({
        focusedComponent: id,
        focusedComponentType: "text"
      });
      setFirstAccess(false);
      SetTextOnEditState(true);
    } else {
      if (focusedComponent === id) {
        if (fontColorRaw) {
          setFontColor(fontColorRaw);
        }
        if (fontStyleRaw) {
          setFontStyle(fontStyleRaw);
        }
      }
    }
  }, [fontStyleRaw, fontColorRaw]);

  const rootStyle: StyleProp<ViewStyle> = {
    zIndex,
  };

  const textStyle: StyleProp<TextStyle> = {
    fontSize: 60,
    fontFamily: fontStyle,
    color: fontColor
  };

  return <PanGestureHandler
    ref={panHandlerRef}
    simultaneousHandlers={[
      rotationHandlerRef, 
      pinchHandlerRef, 
      tapHandlerRef
    ]}
  >
    <RotationGestureHandler
      ref={rotationHandlerRef}
      simultaneousHandlers={[
        panHandlerRef,
        pinchHandlerRef,
        tapHandlerRef
      ]}
    >
      <PinchGestureHandler
        ref={pinchHandlerRef}
        simultaneousHandlers={[
          panHandlerRef,
          rotationHandlerRef,
          tapHandlerRef
        ]}
      >
        <TapGestureHandler
          onBegan={focusToThis}
          ref={tapHandlerRef}
          simultaneousHandlers={[
            panHandlerRef,
            rotationHandlerRef,
            pinchHandlerRef
          ]}
        >
          <Animated.View 
            style={[
              styles.root, 
              animatedPosition, 
              rootStyle
            ]}
          >
            {
              focusedComponent === id && textOnEdit ? 
                <TextInput 
                  onChangeText={setText}
                  value={text}
                  placeholder="내용을 입력해 주세요!"
                  onSubmitEditing={setToDefault}
                  autoFocus={true}
                  style={textStyle}
                /> :
                <Text style={textStyle}>{text}</Text>
            }
          </Animated.View>
        </TapGestureHandler>
      </PinchGestureHandler>
    </RotationGestureHandler>
  </PanGestureHandler>;
};

const mapStateToProps = (state: RootState) => {
  return {
    creationPoint: state.editor.handle.creationPoint,
    focusedComponent: state.editor.handle.focusedComponent,
    textOnEdit: state.editor.states.textOnEdit,
    fontColor: state.editor.states.fontColor,
    fontStyle: state.editor.states.fontStyle
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setCreationPoint: (payload: SetCreationPointInput) => dispatch(setCreationPoint(payload)),
    setFocusedComponent: (payload: SetFocusedComponentInput) => dispatch(setFocusedComponent(payload)),
    setTextOnEditState: (payload: SetTextOnEditStateInput) => dispatch(setTextOnEditState(payload))
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(ErinText);

const styles = StyleSheet.create({
  root: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute"
  },
});
