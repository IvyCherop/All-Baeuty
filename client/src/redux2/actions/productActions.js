import axios from "axios";
import {
  PRODUCT_SEARCH_FAIL,
  PRODUCT_SEARCH_SUCCESS,
  PRODUCT_SEARCH_REQUEST,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_REQUEST,
  PRODUCT_CATEGORIES_REQUEST,
  PRODUCT_CATEGORIES_SUCCESS,
  PRODUCT_CATEGORIES_FAIL,
  PRODUCTS_IN_A_CATEGORY_REQUEST,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAIL,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_FAIL,
  DELETE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_REQUEST,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_FAIL,
  PRODUCTS_IN_A_CATEGORY_SUCCESS,
  PRODUCTS_IN_A_CATEGORY_FAIL,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAIL,
  CREATE_REVIEW_REQUEST,
  CREATE_REVIEW_FAIL,
  CREATE_REVIEW_SUCCESS,
} from "../constants/productConstants";

export const LIST_PRODUCTS = () => async (dispatch) => {
  dispatch({ type: PRODUCT_LIST_REQUEST });
  try {
    const { data } = await axios.get("https://mrembo.herokuapp.com/api/v1/products");
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
  // }
};
export const searchProducts=(searchTerm)=>async(dispatch)=>{
  dispatch({ type: PRODUCT_SEARCH_REQUEST, payload: searchTerm });
    try {
      const { data } = await axios.get(
        `https://mrembo.herokuapp.com/api/v1/products/search?search_query=${searchTerm}`
      );
      dispatch({ type: PRODUCT_SEARCH_SUCCESS, payload: data, searchTerm: "" });
    } catch (error) {
      dispatch({
        type: PRODUCT_SEARCH_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
}
export const categoryProducts = (category) => async (dispatch) => {
  dispatch({ type: PRODUCTS_IN_A_CATEGORY_REQUEST, payload: category });
  try {
    const { data } = await axios.get(
      `https://mrembo.herokuapp.com/api/v1/products/category?category=${category}`
    );
    console.log(data);
    dispatch({ type: PRODUCTS_IN_A_CATEGORY_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCTS_IN_A_CATEGORY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const getProduct = (productId) => async (dispatch) => {
  dispatch({ type: GET_PRODUCT_REQUEST, payload: productId });
  try {
    const { data } = await axios.get(
      `https://mrembo.herokuapp.com/api/v1/products/find/${productId}`
    );
    dispatch({ type: GET_PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_PRODUCT_FAIL, payload: error });
  }
};

export const GetCategories = () => async (dispatch) => {
  dispatch({ type: PRODUCT_CATEGORIES_REQUEST });
  try {
    const { data } = await axios.get(
      `https://mrembo.herokuapp.com/api/v1/products/categories`
    );
    dispatch({ type: PRODUCT_CATEGORIES_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_CATEGORIES_FAIL,
      payload: error,
    });
  }
};

export const addProduct = (product) => async (dispatch, getState) => {
  const userInfo = getState().userSignin.userInfo;
  dispatch({ type: CREATE_PRODUCT_REQUEST, payload: product });
  try {
    const { data } = await axios.post(
      "https://mrembo.herokuapp.com/api/v1/products",
      product,
      {
        headers: {
          authorization: `Bearer ${userInfo.token}`,
        },
      }
    );
    dispatch({ type: CREATE_PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    const failMessage =
      error.response && error.response.data.msg
        ? error.response.data.msg
        : error.message;
    dispatch({ type: CREATE_PRODUCT_FAIL, payload: failMessage });
  }
};

export const updateItem = (product) => async (dispatch, getState) => {
  // console.log(product._id);
  const userInfo = getState().userSignin.userInfo;
  dispatch({ type: UPDATE_PRODUCT_REQUEST, payload: product });
  try {
    const { data } = await axios.put(
      `https://mrembo.herokuapp.com/api/v1/products/find/${product.productId}`,

      product,
      {
        headers: {
          authorization: `Bearer ${userInfo.token}`,
        },
      }
    );
    dispatch({ type: UPDATE_PRODUCT_SUCCESS });
    console.log(data);
  } catch (error) {
    const failMessage =
      error.response && error.response.data.msg
        ? error.response.data.msg
        : error.message;
    dispatch({ type: UPDATE_PRODUCT_FAIL, payload: failMessage });
  }
};
export const deleteItem = (productId) => async (dispatch, getState) => {
  const userInfo = getState().userSignin.userInfo;
  dispatch({ type: DELETE_PRODUCT_REQUEST, payload: productId });
  try {
    const { data } = await axios.delete(
      `api/v1/products/find/${productId}`,
      {
        headers: {
          authorization: `Bearer ${userInfo.token}`,
        },
      }
    );
    dispatch({ type: DELETE_PRODUCT_SUCCESS });
    console.log(data);
  } catch (error) {
    const failMessage =
      error.response && error.response.data.msg
        ? error.response.data.msg
        : error.message;
    dispatch({ type: DELETE_PRODUCT_FAIL, payload: failMessage });
  }
};

export const createReview = (product) => async (dispatch, getState) => {
  const userInfo = getState().userSignin.userInfo;
  dispatch({ type: CREATE_REVIEW_REQUEST, payload: product });
  try {
    await axios.post(
      "https://mrembo.herokuapp.com/api/v1/reviews",
      {
        title: product.title,
        rating: product.rating,
        product: product.product,
      },

      {
        headers: {
          authorization: `Bearer ${userInfo.token}`,
        },
      }
    );
    dispatch({ type: CREATE_REVIEW_SUCCESS });
  } catch (error) {
    dispatch({
      type: CREATE_REVIEW_FAIL,
      payload:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.message,
    });
  }
};
