import React from "react";
import { FlatList } from "react-native-gesture-handler";
import PressButton from "@components/editor/base/press-button";
import CircularFrame from "@components/common/circular-frame";
import { RootState } from "@redux/root-reducer";
import { connect, ConnectedProps } from "react-redux";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { Dispatch } from "redux";
import { setPickedColorState, SetPickedColorStateInput } from "@slices/editor/editor-states";
import { useEffect } from "react";
import { basicColors, NamedColors } from "@src/color-palette";
import { BOTTOM_MARGIN } from "@components/editor/base/constants";

type PickedColorListReduxProps = ConnectedProps<typeof connector>

interface PickedColorListProps extends PickedColorListReduxProps {}

const PickedColorList: React.FC<PickedColorListProps> = ({
  settings: {
    iconSize,
    iconGap
  },
  setPickedColorState: SetPickedColorState,
}) => {

  const floatIconSize = iconSize * (2/3);
  const floatIconGap = iconGap * (3/4);

  const renderItem = ({ item: color }: { item: NamedColors | string }) => {

    const wrapperStyle: StyleProp<ViewStyle> = {
      marginHorizontal: floatIconGap
    };

    const FontPreview = () => (
      <CircularFrame
        size={floatIconSize}
        border={true}
        borderColor={"grey"}
        borderWidth={2}
        backgroundColor={color}
        shadow={false}
        // shadowLevel={45}
        style={wrapperStyle}
      ></CircularFrame>
    );

    const onPress = () => {
      SetPickedColorState(color);
    };

    return <PressButton 
      onPress={onPress}
      icon={FontPreview}
    />;
  };

  const keyExtractor = (_: string, index: number) => index.toString();

  useEffect(() => {
    return () => {
      SetPickedColorState(null);
    };
  }, []);

  return <FlatList 
    horizontal={true}
    data={basicColors}
    renderItem={renderItem}
    keyExtractor={keyExtractor}
    style={styles.root}
    scrollEnabled={true}
  />;
};

const mapStateToProps = (state: RootState) => {
  return {
    settings: state.editor.generic.settings,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setPickedColorState: (payload: SetPickedColorStateInput) => dispatch(setPickedColorState(payload))
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(PickedColorList);

const styles = StyleSheet.create({
  root: {
    paddingVertical: BOTTOM_MARGIN,
    zIndex: 9999
  }
});
