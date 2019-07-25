import React from 'react';
import { browserHistory } from 'react-router';
import $ from 'jquery';
//import { createHashHistory,createBrowserHistory } from 'history';
import { Menu, Icon } from 'antd';
import 'antd/dist/antd.css';
import '../../css/body/Menus.css';


class Menus extends React.Component {
    // submenu keys of first level
    constructor(props){
        super(props);
        this.state = {
            selectedKeys:['poise'],
            collapsed: false,
        };
    }
    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            selectedKeys:[sessionStorage.getItem('key')?sessionStorage.getItem('key'):'poise']
        })
    }

    btnOnclick=(item, key, keyPath, domEvent)=>{
        console.log(item)
        this.setState({
            selectedKeys:[item.key]
        })
        //把选中的菜单放到session中
        sessionStorage.setItem('key',item.key);
        browserHistory.push({
            pathname:"/app/"+item.key,
            state:item.key
        })
    }
    toggleCollapsed=()=>{
        if(!this.state.collapsed){
            $('.rightLeft').css('margin-left','130px');
        }else{
            $('.rightLeft').css('margin-left','210px');
        }
        this.setState({
            collapsed:!this.state.collapsed
        })
    }
    render() {
        return (
            <div style={{ width: this.state.collapsed ?'100px':'180px'}}>
                <div  onClick={this.toggleCollapsed} style={{height:'35px',background: 'rgb(40, 149, 156)',textAlign:'center',cursor:'pointer'}}>
                    <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} style = {{marginTop:'6px',fontSize:'24px'}} />
                </div>
                <div className="Mtop">
                    <Menu
                        mode="inline"
                        style={{height:"100%" }}
                        onClick={this.btnOnclick}
                        selectedKeys={this.state.selectedKeys}
                        inlineCollapsed={this.state.collapsed}
                    >
                        <div>
                            安全高效
                        </div>
                        <Menu.Item key="poise"><span><Icon type="database" /><span>平衡能力</span></span></Menu.Item>
                        <Menu.Item key="eleRota"><span><Icon type="menu" /><span>调节能力</span></span></Menu.Item>
                        <Menu.Item key="eleLose"><span><Icon type="bar-chart" /><span>防御能力</span></span></Menu.Item>
                        <Menu.Item key="abnormal"><span><Icon type="pie-chart" /><span>运行异常</span></span></Menu.Item>
                        <Menu.Item key="way"><span><Icon type="gateway" /><span>运行方式风险</span></span></Menu.Item>
                        <Menu.Item key="supply"><span><Icon type="wallet" /><span>能源供给</span></span></Menu.Item>
                        <Menu.Item key="defects"><span><Icon type="funnel-plot" /><span>重要设备缺陷</span></span></Menu.Item>
                        <Menu.Item key="environment"><span><Icon type="file-exclamation" /><span>外部环境风险</span></span></Menu.Item>
                        <div>
                            清洁低碳
                        </div>
                        <Menu.Item key="generation"><span><Icon type="sync" /><span>清洁能源发电</span></span></Menu.Item>
                        <Menu.Item key="blocked"><span><Icon type="control" /><span>清洁能源受阻情况</span></span></Menu.Item>
                        <Menu.Item key="given"><span><Icon type="experiment" /><span>清洁能源消纳能力</span></span></Menu.Item>
                        <Menu.Item key="delivery"><span><Icon type="branches" /><span>联络线输送能力</span></span></Menu.Item>
                        <div>
                            权限管理
                        </div>
                        <Menu.Item key="organization"><span><Icon type="usergroup-add" /><span>组织架构</span></span></Menu.Item>
                        <Menu.Item key="role"><span><Icon type="trademark" /><span>角色管理</span></span></Menu.Item>
                        <Menu.Item key="user"><span><Icon type="user" /><span>用户管理</span></span></Menu.Item>
                    </Menu>
                </div>
            </div>
        );
    }
}
export default Menus;