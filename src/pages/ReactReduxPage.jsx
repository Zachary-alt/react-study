import React, { Component } from 'react';
import { connect } from "react-redux";
import { add, minus, asyncAdd } from
"../action/reactReduxPage";//此处直接引⽤

class ReduxPage extends Component {
    render() {
        console.log('ReduxPage',this.props);
        const {num,add,minus,asyncAdd} = this.props
        return (
            <div>
                <h1>ReduxPage</h1>
                <p>{num}</p>
                <button onClick={asyncAdd}>asyncAdd</button>
                <button onClick={add}>add</button>
                <button onClick={minus}>minus</button>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        num: state.counter
    }
}
const mapDispatchToProps =  {
    add, minus, asyncAdd
}
// const mapDispatchToProps = dispatch => {
//     return {
//         asyncAdd: () => {
//             setTimeout(()=>{
//                 dispatch({type:'add'})
//             },1000)
//         },
//         add: () => {
//             dispatch({type:'add'})
//         },
//         minus: () => {
//             dispatch({type:'minus'})
//         },
//     }
// }

export default connect(
    mapStateToProps, //状态映射
    mapDispatchToProps //派发事件映射
)(ReduxPage);