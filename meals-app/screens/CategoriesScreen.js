import React from "react";
import { FlatList } from "react-native-gesture-handler";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-navigation";
import Colors from "../constants/Colors";

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
    <SafeAreaView >
      <StatusBar 
        backgroundColor={Colors.primaryColor}
      />
      <FlatList
        //older version of react natvive needs keyextractor if item doesnt have key field
        //newer version accepts id field from objects as well
        //keyExtractor={(item, index) => item.id}
        data={CATEGORIES}
        numColumns={2}
        renderItem={renderGridItem}
      />
    </SafeAreaView>
  );
};
// we can set static styling and values in the main navigation file
CategoriesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Meal Categories",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

/* CategoriesScreen.navigationOptions = (navigationData) => {
  return {
    headerTitle: "Meal Categories",
    headerLeft: () => 
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item 
          title="Menu" 
          iconName="ios-menu"
        />
      </HeaderButtons>
  };
} */

export default CategoriesScreen;
