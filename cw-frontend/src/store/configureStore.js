import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {routerMiddleware, routerReducer} from "react-router-redux";
import createHistory from "history/createBrowserHistory";

import usersReducer from "./reducers/users";
import productsReducer from "./reducers/products";
import productInfoReducer from "./reducers/productInfo";

import {loadState, saveState} from "./localStorage";

const rootReducer = combineReducers({
  productInfo: productInfoReducer,
  products: productsReducer,
  users: usersReducer,
  routing: routerReducer
});

export const history = createHistory();

const middleware = [
  thunkMiddleware,
  routerMiddleware(history)
];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(applyMiddleware(...middleware));

const persistedState = loadState();

const store = createStore(rootReducer, persistedState, enhancers);

store.subscribe(() => {
  saveState({
    users: store.getState().users
  })
});

export default store;