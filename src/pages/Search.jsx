import React, { Component } from 'react'

export default class search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            counter:0
        }
    }
    static getDerivedStateFromProps(props, state) {
        // getDerivedStateFromProps 会在调⽤ render ⽅法之 前调用，   
        //并且在初始挂载及后续更新时都会被调用。    
        //它应返回⼀个对象来更新 state，如果返回 null 则不更新 任何内容。    
        const { counter } = state;
        console.log("getDerivedStateFromProps", counter);
        return counter < 8 ? null : { counter: 0 };
    }
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     //如果我们有snapshot值, 我们已经添加了了 新的items.    
    //     // 调整滚动以⾄至于这些新的items 不不会将旧items推出视图。    
    //     // (这边的snapshot是 getSnapshotBeforeUpdate⽅方法的 返回值)    
    //     if (snapshot !== null) { const list = this.listRef.current; list.scrollTop = list.scrollHeight - snapshot; }
    // }
    handle = () => {
        console.log('handle');
        const { tellme } = this.props
        tellme('hello')
    }
    input = (e) => {
        console.log(e.target.value);
        this.setState({ name: e.target.value })
    }
    render() {
        const { name } = this.state
        const { userInfo } = this.props.store
        console.log('this', this);

        return (
            <div>
                <h1>search</h1>
                <p>{userInfo.userName}</p>
                <button onClick={this.handle}>click</button>
                <input type="text" value={name} onChange={this.input} />
            </div>
        )
    }
}
