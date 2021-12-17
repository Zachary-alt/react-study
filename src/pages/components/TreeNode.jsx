import React, { Component } from 'react'
import {Icon} from 'antd'

export default class TreeNode extends Component {
    constructor(props){
        super(props);
        this.state={
            expanded:false
        }
    }
    handleExpand=()=>{
        this.setState({
            expanded:!this.state.expanded
        })
    }
    render() {
        const {key,title,children} = this.props.data
        const hasChild=children&&children.length
        const {expanded} = this.state
        return (
            <div className="treeNode">
                <div key={key} onClick={this.handleExpand}>
                {hasChild&&(expanded?<Icon type="caret-down" />:<Icon type="caret-right" />)}
                    <span>{title}</span>
                </div>
                {expanded&&hasChild&&(
                        children.map(item=>{
                            return <TreeNode key={item.key} data={item}></TreeNode>
                        })
                    )}
            </div>
        )
    }
}
