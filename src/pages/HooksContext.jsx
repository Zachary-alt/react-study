import React,{useContext} from 'react'
import { Context,Provider,Consumer } from '../AppContext';

export default function HooksContext() {
    const store={
        user:{
            name:'Tom'
        }
    }
    return (
        <div>
            <Provider value={store}>
                <ContextChild></ContextChild>
            </Provider>
        </div>
    )
}

function ContextChild(props){
    console.log(useContext(Context));
    const {user} = useContext(Context)
    return <div>ContextChild
        <p>name: {user.name}</p>
    </div>
    
}