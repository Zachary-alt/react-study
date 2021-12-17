const initalLogin={
    isLogin:false,
    name:null
}
export const loginReducer = (state = {...initalLogin}, action) => {
    switch (action.type) {
        case 'getUserInfo':
            return {...state,isLogin:false,name:null}
        case 'loginSuccess':
            return {...state,isLogin:true,name:"jack"}
        case 'loginFail':
            return {...state,isLogin:false,name:null}
        default:
            return state
    }
}