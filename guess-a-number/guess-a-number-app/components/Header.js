import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../constants/colors";
import TitleText from "./TitleText";
import { Platform } from "react-native";

const Header = (props) => {
  return (
    <View
      style={{
        ...styles.headerBase,
        ...Platform.select(
          (io = styles.headerIOS),
          (android = styles.headerAndroid)
        ),
      }}
    >
      <TitleText style={styles.headerText}>{props.title}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBase: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  headerIOS: {
    backgroundColor: "white",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  headerAndroid: {
    backgroundColor: colors.primary,
  },
  headerText: {
    color: Platform.OS === "android" ? "white" : "#ccc",
    fontSize: 24,
  },
});

export default Header;
