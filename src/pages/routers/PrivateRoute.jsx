import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

class PrivateRoute extends Component {
  render() {
    const { component: Cmp, userInfo, ...rest } = this.props;
    const isLogin = userInfo.isLogin;
    console.log(123, this.props);
    return (
      <Route
        {...rest}
        render={(props) => {
          return isLogin ? (
            <Cmp {...props}></Cmp>
          ) : (
            <Redirect
              to={{
                pathname: "/logins",
                state: { redirect: this.props.location.pathname },
              }}
            />
          );
        }}
      ></Route>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    userInfo: state.user,
  };
};
export default connect(
  mapStateToProps //状态映射
)(PrivateRoute);
