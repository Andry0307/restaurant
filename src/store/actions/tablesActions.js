import api from '../../api'

export const SET_TABLES_ACTION = 'SET_TABLES_ACTION';
export function setTables(data) {
    return {type: SET_TABLES_ACTION, payload: data}
}

export const SEARCH_TABLE_ACTION = 'SEARCH_TABLE_ACTION';
export function searchTable(query) {
    return {type: SEARCH_TABLE_ACTION, payload: query}
}

export const CREATE_TABLE_ACTION = 'CREATE_TABLE_ACTION';
export function createTable(table) {
    return {type: CREATE_TABLE_ACTION, payload: table}
}

export const EDIT_TABLE_ACTION = 'EDIT_TABLE_ACTION';
export function editTable(table) {
    return {type: EDIT_TABLE_ACTION, payload: table}
}

export const DELETE_ITEM_ACTION = 'DELETE_ITEM_ACTION';
export function deleteItem(id) {
    return {type: DELETE_ITEM_ACTION, payload: id}
}

export const DELETE_TABLE_ACTION = 'DELETE_TABLE_ACTION';
export function deleteTable(id) {
    return function (dispatch) {
        api.delete(`tables/${id}`).then(resp => {
            dispatch(deleteItem(resp.data))
        })
    }
}

export const SAVE_TABLE_ACTION = 'SAVE_TABLE_ACTION';
export function saveTable(table) {
    return function (dispatch) {
        if (table.id) {
            api.put(`tables/${table.id}`, table).then(resp => {
                dispatch(editTable(resp.data))
            })
        } else {
            api.post('tables', table).then(resp => {
                dispatch(createTable(resp.data))
            })
        }
    }
}

export const GET_TABLES_ACTION = 'GET_TABLES_ACTION';
export function getTables() {
    return function (dispatch) {
        api.get('tables').then(resp => {
            dispatch(setTables(resp.data));
        })
    }
}