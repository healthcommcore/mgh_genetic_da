import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";

import reducer from "./src/reducers";

const store = createStore(
  //reducer
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default ({ element }) => {
  return <Provider store={ store }>{ element }</Provider>;
}

