import {SET_TABLES_ACTION} from '../actions/tablesActions'

const initState = {
    list: []
};

export default function (state = initState, {type, payload}) {
    switch (type) {
        case SET_TABLES_ACTION:
            return {...state, list: payload};
        default:
            return state;
    }
}