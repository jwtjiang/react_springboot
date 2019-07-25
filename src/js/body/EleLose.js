//防御能力
import React from 'react';
import BodyTop from '../common/BodyTop';
import Percent from '../common/chart/Percent';
import 'antd/dist/antd.css';
import '../../css/body/EleLose.css';
import '../../css/common/Common.css';

class EleLose extends React.Component{
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
                    <div className="rightLeftChar">
                        <Percent/>
                    </div>
                </div>
            </div>
        );
    }
}
export default EleLose;