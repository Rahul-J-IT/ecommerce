import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import productsReducer from "./slices/productsSlice";
import prouctReducer from "./slices/productSlice";

const reducer = combineReducers({
  productsState: productsReducer,
  productState: prouctReducer,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
