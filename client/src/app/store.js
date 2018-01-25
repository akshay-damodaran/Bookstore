// Create store

import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import loginReducer from './reducers/loginReducer';

import loadState from './localStorage';

const middleware = [
  logger,
];

const persistedState = loadState();

const rootReducer = combineReducers({
  loginReducer,
});

export default createStore(
  rootReducer,
  persistedState,
  applyMiddleware(...middleware),
);
