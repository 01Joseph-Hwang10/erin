import { RootState } from '@redux/root-reducer'
import { NamedColors } from '@src/color-palette'
import React, { Component } from 'react'
import { StyleProp, StyleSheet, ViewStyle } from 'react-native'
import { View, Animated } from 'react-native'
import { PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler'
import { connect, ConnectedProps } from 'react-redux'

type SliderReduxProps = ConnectedProps<typeof connector>

interface SliderProps extends SliderReduxProps {
    width: number | string,
    height: number | string,
    primaryColor: NamedColors | string,
    secondaryColor: NamedColors | string,
    primaryStyle?: StyleProp<ViewStyle>,
    secondaryStyle?: StyleProp<ViewStyle>,
    minimumValue: number,
    maximumValue: number,
    value: number,
    onValueChange?: (value: number) => void
}

interface SliderState {
    sliderStart: number,
    sliderWidth: number,
    measured: boolean,
}

class Slider extends Component<SliderProps, SliderState> {

    public state: SliderState = {
        sliderStart: 0,
        sliderWidth: 0,
        measured: false,
    }

    private setSliderStart: ( sliderStart: number ) => void;
    private setSliderWidth: ( sliderWidth: number ) => void;
    private setMeasured: ( measured: boolean ) => void;

    private primaryRef = React.createRef<View>();
    private position: Animated.Value;
    private onPanGestureEvent: (event: PanGestureHandlerGestureEvent) => void;

    constructor(props: SliderProps) {
        super(props);
        
        this.position = new Animated.Value(0);
        this.onPanGestureEvent = Animated.event(
            [{ nativeEvent: 
                { absoluteX: this.position }
            }],
            {
                useNativeDriver: false,
                listener: ({
                    nativeEvent: {
                        absoluteX
                    }
                }: PanGestureHandlerGestureEvent) => {
                    if (
                        this.props.onValueChange && 
                        this.state.sliderStart && 
                        this.state.sliderWidth
                    ) {
                        this.props.onValueChange(
                            (
                                (absoluteX - this.state.sliderStart) / this.state.sliderWidth
                            ) * ( this.props.maximumValue - this.props.minimumValue )
                            + this.props.minimumValue
                        )
                    }
                }
            }
        )

        this.setSliderStart = ( sliderStart ) => {
            this.setState({ sliderStart })
        }
        this.setSliderWidth = ( sliderWidth ) => {
            this.setState({ sliderWidth })
        }
        this.setMeasured = ( measured ) => {
            this.setState({ measured })
        }
    }

    private primaryStyle: StyleProp<ViewStyle> = {
        width: this.props.width,
        height: this.props.height,
        backgroundColor: this.props.primaryColor
    }

    private secondaryStyle: StyleProp<ViewStyle> = {
        height: this.props.height,
        backgroundColor: this.props.secondaryColor
    }

    private setInitialOffset = () => {
        if (
            this.props.value > this.props.minimumValue &&
            this.props.value < this.props.maximumValue
        ) {
            this.position.setValue(
                (
                    this.props.value - this.state.sliderStart
                ) * this.state.sliderWidth / ( this.props.maximumValue - this.props.minimumValue )
            )
        }
    }

    private onPrimaryLayout = () => {
        this.primaryRef.current?.measure(
            (_, __, width, ___, pageX) => {
                this.setSliderStart(pageX)
                this.setSliderWidth(width)
            }
        )
    }

    componentDidUpdate = (prevProps: SliderProps) => {
        if (
            !this.state.measured &&
            this.state.sliderStart &&
            this.state.sliderWidth 
        ) {
            this.setMeasured(true)
            this.setInitialOffset();
        }

        if ( 
            prevProps.focusedComponent !== this.props.focusedComponent &&
            prevProps.value !== this.props.value
        ) {
            this.setInitialOffset();
        }
    }

    render() {
        return (
            <PanGestureHandler
                onGestureEvent={this.onPanGestureEvent}
            >
                <Animated.View 
                    style={[styles.primary, this.primaryStyle, this.props.primaryStyle]}
                    ref={this.primaryRef}
                    onLayout={this.onPrimaryLayout}
                >
                    <Animated.View
                        style={[
                            this.secondaryStyle, 
                            this.props.secondaryStyle,
                            {
                                width: Animated.add(this.position, -this.state.sliderStart)
                            }
                        ]}
                    ></Animated.View>
                </Animated.View>
            </PanGestureHandler>
        )
    }
}

const mapStateToProps = (state: RootState) => ({
    focusedComponent: state.editor.handle.focusedComponent
})

const connector = connect(mapStateToProps)

export default connector(Slider)

const styles = StyleSheet.create({
    primary: {
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        overflow: 'hidden'
    }
})
