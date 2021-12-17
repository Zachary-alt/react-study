import { createStore, applyMiddleware, combineReducers } from 'redux'
import logger from 'redux-logger'
// import thunk from 'redux-thunk'

import createSagaMiddleware from "redux-saga";
import mySaga from "./mySaga";

import { counterReducer } from './counterReducer'
import { loginReducer } from './loginReducer'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(combineReducers({ counter: counterReducer,user:loginReducer }), applyMiddleware(logger, sagaMiddleware))
sagaMiddleware.run(mySaga); //这里注意sagaMiddleware.run 不能放于创建store引用saga中间件之前，否则会出现一个错误

export default store