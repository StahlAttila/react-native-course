import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { HeaderTitle } from "react-navigation-stack";
import { MEALS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

const MealDetailScreen = (props) => {

  const mealId = props.navigation.getParam("mealId");
  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  return (
    <View style={styles.screen}>
      <Text>{selectedMeal.title}</Text>
      <Button title="GO HOME" onPress={() => {
          props.navigation.popToTop();
      }}/>
    </View>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam("mealId");
  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  return {
    headerTitle: selectedMeal.title,
    headerRight: () => 
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item 
          title="Favourite" 
          iconName="ios-star"
          onPress={() => {
            console.log("marked as fav")
          }}
        />
      </HeaderButtons>
  };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default MealDetailScreen;