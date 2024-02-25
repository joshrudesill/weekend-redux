import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";

const feedback = (
  state = {
    feeling: 1,
    understanding: 1,
    support: 1,
    comments: "",
  },
  action
) => {
  if (action.type === "SET_FEEDBACK") {
    return { ...state, [action.payload.target]: action.payload.data };
  } else if (action.type === "RESET_FEEDBACK") {
    return {
      feeling: 1,
      understanding: 1,
      support: 1,
      comments: "",
    };
  }
  return state;
};

const store = createStore(
  combineReducers({ feedback }),
  applyMiddleware(logger)
);

export default store;
