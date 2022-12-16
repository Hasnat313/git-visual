// Library Imports

// ⬇ The following Library Imports is for Sync Redux States across Browsers Tabs.

import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { legacy_createStore } from "@reduxjs/toolkit";
import { applyMiddleware, compose } from "@reduxjs/toolkit";
import { createStateSyncMiddleware } from "redux-state-sync";
import persistCombineReducers from "redux-persist/es/persistCombineReducers";

// ⬇ Slices Imports

// import passwordReducer from "./Slices/passwordSlice";
// import accountReducer from "./Slices/accountSlice";
// import wishListReducer from "./Slices/wishListSlice";
// import multiLocationReducer from "./Slices/multiLocationSlice";
// import cartReducer from "./Slices/cartSlice";
// import checkoutReducer from "./Slices/checkoutSlice";

// ⬇ Do this if you want to Retain State Values on Reload.

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistCombineReducers(persistConfig, {
  //   passwordSlice: passwordReducer,
  //   accountSlice: accountReducer,
  //   wishListSlice: wishListReducer,
  //   multiLocationSlice: multiLocationReducer,
  //   cartSlice: cartReducer,
  //   checkoutSlice: checkoutReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  persistedReducer,
  composeEnhancers(
    applyMiddleware(
      thunk,
      createStateSyncMiddleware({
        blacklist: ["persist/PERSIST", "persist/REHYDRATE"],
      })
    )
  )
);

export default store;
