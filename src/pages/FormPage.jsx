import React, { Component } from 'react'
import { Form, Button, Input, Icon } from 'antd'
const FormItem = Form.Item

//校验规则 
const nameRules = { required: true, message: "please input your name" };
const passwordRules = { required: true, message: "please input your password" };

class FormPage extends Component {
    submit = () => {
        const { validateFields, getFieldsValue } = this.props.form;
        // console.log('submit', getFieldsValue());
        validateFields((err, values) => { 
            if (err) { 
                console.log("err", err); 
            } else { 
                console.log("submit", values); 
            } 
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form
        // console.log(this.props.form);

        return (
            <div>
                <h1>FormPage</h1>
                <Form>
                    <FormItem label="姓名">
                        {
                            getFieldDecorator('name', { rules: [nameRules] })(<Input prefix={<Icon type="user"></Icon>}></Input>)
                        }
                    </FormItem>
                    <FormItem label="密码">
                        {
                            getFieldDecorator('password', { rules: [passwordRules] })(<Input type="password" prefix={<Icon type="lock"></Icon>}></Input>)
                        }
                    </FormItem>
                    <FormItem>
                        <Button onClick={this.submit} type="primary">提交</Button>
                    </FormItem>
                </Form>
            </div>
        )
    }
}
export default Form.create()(FormPage);

