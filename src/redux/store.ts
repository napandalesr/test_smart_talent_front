import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { loadingReducer } from "./reducers/loadingReducer";
import { userReducer } from "./reducers/userReducer";

const reducers = combineReducers({
  loadingReducer,
  userReducer
});

export default createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);
