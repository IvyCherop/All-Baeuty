import {
  CART_ADD_ITEM,
  CART_ADD_ITEM_FAIL,
  CLEAR_CART,
  CART_REMOVE_ITEM,
  CART_SAVE_PAYMENT_METHOD,
  CART_SAVE_SHIPPING_ADDRESS,
  GET_TOTALS,
  CHANGE_COUNT,
} from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
  // console.log(Array.isArray(state.cartItems));
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.product === item.product);
      if (existItem) {
        return {
          ...state,
          error: "",
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return { ...state, error: "", cartItems: [...state.cartItems, item] };
      }
    case CART_REMOVE_ITEM:
      return {
        ...state,
        error: "",
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };
    case CHANGE_COUNT:
      const productId = action.payload.productId;
      const newCount = action.payload.count;

      let updatedCart = state.cartItems.map((item) => {
        if (item.product === productId) {
          return { ...item, count: newCount };
        }
        return item;
      });
      return {
        ...state,
        cartItems: updatedCart,
      };

    case CART_SAVE_SHIPPING_ADDRESS:
      return { ...state, shippingAddress: action.payload };
    case CART_SAVE_PAYMENT_METHOD:
      return { ...state, paymentMethod: action.payload };
    case CART_ADD_ITEM_FAIL:
      return { ...state, error: action.payload };
    case CLEAR_CART:
      return { ...state, error: "", cartItems: [] };

    case GET_TOTALS:
      const total = action.payload.reduce(
        (total, item) => (total += item.price * Number(item.count)),
        0
      );
      const shippingFee = total * 0.045;
      const Tax = total * 0.02;
      const cartTotal = total + Tax + shippingFee;
      // console.log(Tax)

      return {
        ...state,
        totalAmount: total,
        shippingFee: shippingFee,
        tax: Tax,
        cartTotal: cartTotal,
      };
    default:
      return state;
  }
};
