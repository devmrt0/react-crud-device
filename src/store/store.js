import { combineReducers ,configureStore } from '@reduxjs/toolkit';
//import counterReducer from '../features/counter/counterSlice';
import thunk from "redux-thunk";
import logger from "redux-logger";
import { compose, applyMiddleware, createStore } from "redux";
import rootReducer from "../reducers/index";

//const rootReducers = combineReducers({counterReducer}) 
// hepsini tekte combine edebiliyorsun

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;
/**
 * composeEnhancers redux devtools kullanırken
 */
const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  applyMiddleware(logger)
);

/*export const store2 = configureStore({
  reducer: {
    counter: counterReducer,
  },
});*/

export const store = createStore(rootReducer, enhancer);


export default store;
