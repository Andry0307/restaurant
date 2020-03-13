import {SET_TABLES_ACTION, SEARCH_TABLE_ACTION,
    EDIT_TABLE_ACTION, CREATE_TABLE_ACTION, DELETE_ITEM_ACTION} from '../actions/tablesActions'

const initState = {
    list: [],
    search: ''
};

export default function (state = initState, {type, payload}) {
    switch (type) {
        case SET_TABLES_ACTION:
            return {...state, list: payload};
        case SEARCH_TABLE_ACTION:
            return {...state, search: payload};
        case EDIT_TABLE_ACTION:
            return {...state, list: state.list.map(item => {
                    return item.id === payload.id ? payload : item
                })};
        case CREATE_TABLE_ACTION:
            return {...state, list: [...state.list, payload] };
        case DELETE_ITEM_ACTION:
            return {...state, list: state.list.filter(item =>  item.id !== payload.id)};
        default:
            return state;
    }
}