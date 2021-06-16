import { Middleware } from "redux";
import { ADD_QUESTION, LOAD_POLL } from "store/action-types/questions.types";
import { SET_USER } from "store/action-types/user.types";
import { addPollToLocalStorage } from "utils";

export const LocalSaver: Middleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SET_USER:
      localStorage.setItem("user", JSON.stringify(action.payload));
      break;
    case LOAD_POLL:
      localStorage.setItem("polls", JSON.stringify(action.payload));
      break;
    case ADD_QUESTION:
      addPollToLocalStorage("polls", action.payload);
      break;
    default:
      break;
  }
  return next(action);
};
