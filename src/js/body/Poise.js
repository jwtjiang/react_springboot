//平衡能力
import React from 'react';
import BodyTop from '../common/BodyTop';
import Line from '../common/chart/Line';
import Graph from '../common/echarts/Graph';
import { Tabs,Table, Modal } from 'antd';
//import { StickyContainer, Sticky } from 'react-sticky';
import 'antd/dist/antd.css';
import '../../css/common/Common.css';
const { TabPane } = Tabs;
class Poise extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title:'',
            visible: false,
            record:{},
            dataSource : [
                {
                    key: '1',
                    name: '胡彦斌',
                    age: 32,
                    address: '西湖区湖底公园1号',
                },
                {
                    key: '2',
                    name: '胡彦祖',
                    age: 35,
                    address: '西湖区湖底公园1号',
                },
                {
                    key: '34',
                    name: '胡彦祖',
                    age: 34,
                    address: '西湖区湖底公园1号',
                },
                {
                    key: '33',
                    name: '胡彦祖',
                    age: 33,
                    address: '西湖区湖底公园1号',
                },
                {
                    key: '43',
                    name: '胡彦祖',
                    age: 43,
                    address: '西湖区湖底公园1号',
                },
                {
                    key: '44',
                    name: '胡彦祖',
                    age: 44,
                    address: '西湖区湖底公园1号',
                },
                {
                    key: '45',
                    name: '胡彦祖',
                    age: 45,
                    address: '西湖区湖底公园1号',
                },
                {
                    key: '46',
                    name: '胡彦祖',
                    age: 46,
                    address: '西湖区湖底公园1号',
                },
                {
                    key: '47',
                    name: '胡彦祖',
                    age: 47,
                    address: '西湖区湖底公园1号',
                },
                {
                    key: '48',
                    name: '胡彦祖',
                    age: 48,
                    address: '西湖区湖底公园1号',
                },
                {
                    key: '49',
                    name: '胡彦祖',
                    age: 49,
                    address: '西湖区湖底公园1号',
                },
            ],
            columns : [
                {
                    title: '姓名',
                    dataIndex: 'name',
                    key: 'name',
                    render:(text,record)=>{

                        return <span style={{color:'#1890ff',cursor: 'pointer'}} onClick={()=>this.onClickRow(text,record)}>
                        {record.name}
                    </span>
                    }
                },
                {
                    title: '年龄',
                    dataIndex: 'age',
                    key: 'age',
                },
                {
                    title: '住址',
                    dataIndex: 'address',
                    key: 'address',
                },
            ]
        }
    }
    componentDidMount() {
        let value = this.props.location.state;
        this.setState({
            title:value,
        })
    }
    componentWillReceiveProps(nextProps, nextContext) {
        let value = this.props.location.state;
        this.setState({
            title:value,
        })
    }
    callback(key) {
        console.log(key);
    }
    onClickRow =(text,record)=>{
        console.log(text)
        console.log(record)
    }
    onClickRows =(value,record,rowkey)=>{
        console.log(value)
        console.log(record)
        console.log(rowkey)
        this.setState({
            visible: true,
            record
        });
    }

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };
    render() {
        return (
            <div style={{height:'100%'}}>
                <BodyTop title={this.state.title}/>
                <div className="rightLeft" style={{marginLeft: '210px'}}>
                    <Tabs defaultActiveKey="1" onChange={this.callback}>
                        <TabPane tab="电网旋转备用" key="1">
                            <Line/>
                        </TabPane>
                        <TabPane tab="电网负备用" key="2">
                            <Table
                                bordered
                                onRow={(record,rowkey)=>{
                                    return{
                                        onClick : ()=>{this.onClickRows(this,record,rowkey) }   //点击行 record 指的本行的数据内容，rowkey指的是本行的索引
                                        //onClick : this.onClickRows.bind(this,record,rowkey)
                                    }
                                }}
                                // onRowClick={(record, index, event)=>this.onClickRows(record, index, event)}//点击事件 提示使用onRow
                                // onRowDoubleClick={(record, index, event)=>this.onClickRows(record, index, event)}//双击事件 提示使用onRow
                                dataSource={this.state.dataSource}
                                columns={this.state.columns}
                                pagination//分页
                            />
                        </TabPane>
                        <TabPane tab="局部电网发受用电平衡裕度" key="3">
                            <Graph  />
                        </TabPane>
                        <TabPane tab="分区电网发受用电平衡裕度" key="4">
                            <Line/>
                        </TabPane>
                        <TabPane tab="跨区跨省交直流通道支援能力" key="5">
                            Content of Tab Pane 2
                        </TabPane>
                        <TabPane tab="抽蓄/储能调节能力" key="6">
                            Content of Tab Pane 3
                        </TabPane>
                        <TabPane tab="可调度负荷容量" key="7">
                            Content of Tab Pane 3
                        </TabPane>
                    </Tabs>
                </div>
                <div>
                    <Modal
                        title="信息详情"
                        visible={this.state.visible}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                    >
                        <p><span>姓名：{this.state.record.name}</span></p>
                        <p><span>年龄：{this.state.record.age}</span></p>
                        <p><span>地址：{this.state.record.address}</span></p>
                    </Modal>
                </div>
            </div>
        );
    }
}
export default Poise;