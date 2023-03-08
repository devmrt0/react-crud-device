import { combineReducers ,configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

//const rootReducers = combineReducers({counterReducer}) 
// hepsini tekte combine edebiliyorsun

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
