import React, { Component } from 'react'
import { Consumer } from '../AppContext';

export default class Home extends Component {
    constructor(){
        super()
        this.state={
            date:new Date(),
            timer:null,
            counter:0
        }
    }
    componentDidMount(){
        // this.timer=setInterval(()=>{
        //     this.setState({date:new Date()})
        // },1000)
        // // 同步方式3：
        // document.getElementsByTagName('button')[0].addEventListener('click',()=>{
        //     this.setState({counter:this.state.counter+2})
        //     console.log(11,this.state.counter);
        // })
    }
    componentWillUnmount(){
        clearInterval(this.timer)
    }
    setCounter=()=>{
        // 同步方式1：
        // this.setState(nextState=>{
        //     return {
        //         counter:nextState.counter+1
        //     }
        // })
        // this.setState(nextState=>{
        //     return {
        //         counter:nextState.counter+2
        //     }
        // })
        // 同步方式2：
        // setTimeout(()=>{
        //     this.setState({counter:this.state.counter+1})
        // })
        // setTimeout(()=>{
        //     this.setState({counter:this.state.counter+2})
        // })
        // this.setState({counter:this.state.counter+1})
        // this.setState({counter:this.state.counter+2})
        // console.log(this.state.counter);
        
    }
    render() {
        const {date,counter}=this.state
        return (
                <div>
                    <h1>home</h1>
                    <p>{date.toLocaleTimeString()}</p>
                    <p>{counter}</p>
                    <button onClick={this.setCounter}>改变counter</button>
                    <Consumer>
                        {
                            ctx=><HomeHandle {...ctx}>
                            </HomeHandle>
                        }

                    </Consumer>
                </div>
        )
    }
}

function HomeHandle(props) {
    console.log('hah',props);
    return(
        <div>
            HomeHandle
        </div>
    )
}