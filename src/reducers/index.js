import { combineReducers } from "redux";
import user from "./user";
import { reducer as formReducer } from "redux-form";

const reducers = combineReducers({
  user,
  form: formReducer
});

export default reducers;
