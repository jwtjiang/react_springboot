//外部环境风险
import React from 'react';
import BodyTop from '../common/BodyTop';
import IntervalSymmetric from '../common/chart/IntervalSymmetric';
import 'antd/dist/antd.css';
import '../../css/common/Common.css';

class Environment extends React.Component{
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
                    <IntervalSymmetric/>
                </div>
            </div>
        );
    }
}
export default Environment;