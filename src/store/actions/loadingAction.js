export const LOADING_ACTION = 'LOADING_ACTION';
export function setLoading(loading) {
    return {type: LOADING_ACTION, payload: loading }
}