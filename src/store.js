import { createStore, combineReducers } from "redux";
const DEFAULT_FEEDBACK = {
  feeling: 0,
  understanding: 0,
  support: 0,
  comments: "",
};
const feedback = (state = DEFAULT_FEEDBACK, action) => {
  if (action.type === "SET_FEEDBACK") {
    return { ...state, [action.payload.target]: action.payload.data };
  }
  return state;
};

const store = createStore(combineReducers({ feedback }));

export default store;
