import {SET_WAITER_ACTION, SEARCH_WAITER,EDIT_WAITER_ACTION,
    CREATE_WAITER_ACTION, DELETE_ITEM_ACTION} from '../actions/waitersActions'

const initState = {
    list: [],
    search: ''
};

export default function (state = initState, {type, payload}) {
    switch (type) {
        case SET_WAITER_ACTION:
            return {...state, list: payload};
        case SEARCH_WAITER:
            return {...state, search: payload};
        case EDIT_WAITER_ACTION:
            return {...state, list: state.list.map(item => {
                    return item.id === payload.id ? payload : item
                })};
        case CREATE_WAITER_ACTION:
            payload.startDate = Date.now();
            return {...state, list: [...state.list, payload] };
        case DELETE_ITEM_ACTION:
            return {...state, list: state.list.filter(item =>  item.id !== payload.id)};
        default:
            return state;
    }
}