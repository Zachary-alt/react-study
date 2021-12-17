export function createStore(reducer,enhancer){
    if(enhancer){
        return enhancer(createStore)(reducer)
    }
    let currentState=undefined,listeners=[];
    function getState(){
        return currentState
    }
    function dispatch(action){
        currentState=reducer(currentState,action)
        listeners.map(cl=>cl())
    }
    function subscribe(listener){
        listeners.push(listener)
    }
    dispatch({type:'zhaozz'})
    return {
        getState,
        dispatch,
        subscribe,
    }
}

export function applyMiddleware(...middlewares) {
    // 返回强化以后函数
    return createStore=>(...arg)=>{
        const store = createStore(...arg)
        const midApi={
            getState:store.getState,
            dispatch:store.dispatch
        }
        // 使中间件可以获取状态值、派发action
        const chain = middlewares.map(mw=>mw(midApi))
        // compose可以middlewareChain函数数组合并成⼀个函数
        const dispatch = compose(...chain)(store.dispatch)
        return{
            ...store,
            dispatch
        }
    }
}

function compose(...funcs) {
    if(funcs.length===0){
        return arg=>arg
    }else if(funcs.length===1){
    return funcs[0]
    }
    return funcs.reduce((left,right)=>(...args)=>right(left(...args)))
}