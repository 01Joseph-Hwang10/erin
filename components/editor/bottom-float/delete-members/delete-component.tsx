import React from "react";
import { RootState } from "../../../../redux/root-reducer";
import { connect, ConnectedProps } from "react-redux";
import { BOTTOM_MARGIN, ICON_COLOR, returnShadowProps } from "../../base/constants";
import { Feather } from "@expo/vector-icons";
import { StyleSheet, View, ViewStyle } from "react-native";
import { StyleProp } from "react-native";
import { Dispatch } from "redux";
import { setDeletionArea, SetDeletionAreaInput } from "@slices/editor/editor-handle";
import { useRef } from "react";
import { useDerivedValue, withTiming } from "react-native-reanimated";
import { Easing } from "react-native-reanimated";
import { useAnimatedProps } from "react-native-reanimated";
import { useEffect } from "react";
import COLORS from "@src/colors";

type DeleteComponentReduxProps = ConnectedProps<typeof connector>

interface DeleteComponentProps extends DeleteComponentReduxProps {}

const DeleteComponent: React.FC<DeleteComponentProps> = ({
  iconSize,
  setDeletionArea: SetDeletionArea,
  onDeletionArea,
  focusedComponent,
  nullComponent,
  onDrag,
}) => {

  const shadowStyle: StyleProp<ViewStyle> = returnShadowProps(45);

  const rootViewRef = useRef<View>(null);
  const onRootViewLayout = () => {
    rootViewRef.current?.measure(
      (_, __, width, height, pageX, pageY) => {
        SetDeletionArea({
          xmin: pageX,
          xmax: pageX + width,
          ymin: pageY,
          ymax: pageY + height
        });
      }
    );
  };

  useEffect(
    () => {
      if ( onDeletionArea && !onDrag && nullComponent ) {
        nullComponent(focusedComponent);
      }
    },
    [onDeletionArea, onDrag]
  );

  return <View 
    style={[styles.root, shadowStyle]}
    ref={rootViewRef}
    onLayout={onRootViewLayout}
  >
    <Feather name="x-circle" size={iconSize} color={onDeletionArea && onDrag ? COLORS.DARK.highlight : COLORS.DARK.sharp} />
  </View>;
};

const mapStateToProps = (state: RootState) => {
  return {
    iconSize: state.editor.generic.settings.iconSize,
    onDeletionArea: state.editor.handle.onDeletionArea,
    focusedComponent: state.editor.handle.focusedComponent,
    nullComponent: state.editor.handle.nullComponent,
    onDrag: state.editor.handle.onDrag
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setDeletionArea: (payload: SetDeletionAreaInput) => dispatch(setDeletionArea(payload)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(DeleteComponent);


const styles = StyleSheet.create({
  root: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: BOTTOM_MARGIN,
    borderWidth: 1,
    borderColor: "transparent"
  },
});
