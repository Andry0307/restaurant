import api from '../../api'

export const SET_WAITER_ACTION = 'SET_WAITER_ACTION';
export function setWaiters(data) {
    return { type: SET_WAITER_ACTION, payload: data}
}

export const GET_WAITER_ACTION = 'GET_WAITER_ACTION';
export function getWaiters() {
    return function (dispatch) {
        api.get('waiters').then(resp => {
            dispatch(setWaiters(resp.data));
        })
    }
}