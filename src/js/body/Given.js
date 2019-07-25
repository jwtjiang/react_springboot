//清洁能源受阻情况
import React from 'react';
import BodyTop from '../common/BodyTop';
//import ChinaMap from '../common/chart/ChinaMap';
import EcCategory from '../common/echarts/EcCategory';
import 'antd/dist/antd.css';
import '../../css/common/Common.css';

class Given extends React.Component{
    constructor(props){
        super(props);
        this.state={
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
                    <EcCategory  />
                </div>
            </div>
        );
    }
}
export default Given;