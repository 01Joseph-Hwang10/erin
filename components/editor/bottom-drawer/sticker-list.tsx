import { stickerIds } from "@components/common/stickers/constants";
import StickerRenderer from "@components/common/stickers/sticker-renderer";
import React from "react";
import { StyleSheet } from "react-native";
import { FlatList, ListRenderItem, View } from "react-native";
import StickerButton from "./sticker-list/sticker-button";


const renderItem: ListRenderItem<string> = ({ item: stickerId }) => (
  <StickerButton
    stickerId={stickerId}
  >
    <StickerRenderer stickerId={stickerId} />
  </StickerButton>
);

const Divider = () => (
  <View style={styles.divider}></View>
);

const keyExtractor = (item: string) => item;

const StickerList: React.FC = () => {
  return <FlatList 
    data={stickerIds}
    renderItem={renderItem}
    ItemSeparatorComponent={Divider}
    horizontal={false}
    numColumns={3}
    keyExtractor={keyExtractor}
    ListFooterComponent={Divider}
    contentContainerStyle={styles.contentContainer}
    style={styles.root}
  />;
};

export default StickerList;

const styles = StyleSheet.create({
  divider: {
    width: 10,
    height: 10
  },
  root: {
    width: "100%"
  },
  contentContainer: {
    justifyContent: "flex-start",
    alignContent: "space-between"
  }
});
