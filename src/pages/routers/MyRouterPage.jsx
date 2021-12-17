import React, { Component } from 'react'
import {BrowserRouter,Link,Route} from "./zreact-router-dom.jsx"
import User1 from '../User1'
import Home1 from '../Home1'
import PrivateRoute from './PrivateRoute'
import Login from './Login'

function News(prpos){
    console.log(prpos);
    return (
        <div>
            <h1>News</h1>
            <p>id:{prpos.match.params.id}</p>
        </div>
    )
}
export default class RouterPage extends Component {
    render() {
        return (
            <div>
                <h1>RouterPage</h1>
                <BrowserRouter>
                    <nav>
                        <Link to="/">首页</Link>
                        <Link to="/user">用户中心</Link>
                    </nav>
                        {/* 根路由要添加exact，实现精确匹配 */}
                        <Route exact path="/" component={Home1}></Route>
                        <Route exact path="/login" component={Login}></Route>
                        <Route path="/user" component={User1}></Route>
                        <Route component={()=><div>404</div>}></Route>
                </BrowserRouter>
            </div>
        )
    }
}
