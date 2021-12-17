import React, { Component } from "react";
export default class CommentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        };
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                comments: [{ author: "小明", body: "这是小明写的文章", }, { author: "⼩小红", body: "这是小红写的文章", },],
            });
        }, 1000);
    }
    render() {
        const { comments } = this.state;
        return (<div>
            <h1>CommentList</h1>
            {comments.map((c, i) => { return <Comment key={i} data={c} />; })}
        </div>);
    }
}
class Comment extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        const { author, body } = nextProps.data;
        const { author: nowAuthor, body: nowBody } = this.props.data;
        if (body === nowBody && author === nowAuthor) {
            return false; //如果不执行这里，将会多次render    
        }
        return true;
    }
    render() {
        console.log("hah");
        const { body, author } = this.props.data;
        return (<div>
            <p>作者： {author}</p>
            <p>正⽂文：{body}</p>
            <p>---------------------------------</p>
        </div>);
    }
}
