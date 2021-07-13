import React from "react";
import { RootState } from "../../../../redux/root-reducer";
import { connect, ConnectedProps } from "react-redux";
import { BOTTOM_MARGIN, ICON_COLOR } from "../../base/constants";
import { Feather } from "@expo/vector-icons";
import { StyleSheet, View, ViewStyle } from "react-native";
import { Dispatch } from "redux";
import { setDeletionArea, SetDeletionAreaInput } from "@slices/editor/editor-handle";
import { useRef } from "react";
import { useEffect } from "react";
import { LinearGradient } from 'expo-linear-gradient'
import { useState } from "react";
import { StyleProp } from "react-native";

type DeleteComponentReduxProps = ConnectedProps<typeof connector>

interface DeleteComponentProps extends DeleteComponentReduxProps {}

const onHoverScale = 1.2

const DeleteComponent: React.FC<DeleteComponentProps> = ({
  iconSize,
  setDeletionArea: SetDeletionArea,
  onDeletionArea,
  onDrag,
  screenWidth
}) => {

  const [padding, setPadding] = useState<number[]>([0, 0])

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
      if (!padding[0] || !padding[1]) {
        setPadding([
          (1 - ( iconSize / screenWidth )) * 50,
          (1 - ( (iconSize * onHoverScale) / screenWidth )) * 50,
        ])
      }
    },
    []
  );

  const wrapperStyle: StyleProp<ViewStyle> = {
    paddingHorizontal: onDeletionArea && onDrag ? `${padding[1]}%` : `${padding[0]}%`,
    height: iconSize + BOTTOM_MARGIN * 2
  }

  return (
    <View 
        style={[styles.root, styles.center]}
        ref={rootViewRef}
        onLayout={onRootViewLayout}
      >
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.3)']}
      >
        <View style={[styles.center, wrapperStyle]}>
          <Feather name="x-circle" 
            size={onDeletionArea && onDrag ? iconSize * onHoverScale : iconSize} 
            color={ICON_COLOR} 
          />
        </View>
      </LinearGradient>
    </View>
  )
};

const mapStateToProps = (state: RootState) => {
  return {
    iconSize: state.editor.generic.settings.iconSize,
    onDeletionArea: state.editor.handle.onDeletionArea,
    onDrag: state.editor.handle.onDrag,
    screenWidth: state.screen.screenSpec.width
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setDeletionArea: (payload: SetDeletionAreaInput) => dispatch(setDeletionArea(payload)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(DeleteComponent);


const styles = StyleSheet.create({
  root: {
    width: '100%',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
