import React, { Component } from 'react'

export default class CtxP extends Component {
    render() {
        console.log('ctx',this.props);
        
        return (
            <div>
                <h1>Context</h1>
            </div>
        )
    }
}
