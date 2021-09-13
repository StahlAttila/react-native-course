import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const MealItem = (props) => {
  return (
    <TouchableOpacity onPress={props.onSelectMeal}>
      <View style={styles.mealItem}>
        <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
          {/* to see the text infront of the background image, we have to wrap it in the ImageBackground component */}
          <ImageBackground source={{ uri: props.image }} style={styles.bgImage}>
            <View style={styles.titleContainer}>
              <Text style={styles.title} numberOfLines={1}>
                {props.title}
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
          <Text>{props.duration}m</Text>
          <Text>{props.complexity.toUpperCase()}</Text>
          <Text>{props.affordability.toUpperCase()}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    color: "white",
  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.4)",
    padding: 10,
  },
  mealItem: {
    height: 200,
    width: "100%",
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 10,
  },
  mealRow: {
    flexDirection: "row",
  },
  mealHeader: {
    height: "85%",
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    //to center vertically we have to be specific that we have remaining 15% height
    alignItems: "center",
    height: "15%"
  },
  bgImage: {
    height: "100%",
    width: "100%",
    justifyContent: "flex-end"
  },
});

export default MealItem;
