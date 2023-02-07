import { ACTIVE_TAB } from "../constants/activeTabConstants";

export const activeTabReducer = (state = {}, action) => {
  if (action.type === ACTIVE_TAB) {
    return { ...state, index: action.payload };
  }
  return state;
};
