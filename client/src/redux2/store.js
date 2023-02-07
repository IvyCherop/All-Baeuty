import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { activeTabReducer } from "./reducers/activeTabReducers";
import { cartReducer } from "./reducers/cartReducers";
// import { productSearchReducer } from './reducers/productReducers';

import {
  // productCategoryListReducer,
  createProductReducer,
  deleteProductReducer,
  // productDetailsReducer,
  productReducer,
  productListReducer,
  updateProductReducer,
  categoriesReducer,
  createReviewReducer,
} from "./reducers/productReducers";
import {
  userRegisterReducer,
  userSigninReducer,
} from "./reducers/userReducers";

const initialState = {
  userSignin: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    shippingAddress: localStorage.getItem("shippingAddress")
      ? JSON.parse(localStorage.getItem("shippingAddress"))
      : {},
    paymentMethod: "PayPal",
  },
};
const reducer = combineReducers({
  productsList: productListReducer,
  product: productReducer,
  // search:productSearchReducer,
  categories: categoriesReducer,
  cart: cartReducer,
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  review: createReviewReducer,
  createProduct: createProductReducer,
  updateProduct: updateProductReducer,
  deleteProduct: deleteProductReducer,
  activeTab:activeTabReducer
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
