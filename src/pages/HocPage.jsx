import React, { Component } from 'react'
import {Button}  from 'antd';

const foo = Cmp=>props=>{
    return (
        <div className="border" style={{border:'1px solid #aaa'}}>
            <Cmp {...props}></Cmp>
        </div>
    )
}
const foo2 = Cmp=>props=>{
    return (
        <div className="border" style={{border:'1px solid red'}}>
            <Cmp {...props}></Cmp>
        </div>
    )
}
@foo
@foo2
class Child extends Component{
    render(){
        return <div>Child</div>
    }
}

@foo2
class HocPage extends Component {
    render() {
        // const Foo = foo2(foo(Child))
        return (
            <div>
                <h1>HocPage</h1>
                {/* <Foo></Foo> */}
                <Child></Child>
                <Button type="primary" >btn</Button>
            </div>
        )
    }
}
export default HocPage
