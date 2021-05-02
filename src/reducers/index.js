import { counterReducuer } from "./counter";
import { loggedReducer } from "./isLogged";
import { combineReducers } from "redux";

export const allReducer = combineReducers({
    counter: counterReducuer,
    logged: loggedReducer
})
