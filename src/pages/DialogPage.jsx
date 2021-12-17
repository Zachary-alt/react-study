import React, { Component } from 'react'
import Dialog from './components/Dialog'
import {Button} from 'antd'
export default class DialogPage extends Component {
    state={
        visible:false
    }
    change=()=>{
        this.setState({
            visible:!this.state.visible
        })
        setTimeout(()=>{
            console.log(111,this.state.visible);
            
        })
    }
    render() {
        const {visible} = this.state
        return (
            <div>
                <h1>DialogPage</h1>
                {visible&&<Dialog hide={true}>hahahaha</Dialog>}
                <Button onClick={this.change}>Dialog toggle</Button>
            </div>
        )
    }
}
