import React, { Component, memo } from "react";
export default class MemoPage extends Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0, obj: { num: -1 }, };
    }
    setCounter = () => {
        this.setState({
            counter: 1 /* ,      
                obj: {        num: 100,      }, */,
        });
    };
    render() {
        const { counter } = this.state;
        return (<div>
            <h1>MemoPage</h1>
            <button onClick={this.setCounter}>按钮</button>
            {/* <PuerCounter counter={counter} obj={obj} /> */}
            <PuerCounter counter={counter} />
        </div>);
    }
}
const PuerCounter = memo(props => {
    console.log("render");
    return <div>{props.counter}</div>;
});
