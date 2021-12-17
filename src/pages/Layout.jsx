import React, { Component } from 'react'
import TabBar from './components/TabBar';

export default class Layout extends Component {
    render() {
        const {children,showTab,title="商城"}=this.props
        document.title=title
        return (
            <div>
                {children}
                {showTab&&<TabBar></TabBar>}
            </div>
        )
    }
}
