//运行异常
import React from 'react';
import BodyTop from '../common/BodyTop';
import Point from '../common/chart/Point';
import { Tabs } from 'antd';
//import { StickyContainer, Sticky } from 'react-sticky';
import 'antd/dist/antd.css';
import '../../css/common/Common.css';
const { TabPane } = Tabs;

class Delivery extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title:'',
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
    render() {
        return (
            <div style={{height:'100%'}}>
                <BodyTop title={this.state.title}/>
                <div className="rightLeft" style={{marginLeft: '210px'}}>
                    <Tabs defaultActiveKey="1" onChange={this.callback}>
                        <TabPane tab="Tab 1" key="1">
                            <Point/>
                        </TabPane>
                        <TabPane tab="Tab 2" key="2">
                            Content of Tab Pane 2
                        </TabPane>
                        <TabPane tab="Tab 3" key="3">
                            Content of Tab Pane 3
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        );
    }
}
export default Delivery;