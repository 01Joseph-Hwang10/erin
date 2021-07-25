import { stickerIds } from "@components/common/stickers/sticker-renderer.data";
import StickerRenderer from "@components/common/stickers/sticker-renderer";
import React from "react";
import { StyleSheet } from "react-native";
import { FlatList, ListRenderItem, View } from "react-native";
import StickerButton from "./sticker-list/sticker-button";
import { SvgProps } from "react-native-svg";
import { RootState } from "@redux/root-reducer";
import { connect, ConnectedProps } from "react-redux";



const Divider = () => (
  <View style={styles.divider}></View>
);
  
const keyExtractor = (item: string) => item;

type StickerListReduxProps = ConnectedProps<typeof connector>

interface StickerListProps extends StickerListReduxProps {}
  
const StickerList: React.FC<StickerListProps> = ({
  screenWidth
}) => {

  const svgProps: SvgProps = {
    preserveAspectRatio: "xMidyMid meet",
    style: {
      justifyContent: "center",
      alignItems: "center",
    },
  };

  const renderItem: ListRenderItem<string> = ({ item: stickerId }) => (
    <View style={[styles.stickerButtonWrapper, { width: screenWidth / 3 }]}>
      <StickerButton
        stickerId={stickerId}
      >
        <StickerRenderer 
          stickerId={stickerId} 
          svgProps={svgProps}
        />
      </StickerButton>
    </View>
  );

  return <FlatList 
    data={stickerIds}
    renderItem={renderItem}
    ItemSeparatorComponent={Divider}
    horizontal={false}
    numColumns={3}
    keyExtractor={keyExtractor}
    ListFooterComponent={Divider}
    contentContainerStyle={styles.contentContainer}
  />;
};

const mapStateToProps = (state: RootState) => ({
  screenWidth: state.screen.screenSpec.width
});

const connector = connect(mapStateToProps);

export default connector(StickerList);

const styles = StyleSheet.create({
  divider: {
    width: 50,
    height: 50
  },
  contentContainer: {
    justifyContent: "flex-start",
    alignContent: "space-between"
  },
  stickerButtonWrapper: {
    justifyContent: "center",
    alignContent: "center"
  }
});
