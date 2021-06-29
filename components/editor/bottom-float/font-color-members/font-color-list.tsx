import React from "react";
import { FlatList } from "react-native-gesture-handler";
import PressButton from "@components/editor/base/press-button";
import CircularFrame from "@components/common/circular-frame";
import { RootState } from "@redux/root-reducer";
import { connect, ConnectedProps } from "react-redux";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { Dispatch } from "redux";
import { setFontColorState, SetFontColorStateInput } from "@slices/editor/editor-states";
import { useEffect } from "react";
import { basicColors, NamedColors } from "@src/color-palette";
import { BOTTOM_MARGIN } from "@components/editor/base/constants";

type FontColorListReduxProps = ConnectedProps<typeof connector>

interface FontColorListProps extends FontColorListReduxProps {}

const FontColorList: React.FC<FontColorListProps> = ({
  settings: {
    iconSize,
    iconGap
  },
  setFontColorState: SetFontColorState
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
        shadow={true}
        shadowLevel={45}
        style={wrapperStyle}
      ></CircularFrame>
    );

    const onPress = () => {
      SetFontColorState(color);
    };

    return <PressButton 
      onPress={onPress}
      icon={FontPreview}
    />;
  };

  const keyExtractor = (_: string, index: number) => index.toString();

  useEffect(() => {
    return () => {
      SetFontColorState(null);
    };
  }, []);

  return <FlatList 
    horizontal={true}
    data={basicColors}
    renderItem={renderItem}
    keyExtractor={keyExtractor}
    style={styles.root}
  />;
};

const mapStateToProps = (state: RootState) => {
  return {
    settings: state.editor.generic.settings,

  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setFontColorState: (payload: SetFontColorStateInput) => dispatch(setFontColorState(payload))
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(FontColorList);

const styles = StyleSheet.create({
  root: {
    paddingBottom: BOTTOM_MARGIN,
    width: "100%"
  }
});
