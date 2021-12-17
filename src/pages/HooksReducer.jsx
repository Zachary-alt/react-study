import React, {useReducer,useEffect} from 'react'
import { FruitsList,FruitAdd } from './components/HoocksPage';

function fruitsReducer(state,action) {
    switch(action.type){
        case 'init':
        case 'replace':
            return action.payload
        case 'add':
            return [...state,action.payload]
        default:
            return state
    }
}
function f1() {
    console.log("f1");
}
function f2() {
    console.log("f2");
}
function f3() {
    console.log("f3");
}
// 想要顺序输出1 2 3
// f1();f2();f3();
// f3(f2(f1()));
compose(
    f1,
    f2,
    f3,
   )();
function compose(...funcs) {
    if(funcs.length===0){
        return arg=>arg
    }else if(funcs.length===1){
    return funcs[0]
    }
    return funcs.reduce((left,right)=>(...args)=>right(left(...args)))
}
export default function HooksReducer() {
    const [fruits,dispatch] = useReducer(fruitsReducer,[])
    useEffect(() => {
        // effect
        setTimeout(()=>{
            dispatch({type:'init',payload:['apple','banana']})
        },1000)
        return () => {
            // cleanup
        }
    }, [])
    return (
        <div>
            <h1>HooksReducer</h1>
            <FruitAdd addFruit={newF=>{dispatch({type:'add',payload:newF})}}></FruitAdd>
            <FruitsList fruits={fruits} setFruits={newFruit=>{dispatch({type:'replace',payload:newFruit})}}></FruitsList>
        </div>
    )
}
