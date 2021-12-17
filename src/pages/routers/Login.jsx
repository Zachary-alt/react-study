import React, { Component } from 'react'
import { connect } from "react-redux";
import {Redirect} from "react-router-dom"

class Login extends Component {
    render() {
        const {userInfo,login,location}=this.props
        const isLogin = userInfo.isLogin;
        const redirect = location.state.redirect || "/"; //重定向地址
        if (isLogin) {
            return <Redirect to={redirect} />;
        }
        return (
            <div>
                <h1>LoginPage</h1>
                <button onClick={login}>登录</button>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        userInfo: state.user
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        login: () => {
            dispatch({type:"loginSuccess"})
        }
    }
}
export default connect(
    mapStateToProps, //状态映射
    mapDispatchToProps //派发事件映射
)(Login);
