import { stickerInfos } from "@components/common/stickers/sticker-renderer.data";
import StickerRenderer from "@components/common/stickers/sticker-renderer";
import React from "react";
import { StyleSheet } from "react-native";
import { FlatList, ListRenderItem, View } from "react-native";
import StickerButton from "./sticker-list/sticker-button";
import { SvgProps } from "react-native-svg";
import { RootState } from "@redux/root-reducer";
import { connect, ConnectedProps } from "react-redux";
import StickerCategories from "./sticker-list/sticker-categories";
import { StickerScaleContext } from "../workspace/erin-components/sticker/sticker-scale-context";
import { AfterInteractions } from "react-native-interactions";

const Divider = () => <View style={styles.divider}></View>;

const ListHeaderComponent = () => <View style={styles.listHeader}></View>;

const ListFooterComponent = () => <View style={styles.listFooter}></View>;

const keyExtractor = (item: string) => item;


const svgProps: SvgProps = {
  preserveAspectRatio: "xMidyMid meet",
  style: {
    justifyContent: "center",
    alignItems: "center",
  },
};

const renderItem: ListRenderItem<string> = ({ item: stickerId, index }) => (
  <StickerButton
    stickerId={stickerId}
    index={index}
  >
    <StickerRenderer 
      stickerId={stickerId} 
      svgProps={svgProps}
    />
  </StickerButton>
);

type StickerListReduxProps = ConnectedProps<typeof connector>

interface StickerListProps extends StickerListReduxProps {}

const StickerList: React.FC<StickerListProps> = ({
  stickerCategoryCurrent,
  screenWidth
}) => {

  const itemHeight = screenWidth * 1.3 / 3;
  
  const getItemLayout = (_: unknown, index: number) => ({length: itemHeight, offset: (itemHeight + 50) * index, index});
  
  const filteredStickerIds = stickerInfos.reduce(
    (acc, [stickerId, stickerCategory]) => 
      stickerCategoryCurrent === "all" || stickerCategoryCurrent === stickerCategory ? [...acc, stickerId] : acc,
    [] as string[]
  );

  return <View style={styles.root}>
    <View style={styles.categoriesWrapper}>
      <View style={styles.innerWrapper}>
        <StickerCategories />
      </View>
    </View>
    <View style={styles.listWrapper}>
      <StickerScaleContext.Provider value={1}>
        <View style={styles.innerWrapper}>
          <AfterInteractions>
            <FlatList 
              data={filteredStickerIds}
              renderItem={renderItem}
              ItemSeparatorComponent={Divider}
              horizontal={false}
              numColumns={3}
              keyExtractor={keyExtractor}
              ListHeaderComponent={ListHeaderComponent}
              ListFooterComponent={ListFooterComponent}
              contentContainerStyle={styles.contentContainer}
              scrollEnabled={true}
              getItemLayout={getItemLayout}
            />
          </AfterInteractions>
        </View>
      </StickerScaleContext.Provider> 
    </View>
  </View>;

};

const mapStateToProps = (state: RootState) => ({
  stickerCategoryCurrent: state.editor.generic.stickerCategoryCurrent,
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
  root: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  categoriesWrapper: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
    width: "100%"
  },
  listWrapper: {
    justifyContent: "center",
    alignItems: "center",
    flex: 10,
    height: "100%"
  },
  listHeader: {
    width: 1,
    height: 20
  },
  listFooter: {
    width: 1,
    height: 50
  },
  innerWrapper: {
    flex: 1
  }
});
