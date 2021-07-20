import { FontStyles } from "@components/editor/bottom-float/font-style-members/font-style.data";
import { RootState } from "@redux/root-reducer";
import { 
  setBottomFloatCurrent, 
  SetBottomFloatCurrentInput, 
  setBottomTabCurrent, 
  SetBottomTabCurrentInput, 
  setTopFloatCurrent, 
  SetTopFloatCurrentInput 
} from "@slices/editor/editor-generic";
import { 
  setCreationPoint, 
  SetCreationPointInput, 
  setFocusedComponent, 
  SetFocusedComponentInput,
  setOnDeletionArea,
  SetOnDeletionAreaInput,
  setOnDrag,
  SetOnDragInput, 
} from "@slices/editor/editor-handle";
import { 
  initialFontSize,
  setAnimationInfinite,
  SetAnimationInfiniteInput,
  setBackgroundShapeState, 
  SetBackgroundShapeStateInput, 
  setColorConsumerState, 
  SetColorConsumerStateInput, 
  setFontSizeState, 
  SetFontSizeStateInput, 
  setFontStyleState, 
  SetFontStyleStateInput, 
  setPickedColorState, 
  SetPickedColorStateInput, 
  setTextAlignState, 
  SetTextAlignStateInput, 
  setTextAnimationTypeState, 
  SetTextAnimationTypeStateInput, 
  setTextContentState, 
  SetTextContentStateInput, 
  setTextOnEditState, 
  SetTextOnEditStateInput, 
} from "@slices/editor/editor-states";
import { Erin } from "erin";
import React from "react";
import { 
  LayoutChangeEvent, 
  StyleProp, 
  ViewStyle,
  StyleSheet,
  View, 
  Animated,
} from "react-native";
import { 
  PanGestureHandler, 
  RotationGestureHandler, 
  PinchGestureHandler, 
  PanGestureHandlerGestureEvent, 
  PinchGestureHandlerGestureEvent, 
  RotationGestureHandlerGestureEvent,
  TapGestureHandler,
  PanGestureHandlerStateChangeEvent,
  State,
  RotationGestureHandlerStateChangeEvent,
  PinchGestureHandlerStateChangeEvent,
  TapGestureHandlerStateChangeEvent
} from "react-native-gesture-handler";
import { connect, ConnectedProps } from "react-redux";
import { Dispatch } from "redux";
import GenericAnimationContext from "../common/animation/generic-animation";
import BackgroundShape from "./background-shape";
import TextAnimationContext from "./text-animation";
import { decideHover } from "./text.function";

type ErinTextReduxProps = ConnectedProps<typeof connector>

interface ErinTextProps extends ErinTextReduxProps {
  id: number,
  zIndex: number,
}

interface ErinTextState {
  fontColor: string,
  fontStyle: FontStyles,
  text: string,
  backgroundColor: string,
  backgroundShape: Erin.Common.NonableTextStyle,
  focused: boolean,
  size: number,
  textAlign: Erin.Common.TextAlign,
  firstMount: boolean,
  fontSize: number,
  textShift: {
    x: number,
    y: number
  },
  textAnimationType: Erin.Common.TextAnimationTypes,
  animationInfinite: boolean
}

// const defaultFont: FontStyles = "Gaegu-Bold";

class ErinText extends React.Component<ErinTextProps, ErinTextState> {

  public state: ErinTextState = {
    fontColor: "white",
    fontStyle: "Gaegu-Bold",
    text: "",
    backgroundColor: "orange",
    backgroundShape: "none",
    focused: false,
    size: initialFontSize,
    textAlign: "justify",
    firstMount: true,
    fontSize: initialFontSize,
    textShift: {
      x: 0,
      y: 0
    },
    textAnimationType: "none",
    animationInfinite: true
  }

  private setFontColor: (fontColor: string) => void;
  private setFontStyle: (fontStyle: FontStyles) => void;
  private setText: (text: string) => void;
  private setBackgroundColor: (backgroundColor: string) => void;
  private setFocused: (focused: boolean) => void;
  private setBackgroundShape: (backgroundShape: Erin.Common.NonableTextStyle) => void;
  private setSize: (size: number) => void;
  private setTextAlign: (textAlign: Erin.Common.TextAlign) => void;
  private setFirstMount: (firstMount: boolean) => void;
  private setFontSize: (fontSize: number) => void;
  private setTextShift: (textShift: { x: number, y: number }) => void;
  private setAnimationType: (textAnimationType: Erin.Common.TextAnimationTypes) => void;
  private setAnimationInfinite: (animationInfinite: boolean) => void;

