import { FontStyles } from "@components/editor/bottom-float/font-style-members/font-style.data";
import { RootState } from "@redux/root-reducer";
import { 
  setCreationPoint, 
  SetCreationPointInput, 
  setFocusedComponent, 
  SetFocusedComponentInput, 
} from "@slices/editor/editor-handle";
import { setTextOnEditState, SetTextOnEditStateInput } from "@slices/editor/editor-states";
import React from "react";
import { TextStyle } from "react-native";
import { StyleProp, ViewStyle } from "react-native";
import { StyleSheet } from "react-native";
import { View, Text, Animated } from "react-native";
import { 
  PanGestureHandler, 
  RotationGestureHandler, 
  PinchGestureHandler, 
  PanGestureHandlerGestureEvent, 
  PinchGestureHandlerGestureEvent, 
  RotationGestureHandlerGestureEvent,
  TextInput, 
  TapGestureHandler,
  PanGestureHandlerStateChangeEvent,
  State,
  RotationGestureHandlerStateChangeEvent,
  PinchGestureHandlerStateChangeEvent,
  TapGestureHandlerStateChangeEvent
} from "react-native-gesture-handler";
import { connect, ConnectedProps } from "react-redux";
import { Dispatch } from "redux";

type ErinTextReduxProps = ConnectedProps<typeof connector>

interface ErinTextProps extends ErinTextReduxProps {
  id: number,
  zIndex: number,
  animationId?: number,
}

interface ErinTextState {
  fontColor: string,
  fontStyle: FontStyles,
  text: string,
}

// const defaultFont: FontStyles = "Gaegu-Bold";

class ErinText extends React.Component<ErinTextProps, ErinTextState> {

  public state: ErinTextState = {
    fontColor: 'white',
    fontStyle: 'Gaegu-Bold',
    text: '',
  }

  private setFontColor: (fontColor: string) => void;
  private setFontStyle: (fontStyle: FontStyles) => void;
  private setText: (text: string) => void;

  private tapHandlerRef = React.createRef<TapGestureHandler>();
  private panHandlerRef = React.createRef<PanGestureHandler>();
  private pinchHandlerRef = React.createRef<PinchGestureHandler>();
  private rotationHandlerRef = React.createRef<RotationGestureHandler>();
  private period = 2 * Math.PI
  private posX: Animated.Value;
  private posY: Animated.Value;
  private lastPosition: { x: number, y: number };
  private pinchScale: Animated.Value;
  private baseScale: Animated.Value;
  private scale: Animated.AnimatedMultiplication;
  private lastScale: number;
  private rotationRaw: Animated.Value;
  private lastRotationRaw: number;
  private rotation: Animated.AnimatedModulo;
  private rotationString: Animated.AnimatedInterpolation;
  private onPinchGestureEvent: (event: PinchGestureHandlerGestureEvent) => void;
  private onRotateGestureEvent: (
    event: RotationGestureHandlerGestureEvent
  ) => void;
  private onPanGestureEvent: (event: PanGestureHandlerGestureEvent) => void;

  constructor(props: ErinTextProps) {
    super(props)
    // state
    this.setFontColor = (fontColor: string) => {
      this.setState({ fontColor })
    }
    this.setFontStyle = (fontStyle: FontStyles) => {
      this.setState({ fontStyle })
    }
    this.setText = (text: string) => {
      this.setState({ text })
    }

    // Pan
    const {
      x, y
    } = props.creationPoint
    this.lastPosition = {
      x: x ? x : 0,
      y: y ? y : 0
    }
    this.posX = new Animated.Value(0)
    this.posY = new Animated.Value(0)
    this.onPanGestureEvent = Animated.event(
      [
        { nativeEvent: 
          {
            translationX: this.posX,
            translationY: this.posY,
          }
        }
      ],
      { useNativeDriver: true }
    )

    // Scale
    this.baseScale = new Animated.Value(1)
    this.pinchScale = new Animated.Value(1)
    this.scale = Animated.multiply( this.baseScale, this.pinchScale )
    this.lastScale = 1
    this.onPinchGestureEvent = Animated.event(
      [{ nativeEvent: { scale: this.pinchScale } }],
      { useNativeDriver: true }
    )

    // Rotation
    this.rotationRaw = new Animated.Value(0)
    this.lastRotationRaw = 0
    this.rotation = Animated.modulo(this.rotationRaw, this.period)
    this.rotationString = this.rotation.interpolate({
      inputRange: [0, this.period],
      outputRange: ['0rad', `${this.period}rad`]
    })
    this.onRotateGestureEvent = Animated.event(
      [{ nativeEvent: { rotation: this.rotationRaw }}],
      { useNativeDriver: true }
    )
  }

