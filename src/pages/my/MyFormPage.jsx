import React, { Component } from 'react'

function zFormCreate(Cmp){
    return class extends Component{
        constructor(props){
            super(props)
            this.options={} //存储配置字段项
            this.state={} //存储字段值
        }
        handleChange=(e)=>{
            let {name,value}=e.target;
            this.setState({[name]:value})
        }
        getFieldDecorator=(field,option)=>{
            this.options[field]=option;
            return InputCmp=><div className="border">
                { // 由React.createElement生成的元素不能修改，需要克隆一份再扩展
                    React.cloneElement(InputCmp,{
                        name:field,
                        value:this.state[field]||"",
                        onChange:this.handleChange
                    })
                }
            </div>
        }
        getFieldsValue=()=>{
            return {...this.state}
        }
        getFieldValue=(field)=>{
            return this.state[field]
        }
        validateFields=(cb)=>{
            const tmp={...this.state},err=[]
            for(let i in this.options){
                if(tmp[i]===undefined){
                    err.push({[i]:'err'})
                }
            }
            if(err.length>0){
                cb(err,tmp)
            }else{
                cb(undefined,tmp)
            }
            
        }
        render(){
            return (
                <div className="border">
                    <Cmp {...this.props} 
                    getFieldDecorator={this.getFieldDecorator}
                    getFieldsValue={this.getFieldsValue}
                    getFieldValue={this.getFieldValue}
                    validateFields={this.validateFields}
                    ></Cmp>
                </div>
            )
        }
    }
}

//校验规则 
const nameRules = { required: true, message: "please input your name" };
const passwordRules = { required: true, message: "please input your password" };

class MyFormPage extends Component {
    submit = () => {
        const {getFieldsValue,getFieldValue,validateFields} =this.props
        // console.log('submit',getFieldsValue(),getFieldValue('name'));
        validateFields((err, values) => { 
            if (err) { 
                console.log("err", err); 
            } else { 
                console.log("submit", values); 
            } 
        });
    }
    render() {
        const {getFieldDecorator} =this.props
        return (
            <div>
                <h1>MyFormPage</h1>
                {getFieldDecorator("name",{rules:[nameRules]})(<input type="text"/>)}
                {getFieldDecorator("password",{rules:[passwordRules]})(<input type="password"/>)}
                <button onClick={this.submit}>提交</button>
            </div>
        )
    }
}
export default zFormCreate(MyFormPage)