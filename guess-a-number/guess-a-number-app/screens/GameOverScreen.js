import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import BodyText from "../components/BodyText";
import MainButton from "../components/MainButton";
import TitleText from "../components/TitleText";
import colors from "../constants/colors";

const GameOverScreen = (props) => {
  return (
    <ScrollView>
      <View style={styles.screen}>
        <TitleText>The Game is over!</TitleText>
        <View style={styles.imageContainer}>
          <Image
            //fadeDuration={1000}
            //local image - RN can get the information about its size, so its not needed to style if the image is already correctly sized
            source={require("../assets/images/success.png")}
            //web image - RN cant get information about its size, so its mandatory to give size to it with styling
            //source={{uri: 'https://cdn.mos.cms.futurecdn.net/ntFmJUZ8tw3ULD3tkBaAtf.jpg'}}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View style={styles.resultContainer}>
          <BodyText style={styles.resultText}>
            Your phone needed{" "}
            <Text style={styles.highlight}>{props.rounds}</Text> rounds to guess
            <Text style={styles.highlight}> {props.userNumber} </Text>.
          </BodyText>
        </View>
        <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    borderRadius: (Dimensions.get("window").width * 0.7) / 2,
    borderColor: colors.secondary,
    borderWidth: 5,
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").width * 0.7,
    overflow: "hidden",
    marginVertical: Dimensions.get("window").height / 30,
  },
  highlight: {
    color: colors.primary,
    fontFamily: "open-sans-bold",
  },
  resultContainer: {
    margin: Dimensions.get("window").height / 60,
  },
  resultText: {
    textAlign: "center",
    fontSize: Dimensions.get("window").height < 400 ? 16 : 20,
  },
});

export default GameOverScreen;