  private onPanHandlerStateChange = (
    {
      nativeEvent: {
        oldState,
        translationX,
        translationY
      }
    }: PanGestureHandlerStateChangeEvent
  ) => {
    if (oldState === State.ACTIVE) {
      if (
        this.props.focusedComponent !== this.props.id ||
        this.props.focusedComponentType !== 'text'
        ) {
          this.props.setFocusedComponent({
            focusedComponent: this.props.id,
            focusedComponentType: "text"
          });
        }
      this.lastPosition.x += translationX;
      this.lastPosition.y += translationY;
      this.posX.setOffset(this.lastPosition.x);
      this.posY.setOffset(this.lastPosition.y);
      this.posX.setValue(0)
      this.posY.setValue(0)
    }
  }

  private onRotateHandlerStateChange = (
    {
      nativeEvent: {
        oldState,
        rotation
      }
    }: RotationGestureHandlerStateChangeEvent
  ) => {
    if (oldState === State.ACTIVE) {
      if (
        this.props.focusedComponent !== this.props.id ||
        this.props.focusedComponentType !== 'text'
        ) {
          this.props.setFocusedComponent({
            focusedComponent: this.props.id,
            focusedComponentType: "text"
          });
        }
      this.lastRotationRaw += rotation;
      this.rotationRaw.setOffset(this.lastRotationRaw);
      this.rotationRaw.setValue(0);
    }
  };

  private onPinchHandlerStateChange = (
    {
      nativeEvent: {
        oldState,
        scale
      }
    }: PinchGestureHandlerStateChangeEvent
  ) => {
    if (oldState === State.ACTIVE) {
      if (
        this.props.focusedComponent !== this.props.id ||
        this.props.focusedComponentType !== 'text'
        ) {
          this.props.setFocusedComponent({
            focusedComponent: this.props.id,
            focusedComponentType: "text"
          });
        }
      this.lastScale *= scale;
      this.baseScale.setValue(this.lastScale);
      this.pinchScale.setValue(1);
    }
  };

  private onTapHandlerStateChange = (
    {
      nativeEvent: {
        oldState
      }
    }: TapGestureHandlerStateChangeEvent
  ) => {
    if (oldState === State.ACTIVE) {
      this.props.setFocusedComponent({
        focusedComponent: this.props.id,
        focusedComponentType: "text"
      });
    }
  }

  private textStyle: StyleProp<TextStyle> = {
    fontSize: 50,
    color: this.state.fontColor,
    fontFamily: this.state.fontStyle
  }

  private rootStyle: StyleProp<ViewStyle> = {
    minWidth: this.props.screenWidth / 3
  }

  private setToDefault = () => {
    this.props.setTextOnEditState(false)
  }

  componentDidMount = () => {
    this.posX.setOffset(this.lastPosition.x)
    this.posY.setOffset(this.lastPosition.y)
    this.props.setCreationPoint({ x: null, y: null });
    this.props.setFocusedComponent({
      focusedComponent: this.props.id,
      focusedComponentType: "text"
    });
    this.props.setTextOnEditState(true);
  }

