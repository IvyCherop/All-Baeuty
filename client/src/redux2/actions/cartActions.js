import Axios from "axios";
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
  CART_SAVE_PAYMENT_METHOD,
  GET_TOTALS,
  CLEAR_CART,
  CHANGE_COUNT,
} from "../constants/cartConstants";

export const addToCart = (productId) => async (dispatch, getState) => {
  const res = await Axios.get(
    `https://bearyfll.herokuapp.com/api/v1/products/find/${productId}`
  );
  const productData = res.data.product;
  // console.log(productData);
  // const {
  //   cart: { cartItems },
  // } = getState();

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      name: productData.name,
      image: productData.image,
      price: productData.price,
      colors: productData.colors,
      count: 1,
      product: productData._id,
    },
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const alterCount = (productId, count) => async (dispatch, getState) => {
  dispatch({ type: CHANGE_COUNT, payload: productId, count });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (productId) => (dispatch, getState) => {
  dispatch({ type: CART_REMOVE_ITEM, payload: productId });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const getTotals = () => (dispatch, getState) => {
  const cartItems = getState().cart.cartItems;
  // console.log(cartItems);
  dispatch({ type: GET_TOTALS, payload: cartItems });
};

export const saveShippingAddress = (productData) => (dispatch) => {
  dispatch({ type: CART_SAVE_SHIPPING_ADDRESS, payload: productData });
  localStorage.setItem("shippingAddress", JSON.stringify(productData));
};
export const savePaymentMethod = (productData) => (dispatch) => {
  dispatch({ type: CART_SAVE_PAYMENT_METHOD, payload: productData });
};
export const clearCart = () => (dispatch) => {
  dispatch({ type: CLEAR_CART });
};
