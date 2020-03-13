import api from '../../api';
import {setLoading} from './loadingAction';

export const SET_WAITER_ACTION = 'SET_WAITER_ACTION';
export function setWaiters(data) {
    return { type: SET_WAITER_ACTION, payload: data}
}

export const SEARCH_WAITER = 'SEARCH_WAITER';
export function searchWaiter(query) {
    return {type: SEARCH_WAITER, payload: query}
}

export const CREATE_WAITER_ACTION = 'CREATE_WAITER_ACTION';
export function createWaiter(waiter) {
    return {type: CREATE_WAITER_ACTION, payload: waiter}
}

export const EDIT_WAITER_ACTION = 'EDIT_WAITER_ACTION';
export function editWaiter(waiter) {
    return {type: EDIT_WAITER_ACTION, payload: waiter}
}

export const DELETE_ITEM_ACTION = 'DELETE_ITEM_ACTION';
export function deleteItem(id) {
    return {type: DELETE_ITEM_ACTION, payload: id}
}

export const DELETE_WAITER_ACTION = 'DELETE_WAITER_ACTION';
export function deleteWaiter(id) {
    return function (dispatch) {
        api.delete(`waiters/${id}`).then(resp => {
            dispatch(deleteItem(resp.data))
        })
    }
}

export const SAVE_WAITER_ACTION = 'SAVE_WAITER_ACTION';
export function saveWaiter(waiter) {
    return function (dispatch) {
        if (waiter.id) {
            api.put(`waiters/${waiter.id}`, waiter).then(resp => {
                dispatch(editWaiter(resp.data))
            })
        } else {
            api.post('waiters', waiter).then(resp => {
                dispatch(createWaiter(resp.data))
            })
        }
    }
}

export const GET_WAITER_ACTION = 'GET_WAITER_ACTION';
export function getWaiters() {
    return function (dispatch) {
        api.get('waiters').then(resp => {
            dispatch(setWaiters(resp.data));
            dispatch(setLoading(false));
        })
    }
}