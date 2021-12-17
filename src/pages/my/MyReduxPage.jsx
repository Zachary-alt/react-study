import React, { Component } from 'react';
import store from '../../store/myReduxStore'
class MyReduxPage extends Component {
    componentDidMount(){
        store.subscribe(()=>{
            this.forceUpdate()
            // this.setState({})
        })
    }
    render() {
        // console.log('MyReduxPage',store);
        return (
            <div>
                <h1>MyReduxPage</h1>
                <p>{store.getState()}</p>
                <button onClick={()=>{store.dispatch({type:"add"})}}>add</button>
                <button onClick={()=>{store.dispatch({type:"minus"})}}>minus</button>
                <button onClick={()=>{store.dispatch(dispatch=>{
                    setTimeout(()=>{
                        dispatch({type:"add"})
                    },1000)
                })}}>asyncadd</button>
            </div>
        );
    }
}

export default MyReduxPage;