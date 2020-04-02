import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";

import reducer from "./src/reducers";

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, reducer);

let store = createStore(
  persistedReducer,
  //reducer,
  typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

let persistor = persistStore(store);

if (typeof window !== "undefined") {
  window.persistor = persistor;
}

export default ({ element }) => {
  return (
    <Provider store={ store }>
      <PersistGate loading={ null } persistor={ persistor }>
        { element }
      </PersistGate>
    </Provider>
  );
}

{/*
export default ({ element }) => {
  return (
    <Provider store={ store }>
        { element }
    </Provider>
  );
}
*/}

