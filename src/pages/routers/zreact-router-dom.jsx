import React, { Component,useContext } from "react";
import matchPath from './matchPath'

import { createBrowserHistory } from "history";
const RouterContext = React.createContext();
export class BrowserRouter extends Component {
  constructor(props) {
    super(props);
    this.history = createBrowserHistory(this.props);
    this.state = {
      location: this.history.location,
    };
    this.unlisten = this.history.listen((location) => {
      this.setState({ location });
    });
  }
  componentWillUnmount() {
    if (this.unlisten) this.unlisten();
  }
  render() {
    return (
      <RouterContext.Provider
        children={this.props.children || null}
        value={{
          history: this.history,
          location: this.state.location,
        }}
      />
    );
  }
}

export function Route(props) {
  const ctx = useContext(RouterContext);
  const { location } = ctx;
  const { path, component, children, render } = props;
  const match = matchPath(location.pathname, props);
  console.log("match", match);
  const matchCurrent = match && match.isExact;
  //const matchCurrent = path === location.pathname;
  const cmpProps = { ...ctx, match };
  console.log("render", render);
  if (matchCurrent && typeof children === "function") {
    return children(cmpProps);
  }
  return (
    <>
      {typeof children === "function" && children(cmpProps)}
      {matchCurrent && component
        ? React.createElement(component, cmpProps)
        : null}
      {matchCurrent && !component && render && render(cmpProps)}
    </>
  );
}

export class Link extends Component {
  handleClick(event, history) {
    event.preventDefault();
    history.push(this.props.to);
  }
  render() {
    const { to, children } = this.props;
    return (
      <RouterContext.Consumer>
        {(context) => {
          return (
            <a
            //   {...rest}
              onClick={(event) => this.handleClick(event, context.history)}
              href={to}
            >
              {children}
            </a>
          );
        }}
      </RouterContext.Consumer>
    );
  }
}
