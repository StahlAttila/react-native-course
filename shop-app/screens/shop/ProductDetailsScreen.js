import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  Image,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Colors from "../../constants/Colors";
import * as cartActions from "../../store/actions/cartActions";
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/UI/HeaderButton';

const ProductDetailsScreen = (props) => {
  const productId = props.navigation.getParam("productId");
  const product = useSelector((state) =>
    state.products.availableProducts.find((product) => product.id === productId)
  );

  const dispatch = useDispatch();

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: product.imageUrl }} />
      <View style={styles.actions}>
        <Button title="Add To Cart" onPress={() => {
          dispatch(cartActions.addToCart(product));
        }} color={Colors.primary} />
      </View>
      <Text style={styles.price}>${product.price}</Text>
      <Text style={styles.description}>{product.description}</Text>
    </ScrollView>
  );
};

ProductDetailsScreen.navigationOptions = (navData) => {
  return {
    headerTitle: navData.navigation.getParam("productTitle"),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Cart"
          iconName={Platform.OS === "android" ? "md-cart" : "ios-cart"}
          onPress={() => navData.navigation.navigate("Cart")}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    fontSize: 20,
    textAlign: "center",
    color: "#888",
    marginVertical: 20,
    fontFamily: 'open-sans-bold'
  },
  description: {
    fontSize: 18,
    textAlign: "center",
    marginHorizontal: 20,
    fontFamily: 'open-sans'
  },
  actions: {
    margin: 10,
    //alignItems: "center"
  }
});

export default ProductDetailsScreen;