  private rootViewRef = React.createRef<View>();
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
    super(props);
    // state
    this.setFontColor = ( fontColor ) => {
      this.setState({ fontColor });
    };
    this.setFontStyle = ( fontStyle ) => {
      this.setState({ fontStyle });
    };
    this.setText = ( text ) => {
      this.setState({ text });
    };
    this.setBackgroundColor = ( backgroundColor ) => {
      this.setState({ backgroundColor });
    };
    this.setFocused = ( focused ) => {
      this.setState({ focused });
    };
    this.setBackgroundShape = ( backgroundShape ) => {
      this.setState({ backgroundShape });
    };
    this.setSize = ( size ) => {
      this.setState({ size });
    };
    this.setTextAlign = ( textAlign ) => {
      this.setState({ textAlign });
    };
    this.setFirstMount = ( firstMount ) => {
      this.setState({ firstMount });
    };
    this.setFontSize = ( fontSize ) => {
      this.setState({ fontSize });
    };
    this.setTextShift = ( textShift ) => {
      this.setState({ textShift });
    };
    this.setAnimationType = ( textAnimationType ) => {
      this.setState({ textAnimationType });
    };
    this.setAnimationInfinite = ( animationInfinite ) => {
      this.setState({ animationInfinite })
    }
    this.setAnimationInfinite = ( animationInfinite ) => {
      this.setState({ animationInfinite })
    }

    // Pan
    const {
      x, y
    } = props.creationPoint;
    this.lastPosition = {
      x: x ? x : 0,
      y: y ? y : 0
    };
    this.posX = new Animated.Value(0);
    this.posY = new Animated.Value(0);
    this.onPanGestureEvent = Animated.event(
      [
        { nativeEvent: 
          {
            translationX: this.posX,
            translationY: this.posY,
          }
        }
      ],
      {
        useNativeDriver: true,
        listener: ({ 
          nativeEvent: { 
            absoluteX, 
            absoluteY,
            translationX,
            translationY,
          } 
        }: PanGestureHandlerGestureEvent) => {
          if (!this.props.onDrag) {
            if (Math.abs(translationX) > 10 || Math.abs(translationY) > 10) {
              this.props.setOnDrag(true);
            }
          }
          if (
            decideHover(
              { x: absoluteX, y: absoluteY },
              this.props.deletionArea
            ) && 
            this.props.focusedComponent === this.props.id
          ) {
            if (!this.props.onDeletionArea) {
              this.props.setOnDeletionArea(true);
            }
          } else {
            if (this.props.onDeletionArea) {
              this.props.setOnDeletionArea(false);
            }
          }
        }
      },
    );

    // Scale
    this.baseScale = new Animated.Value(1);
    this.pinchScale = new Animated.Value(1);
    this.scale = Animated.multiply( this.baseScale, this.pinchScale );
    this.lastScale = 1;
    this.onPinchGestureEvent = Animated.event(
      [{ nativeEvent: { scale: this.pinchScale } }],
      { useNativeDriver: true }
    );

