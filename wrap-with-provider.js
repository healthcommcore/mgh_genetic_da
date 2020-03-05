import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import user from "./src/reducers/user";

const store = createStore(
  user
  /*
  user,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  */
);

export default ({ element }) => {
  return <Provider store={ store }>{ element }</Provider>;
}

