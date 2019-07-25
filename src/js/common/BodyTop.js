import React from 'react';
import {Icon} from "antd";


class BodyTop extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title:[],
            titleName:[
                {
                    id:'poise',
                    name:'平衡能力',
                    faName:'安全高效'
                },
                {
                    id:'eleRota',
                    name:'调节能力',
                    faName:'安全高效'
                },
                {
                    id:'eleLose',
                    name:'防御能力',
                    faName:'安全高效'
                },
                {
                    id:'abnormal',
                    name:'运行异常',
                    faName:'安全高效'
                },
                {
                    id:'way',
                    name:'运行方式风险',
                    faName:'安全高效'
                },
                {
                    id:'supply',
                    name:'能源供给',
                    faName:'安全高效'
                },{
                    id:'defects',
                    name:'重要设备缺陷',
                    faName:'安全高效'
                },
                {
                    id:'environment',
                    name:'外部环境风险',
                    faName:'安全高效'
                },
                {
                    id:'generation',
                    name:'清洁能源发电',
                    faName:'安全高效'
                },
                {
                    id:'blocked',
                    name:'清洁能源受阻情况',
                    faName:'安全高效'
                },{
                    id:'given',
                    name:'清洁能源消纳能力',
                    faName:'安全高效'
                },
                {
                    id:'delivery',
                    name:'联络线输送能力',
                    faName:'安全高效'
                },
                {
                    id:'organization',
                    name:'组织架构',
                    faName:'安全高效'
                },
                {
                    id:'role',
                    name:'角色管理',
                    faName:'安全高效'
                },
                {
                    id:'user',
                    name:'用户管理',
                    faName:'安全高效'
                },
            ]
        }

    }
    render() {
        return (
            <div className="rightTop">
                {this.state.titleName.map((item,index)=>{

                        return item.id === this.props.title?<span key={index} style={{marginLeft:'15px',fontSize:'20px'}}>{item.faName}{<Icon type="right"  style={{marginLeft:'10px',marginRight:'10px' }}/>}{item.name}</span>:""

                })}
            </div>
        );
    }
}
export  default  BodyTop;