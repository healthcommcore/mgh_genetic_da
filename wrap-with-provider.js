import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import user from "./src/reducers/user";

const store = createStore(user);

export default ({ element }) => {
  return <Provider store={ store }>{ element }</Provider>;
}

