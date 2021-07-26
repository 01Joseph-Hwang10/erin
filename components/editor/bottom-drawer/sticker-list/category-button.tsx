import { setStickerCategoryCurrent, SetStickerCategoryCurrent } from "@slices/editor/editor-generic";
import { Erin } from "erin";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect, ConnectedProps } from "react-redux";
import { Dispatch } from "redux";

type CategoryButtonReduxProps = ConnectedProps<typeof connector>

interface CategoryButtonProps extends CategoryButtonReduxProps {
    backgroundColor: string,
    fontColor: string,
    children?: React.ReactNode,
    category: Erin.Common.StickerCategories
}

const CategoryButton: React.FC<CategoryButtonProps> = ({
  backgroundColor,
  fontColor,
  children,
  setStickerCategoryCurrent: SetStickerCategoryCurrent,
  category
}) => {

  const changeCategory = () => {
    SetStickerCategoryCurrent(category);
  };

  return (
    <TouchableOpacity
      onPress={changeCategory}
    >
      <View style={[
        styles.categoryCard, 
        { backgroundColor } 
      ]}>
        <Text style={[
          styles.text,
          { color: fontColor }
        ]}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setStickerCategoryCurrent: (payload: SetStickerCategoryCurrent) => dispatch(setStickerCategoryCurrent(payload))
});

const connector = connect(null, mapDispatchToProps);

export default connector(CategoryButton);

const styles = StyleSheet.create({
  categoryCard: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20
  },
  text: {
    fontWeight: "bold",
    fontSize: 24,
    textDecorationLine: "underline"
  },
});
