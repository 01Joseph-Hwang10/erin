import StickerRenderer from "@components/common/stickers/sticker-renderer";
import { RootState } from "@redux/root-reducer";
import { setTopFloatCurrent, SetTopFloatCurrentInput } from "@slices/editor/editor-generic";
import { 
  setCreationPoint, 
  SetCreationPointInput, 
  setFocusedComponent, 
  SetFocusedComponentInput, 
  setOnDeletionArea, 
  SetOnDeletionAreaInput, 
  setOnDrag, 
  SetOnDragInput 
} from "@slices/editor/editor-handle";
import { 
  setAnimationInfiniteState, 
  SetAnimationInfiniteStateInput, 
  setStickerAnimationTypeState, 
  SetStickerAnimationTypeStateInput, 
  setStickerIdState, 
  SetStickerIdStateInput 
} from "@slices/editor/editor-states";
import { RectSpecType } from "@slices/screen";
import { Erin } from "erin";
import React, { Component } from "react";
import { StyleSheet, Animated, View, Platform } from "react-native";
import { 
  PanGestureHandler, 
  PanGestureHandlerGestureEvent, 
  PanGestureHandlerStateChangeEvent, 
  PinchGestureHandler,
  PinchGestureHandlerGestureEvent, 
  PinchGestureHandlerStateChangeEvent, 
  RotationGestureHandler, 
  RotationGestureHandlerGestureEvent, 
  RotationGestureHandlerStateChangeEvent, 
  State, 
  TapGestureHandler, 
  TapGestureHandlerStateChangeEvent 
} from "react-native-gesture-handler";
import { connect, ConnectedProps } from "react-redux";
import { Dispatch } from "redux";
import GenericAnimationContext from "../../../../context/generic-animation-context";
import { decideHover } from "../text/text.function";
import { BASE_SCALE } from "./constants";
import { StickerScaleContext } from "../../../../context/sticker-scale-context";

type StickerReduxProps = ConnectedProps<typeof connector>

interface StickerProps extends StickerReduxProps {
  id: number,
  zIndex: number,
}

type Collider = RectSpecType & { 
  androidAdjustmentFactorX: number, 
  androidAdjustmentFactorY: number, 
  halfWidth: number, 
  halfHeight: number 
};

interface StickerState {
  stickerAnimationType: Erin.Common.StickerAnimationTypes,
  animationInfinite: boolean,
  zIndex: number,
  stickerId: string | null,
  focused: boolean,
  androidScale: number,
  collider: Collider,
  iosInitialScale: number
}

class Sticker extends Component<StickerProps> {

  public state: StickerState = {
    stickerAnimationType: "none",
    animationInfinite: true,
    zIndex: 1,
    stickerId: null,
    focused: false,
    androidScale: 1,
    collider: { 
      width: 0, 
      height: 0, 
      androidAdjustmentFactorX: 0, 
      androidAdjustmentFactorY: 0, 
      halfWidth: 0, 
      halfHeight: 0 
    },
    iosInitialScale: BASE_SCALE
  }

  private setAnimationType: (textAnimationType: Erin.Common.TextAnimationTypes) => void;
  private setAnimationInfinite: (animationInfinite: boolean) => void;
  private setZIndex: (zIndex: number) => void;
  private setStickerId: (stickerId: string) => void;
  private setFocused: (focused: boolean) => void;
  private setAndroidScale: (androidScale: number) => void;
  private setCollider: (collider: Collider) => void;

  private stickerWrapperViewRef = React.createRef<View>();
  private tapHandlerRef = React.createRef<TapGestureHandler>();
  private panHandlerRef = React.createRef<PanGestureHandler>();
  private pinchHandlerRef = React.createRef<PinchGestureHandler>();
  private rotationHandlerRef = React.createRef<RotationGestureHandler>();

  private period = 2 * Math.PI;
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

