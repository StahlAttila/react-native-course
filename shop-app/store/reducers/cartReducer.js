import CartItem from "../../models/cart-item";
import { ADD_TO_CART } from "../actions/cartActions";

const initialState = {
  items: {},
  totalAmount: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const addedProduct = action.product;
      const productPrice = addedProduct.price;
      const productTitle = addedProduct.title;

      let updatedOrNewCartItem;

      if(state.items[addedProduct.id]) {
        //already have item in the cart
        updatedOrNewCartItem = new CartItem(
          state.items[addedProduct.id].quantity + 1,
          productPrice,
          productTitle,
          state.items[addedProduct.id].sum + productPrice
        );
      } else {
        //we dont have it in the cart yet
        updatedOrNewCartItem = new CartItem(1, productPrice, productTitle, productPrice);
        
        //[property name] add or acces dynamic property name instead of hardcoding
        //using the product ids as unique keys in the items object
      }
      return {
        ...state,
        items: {...state.items, [addedProduct.id]: updatedOrNewCartItem},
        totalAmount: state.totalAmount + productPrice
      }


  }
  return state;
};