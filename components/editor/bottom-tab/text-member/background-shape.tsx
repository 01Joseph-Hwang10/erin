import React from "react";
import SwitchButton, { SwitchButton as SwitchButtonComponent } from "../../base/switch-button";
import { RootState } from "../../../../redux/root-reducer";
import { connect, ConnectedProps } from "react-redux";
import { Dispatch } from "redux";
import { toggleBackgroundShapeState } from "@slices/editor/editor-states";
import { shapeToIndex } from "./background-shape.function";
import { AntDesign } from "@expo/vector-icons";
import { textBackgroundShapes } from "./background-shape.data";
import { setBottomFloatCurrent, SetBottomFloatCurrentInput } from "@slices/editor/editor-generic";

type ShapeReduxProps = ConnectedProps<typeof connector>

interface ShapeProps extends ShapeReduxProps {}

const iconColor = "white";

class Shape extends React.Component<ShapeProps> {

  private icon = () => (
    <AntDesign size={this.props.iconSize} color={iconColor} name="star" />
  );

  private buttonRef = React.createRef<SwitchButtonComponent>()

  private onPress = () => {
    if (this.props.bottomFloatCurrent !== "none") {
      this.props.setBottomFloatCurrent("none");
    }
    this.props.toggleBackgroundShape();
    this.buttonRef.current?.toggleItem();
  };

  private setShapeItemIndex = () => {
    this.buttonRef.current?.setItemIndex(
      shapeToIndex(
        this.props.backgroundShape
      )
    );
  }

  componentDidMount = () => {
    this.setShapeItemIndex();
  }

  componentDidUpdate = (prevProps: ShapeProps) => {
    if ( prevProps.backgroundShape !== this.props.backgroundShape ) {
      this.setShapeItemIndex();
    }
  }

  render = (): React.ReactNode => {
    return <SwitchButton 
      ref={this.buttonRef}
      onPress={this.onPress}
      icon={this.icon}
      itemKeys={textBackgroundShapes}
    />;
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    iconSize: state.editor.generic.settings.iconSize,
    backgroundShape: state.editor.states.backgroundShape,
    bottomFloatCurrent: state.editor.generic.bottomFloatCurrent
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  toggleBackgroundShape: () => dispatch(toggleBackgroundShapeState()),
  setBottomFloatCurrent: (payload: SetBottomFloatCurrentInput) => dispatch(setBottomFloatCurrent(payload))
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(Shape);
