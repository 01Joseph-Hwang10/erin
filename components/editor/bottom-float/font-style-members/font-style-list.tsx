import fontStyle, { FontStyles } from "./font-style.data";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import PressButton from "@components/editor/base/press-button";
import CircularFrame from "@components/common/circular-frame";
import { RootState } from "@redux/root-reducer";
import { connect, ConnectedProps } from "react-redux";
import { StyleProp, TextStyle, Text, ViewStyle, StyleSheet } from "react-native";
import { Dispatch } from "redux";
import { setFontStyleState, SetFontStyleStateInput } from "@slices/editor/editor-states";
import { useEffect } from "react";
import { BOTTOM_MARGIN } from "@components/editor/base/constants";

type FontStyleListReduxProps = ConnectedProps<typeof connector>

interface FontStyleListProps extends FontStyleListReduxProps {}

const FontStyleList: React.FC<FontStyleListProps> = ({
  settings: {
    iconSize: floatIconSize,
    iconGap: floatIconGap,
  },
  setFontStyleState: SetFontStyleState
}) => {

  // const floatIconSize = iconSize * (2/3);
  // const floatIconGap = iconGap * (3/4);

  const renderItem = ({ item: font }: { item: FontStyles }) => {

    const textStyle: StyleProp<TextStyle> = {
      fontFamily: font,
      fontSize: floatIconSize / 2,
    };
    
    const wrapperStyle: StyleProp<ViewStyle> = {
      marginHorizontal: floatIconGap
    };

    const FontPreview = () => (
      <CircularFrame
        size={floatIconSize}
        border={true}
        borderColor={"white"}
        borderWidth={2}
        backgroundColor={"transparent"}
        shadow={false}
        // shadowLevel={45}
        style={wrapperStyle}
      >
        <Text style={textStyle}>가</Text>
      </CircularFrame>
    );

    const onPress = () => {
      SetFontStyleState(font);
    };

    return <PressButton 
      onPress={onPress}
      icon={FontPreview}
    />;
  };

  const keyExtractor = (_: string, index: number) => index.toString();

  useEffect(() => {
    return () => {
      SetFontStyleState(null);
    };
  }, []);

  return <FlatList 
    horizontal={true}
    data={fontStyle}
    renderItem={renderItem}
    keyExtractor={keyExtractor}
    style={styles.root}
    scrollEnabled={true}
  />;
};

const mapStateToProps = (state: RootState) => {
  return {
    settings: state.editor.generic.settings
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setFontStyleState: (payload: SetFontStyleStateInput) => dispatch(setFontStyleState(payload))
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(FontStyleList);

const styles = StyleSheet.create({
  root: {
    paddingVertical: BOTTOM_MARGIN,
    zIndex: 9999
  }
});
