import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
// import * as rootReducer from '../redux/contactList-reducer';
// import { persistStore, persistReducer } from 'redux-persist';
import combineReducers from '../redux/contactList-reducer'
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import { createStore, combineReducers } from 'redux';


const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const store = configureStore({
  reducer: combineReducers,
   middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
