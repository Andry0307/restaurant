import {combineReducers} from 'redux';
import tables from "./tables";
import waiters from "./waiters";
import loading from "./loading";

export default combineReducers({
    tables: tables,
    waiters: waiters,
    loading: loading
})

