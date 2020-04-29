import { combineReducers } from "redux";
import user from "./user";
import navigation from "./navigation";
import admin from "./admin";
import { reducer as formReducer } from "redux-form";

const reducers = combineReducers({
  user,
  admin,
  navigation,
  form: formReducer
});

export default reducers;
