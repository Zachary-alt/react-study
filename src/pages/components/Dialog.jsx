import React, { Component } from 'react'
import {createPortal } from 'react-dom'

export default class Dialog extends Component {
    constructor(props){
        super(props)
        this.node=document.createElement('div')
        document.body.appendChild(this.node)
    }
    componentWillUnmount(){
        document.body.removeChild(this.node)
    }
    render() {
        const {children,hide}=this.props
        return createPortal(
            <div className="border" style={{visibility:hide?"":''}}>
                <h1>Dialog</h1>
                {children}
            </div>,
            this.node
        )
    }
}
//在v16之前，实现“传送门”
// export class Dialog2 extends React.Component {
//     render() { return null; }
//     componentDidMount() {
//         const doc = window.document; this.node = doc.createElement("div"); doc.body.appendChild(this.node);
//         this.createPortal(this.props);
//     }
//     componentDidUpdate() { this.createPortal(this.props); }
//     componentWillUnmount() { unmountComponentAtNode(this.node); window.document.body.removeChild(this.node); }
//     createPortal(props) {
//         unstable_renderSubtreeIntoContainer(
//             this, //当前组件      
//             <div className="dialog">{props.children}</div>, // 塞进传送⻔门的JSX      
//             this.node // 传送⻔门另⼀一端的DOM node    
//         );
//     }
// }
