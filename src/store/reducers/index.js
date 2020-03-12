import {combineReducers} from 'redux';
import tables from "./tables";
import waiters from "./waiters";

export default combineReducers({
    tables: tables,
    waiters: waiters
})

