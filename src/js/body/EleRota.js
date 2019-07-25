//调节能力
import React from 'react';
import BodyTop from '../common/BodyTop';
import Interval from '../common/chart/Interval';
import 'antd/dist/antd.css';
import '../../css/common/Common.css';

class EleRota extends React.Component{
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
                    <Interval/>
                </div>
            </div>
        );
    }
}
export default EleRota;