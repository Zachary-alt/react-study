import React, { Component } from 'react'

import Layout from './Layout';

export default class Home extends Component {
    constructor(){
        super()
        this.state={
            date:new Date(),
            timer:null,
            counter:0
        }
    }
    render() {
        return (
            <Layout showTab={false} title="商城首页">
                <div>
                    <h1>home1</h1>
                    {/* 具名 */}
                    {/* {
                        { btns: <button>下载</button>}
                    } */}
                    {/* <button onClick={hello}>hello</button> */}
                </div>
            </Layout>
        )
    }
}