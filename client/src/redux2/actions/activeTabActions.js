import { ACTIVE_TAB } from "../constants/activeTabConstants";

export const changeActiveTab = (index) => (dispatch) => {
  dispatch({ type: ACTIVE_TAB, payload: index });
};
