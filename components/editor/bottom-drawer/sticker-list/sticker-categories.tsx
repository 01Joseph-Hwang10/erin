import { camelCaseToUpperSnakeCase } from "@src/functions";
import { Erin } from "erin";
import React from "react";
import { StyleSheet } from "react-native";
import { ListRenderItem } from "react-native";
import { FlatList } from "react-native";
import { View } from "react-native";
import CategoryButton from "./category-button";
import { stickerCategories } from "./sticker-list.data";


const renderItem: ListRenderItem<Erin.Common.StickerCategories> = ({ item: stickerCategory }) => 
  <CategoryButton
    backgroundColor={stickerCategories[stickerCategory][0]}
    fontColor={stickerCategories[stickerCategory][1]}
    category={stickerCategory}
  >
    {`#${camelCaseToUpperSnakeCase(stickerCategory)}`}
  </CategoryButton>;

const keyExtractor = (_: string, index: number) => index.toString();

const Divider = () => <View style={styles.divier}></View>;

const stickerCategoryKeys = Object.keys(stickerCategories) as Erin.Common.StickerCategories[];

const StickerCategories: React.FC = () => {
  return (
    <FlatList 
      data={stickerCategoryKeys}
      renderItem={renderItem}
      horizontal={true}
      keyExtractor={keyExtractor}
      ItemSeparatorComponent={Divider}
      ListFooterComponent={Divider}
      ListHeaderComponent={Divider}
      style={styles.root}
    />
  );
};

export default StickerCategories;

const styles = StyleSheet.create({
  divier: {
    width: 10,
    height: 1
  },
  root: {
    paddingBottom: 10
  }
});