    // Rotation
    this.rotationRaw = new Animated.Value(0);
    this.lastRotationRaw = 0;
    this.rotation = Animated.modulo(this.rotationRaw, this.period);
    this.rotationString = this.rotation.interpolate({
      inputRange: [0, this.period],
      outputRange: ["0rad", `${this.period}rad`]
    });
    this.onRotateGestureEvent = Animated.event(
      [{ nativeEvent: { rotation: this.rotationRaw }}],
      { useNativeDriver: true }
    );
  }

  private onPanHandlerStateChange = (
    {
      nativeEvent: {
        oldState,
        translationX,
        translationY,
      }
    }: PanGestureHandlerStateChangeEvent
  ) => {
    if (oldState === State.BEGAN) {
      if (
        this.props.focusedComponent !== this.props.id ||
        this.props.focusedComponentType !== "text"
      ) {
        this.props.setFocusedComponent({
          focusedComponent: this.props.id,
          focusedComponentType: "text"
        });
      }
    }
    if (oldState === State.ACTIVE) {
      this.props.setOnDrag(false);
      if (
        this.props.focusedComponent === this.props.id &&
        this.props.onDeletionArea &&
        this.props.nullComponent
      ) {
        this.props.setFocusedComponent({
          focusedComponent: -1,
          focusedComponentType: "none"
        });
        this.props.setOnDeletionArea(false);
        this.props.nullComponent(this.props.id);
        return;
      }
      this.lastPosition.x += translationX;
      this.lastPosition.y += translationY;
      this.posX.setOffset(this.lastPosition.x);
      this.posY.setOffset(this.lastPosition.y);
      this.posX.setValue(0);
      this.posY.setValue(0);
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
        this.props.focusedComponentType !== "text"
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
        this.props.focusedComponentType !== "text"
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
      if (
        this.props.focusedComponent !== this.props.id ||
        this.props.focusedComponentType !== "text"
      ) {
        this.props.setFocusedComponent({
          focusedComponent: this.props.id,
          focusedComponentType: "text"
        });
      }
    }
  }

  private rootStyle: StyleProp<ViewStyle> = {
    minWidth: this.props.screenWidth / 3,
  }

  private measureRootView = () => {
    this.rootViewRef.current?.measure(
      (_, __, width) => {
        this.setSize(width / this.lastScale);
      }
    );
  }

  private onTextLayout = ({
    nativeEvent: {
      layout: {
        width,
        height
      }
    }
  }: LayoutChangeEvent) => {
    this.setTextShift({
      x: width / 2,
      y: height / 2
    });
  }

  componentDidMount = () => {
    this.posX.setOffset(this.lastPosition.x);
    this.posY.setOffset(this.lastPosition.y);
    this.props.setFocusedComponent({
      focusedComponent: this.props.id,
      focusedComponentType: "text"
    });
    this.props.setTextOnEditState(true);
    this.props.setBottomFloatCurrent("editText");
    this.props.setTopFloatCurrent("editText");
    this.props.setBackgroundShape(this.state.backgroundShape);
    this.props.setColorConsumer(null);
    this.props.setPickedColor(null);
    this.props.setTextAnimationType(this.state.textAnimationType);
    this.props.setFontStyle(this.state.fontStyle);
    this.props.setAnimationInfinite(this.state.animationInfinite);
  }
  
  componentDidUpdate = (prevProps: ErinTextProps) => {
    if (this.state.firstMount && prevProps.textOnEdit && !this.props.textOnEdit) {
      this.props.setCreationPoint({ x: null, y: null });
      this.setFirstMount(false);
    }
    
    if (!this.props.textOnEdit && !this.state.firstMount && this.state.text.length === 0 && this.props.nullComponent) {
      this.props.setCreationPoint({ x: null, y: null });
      this.props.nullComponent(this.props.id);
      this.props.setBottomTabCurrent("default");
      this.props.setTopFloatCurrent("default");
      return;
    }
    
    if (this.props.focusedComponent === this.props.id) {
      
      if (!this.state.focused) {
        this.setFocused(true);
        this.props.setBackgroundShape(this.state.backgroundShape);
        // this.props.setColorConsumer(null);
        this.props.setPickedColor(null);
        this.props.setFontStyle(this.state.fontStyle);
        this.props.setTextAlign(this.state.textAlign);
        this.props.setFontSize(this.state.fontSize);
        this.props.setTextAnimationType(this.state.textAnimationType);
        this.props.setAnimationInfinite(this.state.animationInfinite);
      }

      if (this.props.pickedColor && prevProps.pickedColor !== this.props.pickedColor) {
        if (this.props.colorConsumer === "textFontColor") this.setFontColor(this.props.pickedColor);
        if (this.props.colorConsumer === "textBackgroundColor") this.setBackgroundColor(this.props.pickedColor);
      }

      if (this.props.fontStyle && prevProps.fontStyle !== this.props.fontStyle) {
        this.setFontStyle(this.props.fontStyle);
      }

      if (prevProps.backgroundShape !== this.props.backgroundShape) {
        this.setBackgroundShape(this.props.backgroundShape);
      }

      if ( prevProps.textOnEdit !== this.props.textOnEdit && this.props.textOnEdit ) {
        this.props.setTextContent(this.state.text);
      }

      if ( prevProps.textAlign !== this.props.textAlign ) {
        this.setTextAlign(this.props.textAlign);
      }

      if ( prevProps.fontSize !== this.props.fontSize ) {
        this.setFontSize(this.props.fontSize);
      }

      if ( prevProps.textAnimationType !== this.props.textAnimationType ) {
        this.setAnimationType(this.props.textAnimationType);
      }

      if ( prevProps.animationInfinite !== this.props.animationInfinite ) {
        this.setAnimationInfinite(this.props.animationInfinite)
      }

      if ( prevProps.textContent !== this.props.textContent ) {
        if ( this.props.textContent ) {
          this.setText(this.props.textContent);
        } else {
          this.setText("");
        }
        this.measureRootView();
      }

    } else {
      if (this.state.focused) {
        this.setFocused(false);
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
      <Animated.View 
        ref={this.rootViewRef}
        style={[
          styles.root,
          this.rootStyle,
          {
            transform: 
            [
              { translateX: Animated.add(this.posX, this.state.textShift.x * (-1)) },
              { translateY: Animated.add(this.posY, this.state.textShift.y * (-1)) },
              { scale: this.scale },
              { rotateZ: this.rotationString },
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
                    <GenericAnimationContext.Consumer>
                      {
                        (AnimatedGeneric) => {
                          return <AnimatedGeneric
                            // @ts-ignore
                            // Every types out of generic animation type component will eventually go to default
                            animationType={this.state.textAnimationType}
                          >
                            <BackgroundShape
                              shape={this.state.backgroundShape}
                              size={this.state.size}
                              backgroundColor={this.state.backgroundColor}
                            >
                              <TextAnimationContext.Consumer>
                                {
                                  (AnimatedText) => {
                                    return <AnimatedText 
                                      style={[
                                        {
                                          fontFamily: this.state.fontStyle,
                                          color: this.state.fontColor,
                                          textAlign: this.state.textAlign,
                                          fontSize: this.state.fontSize,
                                        }
                                      ]}
                                      onLayout={this.onTextLayout}
                                      textAnimationType={this.state.textAnimationType}
                                      infinite={this.state.animationInfinite}
                                    >
                                      {this.state.text}
                                    </AnimatedText>
                                  }
                                }
                              </TextAnimationContext.Consumer>
                            </BackgroundShape>
                          </AnimatedGeneric>
                        }
                      }
                    </GenericAnimationContext.Consumer>
                  </Animated.View>
                </TapGestureHandler>
              </Animated.View>
            </PinchGestureHandler>
          </Animated.View>
        </RotationGestureHandler>
      </Animated.View>
    </PanGestureHandler>;
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
    screenWidth: state.screen.screenSpec.width,
    colorConsumer: state.editor.states.colorConsumer,
    backgroundShape: state.editor.states.backgroundShape,
    textContent: state.editor.states.textContent,
    textAlign: state.editor.states.textAlign,
    deletionArea: state.editor.handle.deletionArea,
    onDeletionArea: state.editor.handle.onDeletionArea,
    nullComponent: state.editor.handle.nullComponent,
    onDrag: state.editor.handle.onDrag,
    fontSize: state.editor.states.fontSize,
    textAnimationType: state.editor.states.textAnimationType,
    animationInfinite: state.editor.states.animationInfinite,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setCreationPoint: (payload: SetCreationPointInput) => dispatch(setCreationPoint(payload)),
    setFocusedComponent: (payload: SetFocusedComponentInput) => dispatch(setFocusedComponent(payload)),
    setTextOnEditState: (payload: SetTextOnEditStateInput) => dispatch(setTextOnEditState(payload)),
    setFontStyle: (payload: SetFontStyleStateInput) => dispatch(setFontStyleState(payload)),
    setPickedColor: (payload: SetPickedColorStateInput) => dispatch(setPickedColorState(payload)),
    setColorConsumer: (payload: SetColorConsumerStateInput) => dispatch(setColorConsumerState(payload)),
    setBackgroundShape: (payload: SetBackgroundShapeStateInput) => dispatch(setBackgroundShapeState(payload)),
    setTextContent: (payload: SetTextContentStateInput) => dispatch(setTextContentState(payload)),
    setBottomFloatCurrent: (payload: SetBottomFloatCurrentInput) => dispatch(setBottomFloatCurrent(payload)),
    setTextAlign: (payload: SetTextAlignStateInput) => dispatch(setTextAlignState(payload)),
    setOnDrag: (payload: SetOnDragInput) => dispatch(setOnDrag(payload)),
    setOnDeletionArea: (payload: SetOnDeletionAreaInput) => dispatch(setOnDeletionArea(payload)),
    setTopFloatCurrent: (payload: SetTopFloatCurrentInput) => dispatch(setTopFloatCurrent(payload)),
    setBottomTabCurrent: (payload: SetBottomTabCurrentInput) => dispatch(setBottomTabCurrent(payload)),
    setFontSize: (payload: SetFontSizeStateInput) => dispatch(setFontSizeState(payload)),
    setTextAnimationType: (payload: SetTextAnimationTypeStateInput) => dispatch(setTextAnimationTypeState(payload)),
    setAnimationInfinite: (payload: SetAnimationInfiniteInput) => dispatch(setAnimationInfinite(payload))
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(ErinText);

const styles = StyleSheet.create({
  root: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    padding: 10
  },
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
