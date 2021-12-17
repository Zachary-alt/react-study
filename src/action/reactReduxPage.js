export const asyncAdd = () => dispatch => {
    setTimeout(() => {
        dispatch({ type: 'add' })
    }, 1000)
}
export const add = () => {
    return { type: 'add' }
}
export const minus = () => {
    return { type: 'minus' }
}