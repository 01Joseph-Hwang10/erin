import fontStyle from "./font-style.data";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import PressButton from "@components/editor/base/press-button";
import CircularFrame from "@components/common/circular-frame";
import { RootState } from "@redux/root-reducer";
import { connect, ConnectedProps } from "react-redux";
import { StyleProp, TextStyle, Text } from "react-native";

type FontStyleListReduxProps = ConnectedProps<typeof connector>

interface FontStyleListProps extends FontStyleListReduxProps {}

const FontStyleList: React.FC<FontStyleListProps> = ({
  settings: {
    iconSize,
    iconGap
  }
}) => {

  const floatIconSize = iconSize * (2/3);
  const floatIconGap = iconGap * (3/4);

  const renderItem = ({ item: font }: { item: string }) => {

    const textStyle: StyleProp<TextStyle> = {
      fontFamily: font,
      fontSize: floatIconSize / 2,
      marginHorizontal: floatIconGap
    };

    const FontPreview = () => (
      <CircularFrame
        size={floatIconSize}
        border={true}
        borderColor={"grey"}
        borderWidth={2}
        backgroundColor={"purple"}
        shadow={true}
        shadowLevel={45}
      >
        <Text style={textStyle}>가</Text>
      </CircularFrame>
    );

    const onPress = () => {
      // pass
    };

    return <PressButton 
      onPress={onPress}
      icon={FontPreview}
    />;
  };

  const keyExtractor = (_: string, index: number) => index.toString();

  return <FlatList 
    horizontal={true}
    data={fontStyle}
    renderItem={renderItem}
    keyExtractor={keyExtractor}
  />;
};

const mapStateToProps = (state: RootState) => {
  return {
    settings: state.editor.generic.settings
  };
};

const connector = connect(mapStateToProps, {});

export default connector(FontStyleList);
