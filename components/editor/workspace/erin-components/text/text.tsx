import { FontStyles } from "@components/editor/bottom-float/font-style-members/font-style.data";
import { RootState } from "@redux/root-reducer";
import { 
  setCreationPoint, 
  SetCreationPointInput, 
  setFocusedComponent, 
  SetFocusedComponentInput, 
  updateMaxZIndex, 
  UpdateMaxZIndexInput 
} from "@slices/editor/editor-handle";
import { setTextOnEditState, SetTextOnEditStateInput } from "@slices/editor/editor-states";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { TextStyle } from "react-native";
import { StyleProp, ViewStyle } from "react-native";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native";
import { 
  PanGestureHandler, 
  RotationGestureHandler, 
  PinchGestureHandler, 
  TapGestureHandlerGestureEvent, 
  PanGestureHandlerGestureEvent, 
  PinchGestureHandlerGestureEvent, 
  RotationGestureHandlerGestureEvent,
  TextInput, 
  TapGestureHandler
} from "react-native-gesture-handler";
import Animated, { 
  useAnimatedStyle,
  useAnimatedGestureHandler,
  useSharedValue
} from "react-native-reanimated";
import { runOnJS } from "react-native-reanimated";
import { connect, ConnectedProps } from "react-redux";
import { Dispatch } from "redux";

type ErinTextReduxProps = ConnectedProps<typeof connector>

interface ErinTextProps extends ErinTextReduxProps {
  id: number,
  zIndex: number,
  animationId?: number,
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
  fontStyle: fontStyleRaw,
  updateMaxZIndex: UpdateMaxZIndex,
  maxZIndex,
  screenWidth
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
  const scale = useSharedValue(0);
  const rotation = useSharedValue(0);

  const animatedPosition = useAnimatedStyle(
    () => {
      return {
        top: posY.value,
        left: posX.value,
      };
    },
    [posX, posY]
  );

  const animatedScale = useAnimatedStyle(
    () => {
      return {
        transform: [{ scale: scale.value }]
      };
    },
    [scale]
  );

  const animatedRotation = useAnimatedStyle(
    () => {
      return {
        transform: [{ rotateZ: `${rotation.value}rad` }]
      };
    },
    [rotation]
  );

  const setToDefault = () => {
    SetFocusedComponent({
      focusedComponent: -1,
      focusedComponentType: "none"
    });
    SetTextOnEditState(false);
  };

  const focusToThis = () => {
    SetFocusedComponent({
      focusedComponent: id,
      focusedComponentType: "text"
    });
  };

  const accountThis = () => {
    if (zIndex !== maxZIndex) {
      UpdateMaxZIndex(zIndex);
    }
  };

  const cleanUp = () => {
    if ( maxZIndex === 1) return;
    if (zIndex === maxZIndex) {
      UpdateMaxZIndex(1);
    }
  };


  const panGestureHandler = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
    onStart: () => {
      runOnJS(accountThis)();
    },
    onActive: ({ x, y }) => {
      if (zIndex === maxZIndex) {
        posX.value = x,
        posY.value = y;
      }
    },
    onEnd: () => {
      runOnJS(cleanUp)();
    }
  });

  const tapGestureHandler = useAnimatedGestureHandler<TapGestureHandlerGestureEvent>({
    onStart: () => {
      runOnJS(accountThis)();
    },
    onActive: () => {
      if (zIndex === maxZIndex) {
        runOnJS(focusToThis)();
      }
    },
    onEnd: () => {
      runOnJS(cleanUp)();
    }
  });

  const pinchGestureHandler = useAnimatedGestureHandler<PinchGestureHandlerGestureEvent>({
    onStart: () => {
      runOnJS(accountThis)();
    },
    onActive: ({ scale: newScale }) => {
      if (zIndex === maxZIndex) {
        scale.value = scale.value * newScale;
      }
    },
    onEnd: () => {
      runOnJS(cleanUp)();
    }
  });

  const rotationGestureHandler = useAnimatedGestureHandler<RotationGestureHandlerGestureEvent>({
    onStart: () => {
      runOnJS(accountThis)();
    },
    onActive: ({ rotation: newRotation }) => {
      if (zIndex === maxZIndex) {
        rotation.value = rotation.value + newRotation;
      }
    },
    onEnd: () => {
      runOnJS(cleanUp)();
    }
  });

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
    width: screenWidth / 3
  };

  const textStyle: StyleProp<TextStyle> = {
    fontSize: 60,
    fontFamily: fontStyle,
    color: fontColor,
    zIndex: zIndex + 1
  };

  return <PanGestureHandler
    ref={panHandlerRef}
    onGestureEvent={panGestureHandler}
    simultaneousHandlers={[
      rotationHandlerRef, 
      pinchHandlerRef, 
      tapHandlerRef
    ]}
  >
    <Animated.View style={[
      styles.root,
      animatedPosition,
      rootStyle
    ]}>
      <RotationGestureHandler
        ref={rotationHandlerRef}
        onGestureEvent={rotationGestureHandler}
        simultaneousHandlers={[
          panHandlerRef,
          pinchHandlerRef,
          tapHandlerRef
        ]}
      >
        <Animated.View style={[
          styles.wrapper,
          animatedRotation
        ]}>
          <PinchGestureHandler
            ref={pinchHandlerRef}
            onGestureEvent={pinchGestureHandler}
            simultaneousHandlers={[
              panHandlerRef,
              rotationHandlerRef,
              tapHandlerRef
            ]}
          >
            <Animated.View style={[
              styles.wrapper,
              animatedScale
            ]}>
              <TapGestureHandler
                onGestureEvent={tapGestureHandler}
                ref={tapHandlerRef}
                simultaneousHandlers={[
                  panHandlerRef,
                  rotationHandlerRef,
                  pinchHandlerRef
                ]}
              >
                <Animated.View
                  style={styles.wrapper}
                >
                  {
                    focusedComponent === id && textOnEdit ? 
                      <TextInput 
                        onChangeText={setText}
                        value={text}
                        placeholder="내용을 입력해 주세요!"
                        onBlur={setToDefault}
                        onSubmitEditing={setToDefault}
                        autoFocus={true}
                        style={textStyle}
                      /> :
                      <Text style={textStyle}>{text}</Text>
                  }
                </Animated.View>
              </TapGestureHandler>
            </Animated.View>
          </PinchGestureHandler>
        </Animated.View>
      </RotationGestureHandler>
    </Animated.View>
  </PanGestureHandler>;
};

const mapStateToProps = (state: RootState) => {
  return {
    creationPoint: state.editor.handle.creationPoint,
    focusedComponent: state.editor.handle.focusedComponent,
    textOnEdit: state.editor.states.textOnEdit,
    fontColor: state.editor.states.fontColor,
    fontStyle: state.editor.states.fontStyle,
    maxZIndex: state.editor.handle.maxZIndex,
    screenWidth: state.screen.screenSpec.width
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setCreationPoint: (payload: SetCreationPointInput) => dispatch(setCreationPoint(payload)),
    setFocusedComponent: (payload: SetFocusedComponentInput) => dispatch(setFocusedComponent(payload)),
    setTextOnEditState: (payload: SetTextOnEditStateInput) => dispatch(setTextOnEditState(payload)),
    updateMaxZIndex: (payload: UpdateMaxZIndexInput) => dispatch(updateMaxZIndex(payload))
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
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  }
});
