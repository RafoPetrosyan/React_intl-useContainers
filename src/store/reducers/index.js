import { combineReducers } from "redux";
import intl from "./rootReducers/intl";
import users from "./rootReducers/users";

export const rootReducer = combineReducers({
    intl,
    users,
});