import React from "react";
import { RootState } from "../../../../redux/root-reducer";
import { connect, ConnectedProps } from "react-redux";
import { BOTTOM_MARGIN, ICON_COLOR } from "../../base/constants";
import { Feather } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import { Dispatch } from "redux";
import { setDeletionArea, SetDeletionAreaInput } from "@slices/editor/editor-handle";
import { useRef } from "react";
import { useEffect } from "react";
import { LinearGradient } from 'expo-linear-gradient'

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

  return <LinearGradient
    colors={['rgba(0,0,0,0.8)', 'transparent']}
  >
    <View 
      style={styles.root}
      ref={rootViewRef}
      onLayout={onRootViewLayout}
    >
      <Feather name="x-circle" size={onDeletionArea && onDrag ? iconSize * 1.2 : iconSize} color={ICON_COLOR} />
    </View>;
  </LinearGradient>
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
