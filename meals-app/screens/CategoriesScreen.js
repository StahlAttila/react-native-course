import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";

const CategoriesScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "CategoryMeals",
            params: {
              categoryId: itemData.item.id,
            },
          });
        }}
      />
    );
  };

  return (
    <FlatList
      //older version of react natvive needs keyextractor if item doesnt have key field
      //newer version accepts id field from objects as well
      //keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      numColumns={2}
      renderItem={renderGridItem}
    />
  );
};
/* we can set static styling and values in the main navigation file
CategoriesScreen.navigationOptions = {
  headerTitle: "Meal Categories",
};*/

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoriesScreen;