  componentDidUpdate = (prevProps: ErinTextProps) => {

    if (this.props.focusedComponent === this.props.id) {
      if (prevProps.pickedColor !== this.props.pickedColor) {
        if (this.props.pickedColor) {
          this.setFontColor(this.props.pickedColor)
        }
      }
      if (prevProps.fontStyle !== this.props.fontStyle) {
        if (this.props.fontStyle) {
          this.setFontStyle(this.props.fontStyle)
        }
      }
    }
    
  }

  render(): React.ReactNode {
    return <PanGestureHandler
      ref={this.panHandlerRef}
      onGestureEvent={this.onPanGestureEvent}
      onHandlerStateChange={this.onPanHandlerStateChange}
      simultaneousHandlers={[
        this.rotationHandlerRef,
        this.pinchHandlerRef,
        this.tapHandlerRef
      ]}
    >
      <Animated.View style={[
          styles.root,
          this.rootStyle,
          {
            transform: 
            [
              {
                translateX: this.posX
              },
              {
                translateY: this.posY
              },
              {
                scale: this.scale
              },
              {
                rotateZ: this.rotationString
              }
            ]
          }
        ]}>
        <RotationGestureHandler
          ref={this.rotationHandlerRef}
          onGestureEvent={this.onRotateGestureEvent}
          onHandlerStateChange={this.onRotateHandlerStateChange}
          simultaneousHandlers={[
            this.panHandlerRef,
            this.pinchHandlerRef,
            this.tapHandlerRef
          ]}
        >
          <Animated.View style={styles.wrapper}>
            <PinchGestureHandler
              ref={this.pinchHandlerRef}
              onGestureEvent={this.onPinchGestureEvent}
              onHandlerStateChange={this.onPinchHandlerStateChange}
              simultaneousHandlers={[
                this.panHandlerRef,
                this.rotationHandlerRef,
                this.tapHandlerRef
              ]}
            >
              <Animated.View style={styles.wrapper}>
                <TapGestureHandler
                  ref={this.tapHandlerRef}
                  onHandlerStateChange={this.onTapHandlerStateChange}
                  simultaneousHandlers={[
                    this.panHandlerRef,
                    this.rotationHandlerRef,
                    this.pinchHandlerRef
                  ]}
                >
                  <Animated.View style={styles.wrapper}>
                  {
                    this.props.focusedComponent === this.props.id && this.props.textOnEdit ? 
                      <TextInput 
                        onChangeText={this.setText}
                        value={this.state.text}
                        placeholder="내용을 입력해 주세요!"
                        autoFocus={true}
                        style={this.textStyle}
                        onSubmitEditing={this.setToDefault}
                        onBlur={this.setToDefault}
                      /> :
                      <Text style={this.textStyle}>{this.state.text}</Text>
                  }
                  </Animated.View>
                </TapGestureHandler>
              </Animated.View>
            </PinchGestureHandler>
          </Animated.View>
        </RotationGestureHandler>
      </Animated.View>
    </PanGestureHandler>
  }

}

const mapStateToProps = (state: RootState) => {
  return {
    creationPoint: state.editor.handle.creationPoint,
    focusedComponent: state.editor.handle.focusedComponent,
    focusedComponentType: state.editor.handle.focusedComponentType,
    textOnEdit: state.editor.states.textOnEdit,
    pickedColor: state.editor.states.pickedColor,
    fontStyle: state.editor.states.fontStyle,
    screenWidth: state.screen.screenSpec.width
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setCreationPoint: (payload: SetCreationPointInput) => dispatch(setCreationPoint(payload)),
    setFocusedComponent: (payload: SetFocusedComponentInput) => dispatch(setFocusedComponent(payload)),
    setTextOnEditState: (payload: SetTextOnEditStateInput) => dispatch(setTextOnEditState(payload)),
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(ErinText);

const styles = StyleSheet.create({
  root: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange",
    position: "absolute",
    padding: 10
  },
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  }
});
