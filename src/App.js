import React from 'react';
import './App.css';
import { browserHistory } from 'react-router';
import Websocket from 'react-websocket';
import Menus from './js/menu/Menus';
import img from  './image/3.jpg';
import {Icon, Tooltip,Dropdown,Menu,Button, notification} from "antd";
import 'antd/dist/antd.css';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            visible: false,
            websock:null,
        }
    }
    componentDidMount() {
        this.setState({
            username:sessionStorage.getItem("username"),
        })
    }

    websocketonmessage=(e)=>{ //数据接收
        //const redata = JSON.parse(e.data);
        //注意：长连接我们是后台直接1秒推送一条数据，
        //但是点击某个列表时，会发送给后台一个标识，后台根据此标识返回相对应的数据，
        //这个时候数据就只能从一个出口出，所以让后台加了一个键，例如键为1时，是每隔1秒推送的数据，为2时是发送标识后再推送的数据，以作区分
        console.log(e);
        this.openNotification(e);
    };

    handleMenuClick = e => {
        if(e.key === '2') {
            browserHistory.push('/');
            sessionStorage.setItem('flag','0');
            sessionStorage.removeItem('username');
        }

    };

    handleVisibleChange = flag => {
        this.setState({ visible: flag });
    };

    close = () => {
        console.log(
            'Notification was closed. Either the close button was clicked or duration time elapsed.',
        );
    };
    onInfo = () => {
        console.log(
            '查看详情'
        );
    };

     openNotification = (value) => {
        const key = `open${Date.now()}`;
        const btn = (
           <div>
               <Button type="primary" size="small" onClick={() => notification.close(key)}>
                   关闭
               </Button>
               <Button style={{marginLeft:'10px'}} type="primary" size="small" onClick={() => this.onInfo()}>
                   详情
               </Button>
           </div>
        );
        notification.open({
            message: '推送消息',
            description:value,
            icon:<Icon type="sound" style={{ color: '#108ee9' }}  />,
            btn,
            key,
            placement:'bottomRight',
            duration:null,
            onClose: this.close,
        });
    };

    render(){
        const menu = (
            <Menu onClick={this.handleMenuClick}>
                <Menu.Item key="1">修改密码</Menu.Item>
                <Menu.Item key="2">退出登录</Menu.Item>
            </Menu>
        );
        return (
            <div style={{height:'100%'}}>
                <Websocket url={'ws://localhost:8083/webSocket/11111'}
                           onMessage={this.websocketonmessage.bind(this)} />
                <div className="top">
                    <img className="topImge" src={img} alt=""/>
                    <span className="span">电网调度运行实时评估系统</span>
                    <div className="rightIcon">
                        <Tooltip placement="bottom" title="首页" overlayStyle={{color:'#eee'}}>
                            <Icon type="bank" theme="filled" style={{ fontSize: '20px', color: '#fff',marginRight:'35px',cursor: 'pointer' }}/>
                        </Tooltip>
                        <Tooltip placement="bottom" title="消息" overlayStyle={{color:'#eee'}}>
                            <Icon type="bell" theme="filled" style={{ fontSize: '20px', color: '#fff',marginRight:'35px',cursor: 'pointer' }}/>
                        </Tooltip>
                        <Tooltip placement="bottom" title="系统设置" overlayStyle={{color:'#eee'}}>
                            <Icon type="setting" theme="filled" style={{ fontSize: '20px', color: '#fff',marginRight:'35px',cursor: 'pointer' }}/>
                        </Tooltip>
                        <Tooltip placement="bottom" title="帮助" overlayStyle={{color:'#eee'}}>
                            <Icon type="question-circle" theme="filled" style={{ fontSize: '20px', color: '#fff',marginRight:'35px',cursor: 'pointer' }}/>
                        </Tooltip>
                        <Tooltip placement="bottom" title="" overlayStyle={{color:'#eee'}}>
                            <span><Icon type="user"  style={{ fontSize: '20px', color: '#fff',marginRight:'5px',cursor: 'pointer' }}/><span style={{ fontSize: '20px', color: '#fff',marginRight:'5px',cursor: 'pointer' }}>{this.state.username}</span>
                                 <Dropdown
                                     overlay={menu}
                                     onVisibleChange={this.handleVisibleChange}
                                     visible={this.state.visible}
                                 >
                                     <Icon type="caret-down"  style={{ fontSize: '20px', color: '#fff',marginRight:'35px',cursor: 'pointer' }}/>
                                 </Dropdown>
                            </span>
                        </Tooltip>
                    </div>
                </div>
                <div style={{height:'91%'}}>
                    <div className="left">
                        <Menus/>
                    </div>
                    <div className="right">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
