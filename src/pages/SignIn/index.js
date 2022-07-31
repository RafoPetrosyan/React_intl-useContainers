import React from "react";
import { Form, Input, Button } from "antd";
import {UserOutlined, LockOutlined} from '@ant-design/icons';

import UnAuthorizedLayout from "../../layouts/UnAuthorizedLayout";
import useContainer from "./hook";
import "./style.scss";

const SignIn = () => {
    const { onFinish } = useContainer();

    return (
        <UnAuthorizedLayout>
            <div className='signIn'>
                <div className="content">
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                    >
                        {/*<div className='errorDiv'>*/}
                        {/*    <p className='text'>{typeof errorMessage === 'string' ? errorMessage : ''}</p>*/}
                        {/*</div>*/}
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Username!',
                                },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Username"/>
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Password!',
                                },
                            ]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon"/>}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button login-form">
                                Log in
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </UnAuthorizedLayout>
    )
}

export default SignIn;