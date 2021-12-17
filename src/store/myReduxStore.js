import { createStore,applyMiddleware } from '../zRedux'
import { counterReducer } from './counterReducer'

const store = createStore(counterReducer,applyMiddleware(logger,thunk))

export default store

function logger(dispatch,getState){
    return dispatch=>action=>{
        console.log(action.type + "done!");
        return dispatch(action)
    }
}
function thunk(dispatch,getState){
    return dispatch=>action=>{
        if(typeof action === "function") return action(dispatch,getState);
        return dispatch(action)
    }
}