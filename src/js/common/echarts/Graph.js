import React from 'react';
import ReactEcharts from 'echarts-for-react';
import { notification } from 'antd';
import 'antd/dist/antd.css';
import Axios from "axios";




class Graph extends React.Component{
    constructor(props){
        super(props);
        this.state={
            option : {
                title: {
                    text: 'Graph 简单示例'
                },
                tooltip: {},
                animationDurationUpdate: 1500,
                animationEasingUpdate: 'quinticInOut',
                series : [
                    {
                        type: 'graph',
                        layout: 'none',
                        symbolSize: 50,
                       // roam: true,
                        label: {
                            normal: {
                                show: true
                            }
                        },
                        edgeSymbol: ['circle', 'arrow'],
                        edgeSymbolSize: [4, 10],
                        edgeLabel: {
                            normal: {
                                textStyle: {
                                    fontSize: 20
                                }
                            }
                        },
                        data: [{
                            name: '节点1',
                            x: 300,
                            y: 300
                        }, {
                            name: '节点2',
                            x: 800,
                            y: 300
                        }, {
                            name: '节点3',
                            x: 550,
                            y: 100
                        }, {
                            name: '节点4',
                            x: 550,
                            y: 500
                        }, {
                            name: '节点5',
                            x: 550,
                            y: 300
                        }],
                        // links: [],
                        links: [{
                            source: 0,
                            target: 1,
                            //symbolSize: [5, 20],
                            label: {
                                normal: {
                                    show: true
                                }
                            },
                            lineStyle: {
                                normal: {
                                    // width: 5,
                                    curveness: 0.2
                                }
                            }
                        }, {
                            source: '节点2',
                            target: '节点1',
                            label: {
                                normal: {
                                    show: true
                                }
                            },
                            lineStyle: {
                                normal: { curveness: 0.2 }
                            }
                        }, {
                            source: '节点1',
                            target: '节点3'
                        }, {
                            source: '节点2',
                            target: '节点3'
                        }, {
                            source: '节点2',
                            target: '节点4'
                        }, {
                            source: '节点1',
                            target: '节点4'
                        },
                            {
                                source: '节点1',
                                target: '节点5'
                            }],
                        lineStyle: {
                            normal: {
                                opacity: 0.9,
                                width: 2,
                                curveness: 0
                            }
                        }
                    }
                ]
            }
        }
    }
    onClick=(e)=>{
        Axios.post('http://localhost:8888/eley/getInfo','').then((data)=>{
            console.log(data.data);
            data.data[0].title = e.name;
            this.openNotification(data.data);
        });
        console.log(e)
    }
    openNotification = (e) => {
        const key = `open${Date.now()}`;
        notification.open({
            message: e[0].title,
            description:'名称：'+e[0].NAME+",年龄："+e[0].AGE,
            key,
            placement:'bottomRight',
        });
    };
    componentDidMount() {
    }

    render(){
        let onEvents = { 'click': this.onClick,}
        return (
            <div className="main"  id ="main" style={{width:'100%',height:'100%'}}>
                <ReactEcharts onEvents={onEvents}  option={this.state.option} style={{height:'500px'}} className="echarts_r"/>
            </div>
        )
    }
}
export default Graph;