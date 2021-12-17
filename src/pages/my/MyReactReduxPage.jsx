import React, { Component } from 'react'
import { connect } from '../../zreact-redux'

class MyReactReduxPage extends Component {
    render() {
        console.log('MyReactReduxPage',this.props);
        const {num,add,minus} = this.props
        return (
            <div>
                <h1>MyReactReduxPage</h1>
                <p>{num}</p>
                <button onClick={add}>add</button>
                <button onClick={minus}>minus</button>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        num: state
    }
}
const mapDispatchToProps ={
    add: () => {
        return {type:'add'}
    },
    minus: () => {
        return {type:'minus'}
    },
}
export default connect(mapStateToProps,mapDispatchToProps)(MyReactReduxPage)