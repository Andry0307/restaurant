import api from '../../api'

export const SET_TABLES_ACTION = 'SET_TABLES_ACTION';
export function setTables(data) {
    return { type: SET_TABLES_ACTION, payload: data}
}

export const GET_TABLES_ACTION = 'GET_TABLES_ACTION';
export function getTables() {
    return function (dispatch) {
        api.get('tables').then(resp => {
            dispatch(setTables(resp.data));
        })
    }
}