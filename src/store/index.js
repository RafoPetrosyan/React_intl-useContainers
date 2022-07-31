import { createLogicMiddleware } from "redux-logic";
import { applyMiddleware, legacy_createStore as createStore, compose } from "redux";
import { logics } from "./logics";
import { rootReducer } from "./reducers";
import httpClient from "./httpClient";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const dips = { httpClient };
const logicMiddleware = createLogicMiddleware(logics, dips);
export const store = createStore(rootReducer, composeEnhancers( applyMiddleware(logicMiddleware) ));