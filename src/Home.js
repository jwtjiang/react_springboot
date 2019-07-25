import React from 'react';
import { Form, Icon, Input, Button } from 'antd';
import { browserHistory } from 'react-router';
import 'antd/dist/antd.css';
import './Home.css';
class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            flag:false
        }
    }
    componentDidMount() {
        let eflag = this.props.location.pathname === '/'?false:true;
        let flag = false;
        if(eflag){
            flag = sessionStorage.getItem('flag')==='1'?true:false;
        }
        this.setState({
            flag:flag
        })
    }

    componentWillReceiveProps(nextProps, nextContext) {
        let eflag = nextProps.location.pathname === '/'?false:true;
        let flag = false;
        if(eflag){
            flag = sessionStorage.getItem('flag')==='1'?true:false;
        }
        this.setState({
            flag:flag
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.props.from1)
        this.props.form.validateFields((err, values) => {
            console.log(values)
            if (!err) {
                this.setState({
                    flag:true
                })
                browserHistory.push({
                    pathname: '/app',
                    state:values
                });
                sessionStorage.clear();
                sessionStorage.setItem("flag",'1');
                sessionStorage.setItem("username",values.username);
            }
        });
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="home">
                {
                    this.state.flag?this.props.children:<div className="login">
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <Form.Item>
                                {getFieldDecorator('username', {
                                    rules: [{ required: true, message: 'Please input your username!' }],
                                })(
                                    <div>
                                    <Input
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="Username"
                                        style={{width:'200px'}}
                                    />
                                    </div>,
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: 'Please input your Password!' }],
                                })(
                                    <Input
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="password"
                                        placeholder="Password"
                                        style={{width:'200px'}}
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                   登录
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                }
            </div>
        );
    }
}
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Home);
export default WrappedNormalLoginForm;