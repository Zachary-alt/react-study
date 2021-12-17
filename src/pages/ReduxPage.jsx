import React, { Component } from 'react';
import store from '../store/reduxStore'
class ReduxPage extends Component {
    componentDidMount(){
        store.subscribe(()=>{
            this.forceUpdate()
            // this.setState({})
        })
    }
    render() {
        console.log('ReduxPage',store);
        return (
            <div>
                <h1>ReduxPage</h1>
                <p>{store.getState()}</p>
                <button onClick={()=>{store.dispatch({type:"add"})}}>add</button>
            </div>
        );
    }
}

export default ReduxPage;