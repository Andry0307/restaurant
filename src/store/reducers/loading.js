import {LOADING_ACTION} from "../actions/loadingAction";

const initState = {
    isLoading: true
};

export default function (state = initState, {type, payload}) {
    switch (type) {
        case LOADING_ACTION:
            return {...state, isLoading: payload};
        default:
            return state
    }

}