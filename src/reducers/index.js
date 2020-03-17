import { combineReducers } from "redux";
import user from "./user";
import navigation from "./navigation";
import { reducer as formReducer } from "redux-form";

const reducers = combineReducers({
  user,
  navigation,
  form: formReducer
});

export default reducers;