  constructor(props: StickerProps) {
    super(props);
    // state
    this.setAnimationType = ( textAnimationType ) => this.setState({ textAnimationType });
    this.setAnimationInfinite = ( animationInfinite ) => this.setState({ animationInfinite });
    this.setZIndex = ( zIndex ) => this.setState({ zIndex });
    this.setStickerId = ( stickerId ) => this.setState({ stickerId });
    this.setFocused = ( focused ) => this.setState({ focused });
    this.setAndroidScale = ( androidScale ) => this.setState({ androidScale });
    this.setCollider = ( collider ) => this.setState({ collider });

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
    this.baseScale = new Animated.Value(Platform.OS === "android" ? BASE_SCALE : 1);
    this.pinchScale = new Animated.Value(1);
    this.scale = Animated.multiply( this.baseScale, this.pinchScale );
    this.lastScale = Platform.OS === "android" ? BASE_SCALE : 1;
    this.onPinchGestureEvent = Animated.event(
      [
        { nativeEvent: 
          { scale: this.pinchScale } 
        }
      ],
      { 
        useNativeDriver: true ,
        listener: ({
          nativeEvent: {
            scale,
          }
        }: PinchGestureHandlerGestureEvent) => {
          if (Platform.OS === "android") {
            this.setAndroidScale(scale);
          }
        }
      }
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
        this.props.focusedComponentType !== "sticker"
      ) {
        this.props.setFocusedComponent({
          focusedComponent: this.props.id,
          focusedComponentType: "sticker"
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
        this.props.focusedComponentType !== "sticker"
      ) {
        this.props.setFocusedComponent({
          focusedComponent: this.props.id,
          focusedComponentType: "sticker"
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
        scale,
      }
    }: PinchGestureHandlerStateChangeEvent
  ) => {
    if (oldState === State.ACTIVE) {
      if (
        this.props.focusedComponent !== this.props.id ||
        this.props.focusedComponentType !== "sticker"
      ) {
        this.props.setFocusedComponent({
          focusedComponent: this.props.id,
          focusedComponentType: "sticker"
        });
      }
      this.lastScale *= scale;
      this.baseScale.setValue(this.lastScale);
      this.pinchScale.setValue(1);
      if (Platform.OS === "android") {
        this.setAndroidScale(1);
      }
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
        this.props.focusedComponentType !== "sticker"
      ) {
        this.props.setFocusedComponent({
          focusedComponent: this.props.id,
          focusedComponentType: "sticker"
        });
      }
    }
  }

  private onStickerWrapperViewLayout = () => {
    this.stickerWrapperViewRef.current?.measure(
      (_, __, width, height) => {
        if (
          !this.state.collider.width ||
          !this.state.collider.height
        ) {
          this.setCollider({ 
            width, 
            height, 
            androidAdjustmentFactorX: width / ( 2 * BASE_SCALE ), 
            androidAdjustmentFactorY: height / ( 4 * BASE_SCALE ), 
            halfWidth: width / 2, 
            halfHeight: height / 2 
          });
        }
      }
    );
  }
    
    componentDidMount = () => {
      this.props.setFocusedComponent({
        focusedComponent: this.props.id,
        focusedComponentType: "sticker"
      });
      // this.props.setTopFloatCurrent("editText");
      this.props.setStickerAnimtionType(this.state.stickerAnimationType);
      this.props.setAnimationInfinite(this.state.animationInfinite);
      this.setZIndex(this.props.zIndex);
      if (this.props.stickerId) {
        this.setStickerId(this.props.stickerId);
      }
      this.props.setCreationPoint({ x: null, y: null });
    }
  
  componentDidUpdate = (prevProps: StickerProps, prevState: StickerState) => {

    if (
      prevState.collider.width === 0 && 
      prevState.collider.height === 0 && 
      this.state.collider.width &&
      this.state.collider.height
    ) {
      this.posX.setOffset(this.lastPosition.x);
      this.posY.setOffset(this.lastPosition.y); 
    }

    if (this.props.focusedComponent === this.props.id) {
      
      if (!this.state.focused) {
        this.props.setCreationPoint({ x: null, y: null });
        this.setFocused(true);
        this.props.setStickerAnimtionType(this.state.stickerAnimationType);
        this.props.setAnimationInfinite(this.state.animationInfinite);
      }

      if (prevProps.stickerAnimationType !== this.props.stickerAnimationType) {
        this.setAnimationType(this.props.stickerAnimationType);
      }

      if (prevProps.animationInfinite !== this.props.animationInfinite) {
        this.setAnimationInfinite(this.props.animationInfinite);
      }

    } else {
      if (this.state.focused) {
        this.setFocused(false);
      }
    }
  }

  render(): React.ReactNode {

    return (
      <PanGestureHandler
        onGestureEvent={this.onPanGestureEvent}
        onHandlerStateChange={this.onPanHandlerStateChange}
        ref={this.panHandlerRef}
        simultaneousHandlers={[
          this.rotationHandlerRef,
          this.pinchHandlerRef,
          this.tapHandlerRef,
        ]}
        minPointers={1}
        maxPointers={1}
        avgTouches={true}
      >
        <Animated.View
          style={[
            styles.root,
            styles.wrapper,
            {
              transform: Platform.OS === "android" ?
                [
                  { translateX: this.posX },
                  { translateY: this.posY },
                  { translateX: Animated.multiply(-this.state.collider.androidAdjustmentFactorX, this.scale) },
                  { translateY: Animated.multiply(-this.state.collider.androidAdjustmentFactorY, this.scale) },
                ] :
                [
                  { translateX: Animated.subtract(this.posX, this.state.collider.halfWidth) },
                  { translateY: Animated.subtract(this.posY, this.state.collider.halfHeight) },
                ]
              ,
              zIndex: this.state.zIndex
            }
          ]}
        >
          <RotationGestureHandler
            onGestureEvent={this.onRotateGestureEvent}
            onHandlerStateChange={this.onRotateHandlerStateChange}
            ref={this.rotationHandlerRef}
            simultaneousHandlers={[
              this.panHandlerRef,
              this.pinchHandlerRef,
              this.tapHandlerRef,
            ]}
            minPointers={2}
          >
            <Animated.View 
              style={[
                styles.wrapper,
                {
                  transform: [
                    { rotateZ: this.rotationString },
                  ]
                }
              ]}
            >
              <PinchGestureHandler
                onGestureEvent={this.onPinchGestureEvent}
                onHandlerStateChange={this.onPinchHandlerStateChange}
                ref={this.pinchHandlerRef}
                simultaneousHandlers={[
                  this.panHandlerRef,
                  this.rotationHandlerRef,
                  this.tapHandlerRef
                ]}
                minPointers={2}
              >
                <Animated.View 
                  style={[
                    styles.wrapper,
                    {
                      transform: [
                        { scale: Platform.OS !== "android" ? this.scale : 1 },
                      ]
                    }
                  ]}
                >
                  <TapGestureHandler
                    onHandlerStateChange={this.onTapHandlerStateChange}
                    ref={this.tapHandlerRef}
                    simultaneousHandlers={[
                      this.panHandlerRef,
                      this.rotationHandlerRef,
                      this.pinchHandlerRef,
                    ]}
                    minPointers={1}
                  >
                    <Animated.View 
                      style={styles.wrapper}
                    >
                      <View 
                        style={[
                          styles.wrapper, 
                          styles.flexRow,
                          {
                            opacity: this.state.collider.width && this.state.collider.height ? 1 : 0
                          }
                        ]}
                        ref={this.stickerWrapperViewRef}
                        onLayout={this.onStickerWrapperViewLayout}
                      >
                        <StickerScaleContext.Provider value={Platform.OS !== "android" ? this.state.iosInitialScale : this.state.androidScale * this.lastScale}>
                          <StickerRenderer 
                            stickerId={this.state.stickerId}
                          />
                        </StickerScaleContext.Provider>
                      </View>
                    </Animated.View>
                  </TapGestureHandler>
                </Animated.View>
              </PinchGestureHandler>
            </Animated.View>
          </RotationGestureHandler>
        </Animated.View>
      </PanGestureHandler>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  stickerId: state.editor.states.stickerId,
  creationPoint: state.editor.handle.creationPoint,
  focusedComponent: state.editor.handle.focusedComponent,
  focusedComponentType: state.editor.handle.focusedComponentType,
  onDrag: state.editor.handle.onDrag,
  onDeletionArea: state.editor.handle.onDeletionArea,
  deletionArea: state.editor.handle.deletionArea,
  nullComponent: state.editor.handle.nullComponent,
  stickerAnimationType: state.editor.states.stickerAnimationType,
  animationInfinite: state.editor.states.animationInfinite,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setStickerId: (payload: SetStickerIdStateInput) => dispatch(setStickerIdState(payload)),
  setOnDrag: (payload: SetOnDragInput) => dispatch(setOnDrag(payload)),
  setOnDeletionArea: (payload: SetOnDeletionAreaInput) => dispatch(setOnDeletionArea(payload)),
  setFocusedComponent: (payload: SetFocusedComponentInput) => dispatch(setFocusedComponent(payload)),
  setTopFloatCurrent: (payload: SetTopFloatCurrentInput) => dispatch(setTopFloatCurrent(payload)),
  setStickerAnimtionType: (payload: SetStickerAnimationTypeStateInput) => dispatch(setStickerAnimationTypeState(payload)),
  setAnimationInfinite: (payload: SetAnimationInfiniteStateInput) => dispatch(setAnimationInfiniteState(payload)),
  setCreationPoint: (payload: SetCreationPointInput) => dispatch(setCreationPoint(payload)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(Sticker);

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
  virtualStickerCover: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: 2
  },
  flexRow: {
    flexDirection: "row"
  }
});
