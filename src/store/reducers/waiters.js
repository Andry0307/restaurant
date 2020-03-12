import {SET_WAITER_ACTION} from '../actions/waitersActions'

const initState = {
    list: []
};

export default function (state = initState, {type, payload}) {
    switch (type) {
        case SET_WAITER_ACTION:
            return {...state, list: payload};
        default:
            return state;
    }
}