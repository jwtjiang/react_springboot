//能源供给
import React from 'react';
import BodyTop from '../common/BodyTop';
import Schema from '../common/chart/Schema';
import Line from '../common/chart/Line';
import { Card, Col, Row } from 'antd';
import Interval from '../common/chart/Interval';
import 'antd/dist/antd.css';
import '../../css/common/Common.css';

class Supply extends React.Component{
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
    render() {
        return (
            <div style={{height:'100%'}}>
                <BodyTop title={this.state.title}/>
                <div className="rightLeft" style={{marginLeft: '210px'}}>
                    <Row gutter={10}>
                        <Col span={10}>
                            <Card title="燃煤库存指标" bordered={true}>
                                <Schema style={{width:'600px',marginLeft:'-100px'}} width={600} height={275}/>
                            </Card>
                        </Col>
                        <Col span={14}>
                            <Card title="燃气供应指标" bordered={true}>
                                <Interval width={600} height={275}/>
                            </Card>
                        </Col>
                    </Row>
                    <div style={{marginTop:'0px'}}>
                        <Row gutter={10}>
                            <Col>
                                <Card title="重要水库水位" bordered={false}>
                                    <Line height={275}/>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        );
    }
}
export default Supply;