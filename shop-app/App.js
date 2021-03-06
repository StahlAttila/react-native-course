import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
//only for debugging purposes, remove before deploy
//import { composeWithDevTools } from "redux-devtools-extension";

import productReducer from "./store/reducers/productReducer";
import cartReducer from "./store/reducers/cartReducer";
import ShopNavigator from "./navigation/ShopNavigator";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer
});

//add composeWithDevTools() as a second parameter for debugging
const store = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setFontLoaded(true);
        }}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <ShopNavigator />
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
