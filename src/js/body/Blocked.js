//清洁能源受阻情况
import React from 'react';
import BodyTop from '../common/BodyTop';
//import ChinaMap from '../common/chart/ChinaMap';
import Country from '../common/echarts/Country';
import Axios from 'axios';
//import qs from 'qs';
import 'antd/dist/antd.css';
import '../../css/common/Common.css';

class Blocked extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title:'',
            name:'北京市GDP分布',
            mapType:'北京',
            name1:'全国GDP分布',
            mapType1:'china',
            name2:'长春GDP分布',
            mapType2:'长春',
            data:[
                {name: '延庆区', value: 605.83},
                {name: '怀柔区', value: 1670.44},
                {name: '密云区', value: 905.83},
                {name: '昌平区', value: 2605.83},
                {name: '顺义区', value:11105.83},
                {name: '平谷区', value: 13105.83},
                {name: '海淀区', value: 1115.83},
                {name: '门头沟区', value: 4015.83},
                {name: '石景山区', value: 32105.83},
                {name: '朝阳区', value: 1015.83},
                {name: '通州区', value: 7015.83},
                {name: '丰台区', value: 14105.83},
                {name: '房山区', value: 31215.83},
                {name: '大兴区', value: 8805.83},
                {name: '东城区', value: 48805.83},
            ],
            data1:[
                {name: '西藏', value: 605.83},
                {name: '青海', value: 1670.44},
                {name: '宁夏', value: 2102.21},
                {name: '海南', value: 2522.66},
                {name: '甘肃', value: 5020.37},
                {name: '贵州', value: 5701.84},
                {name: '新疆', value: 6610.05},
                {name: '云南', value: 8893.12},
                {name: '重庆', value: 10011.37},
                {name: '吉林', value: 10568.83},
                {name: '山西', value: 11237.55},
                {name: '天津', value: 11307.28},
                {name: '江西', value: 11702.82},
                {name: '广西', value: 11720.87},
                {name: '陕西', value: 12512.3},
                {name: '黑龙江', value: 12582},
                {name: '内蒙古', value: 14359.88},
                {name: '安徽', value: 15300.65},
                {name: '北京', value: 16251.93, selected: true},
                {name: '福建', value: 17560.18},
                {name: '上海', value: 19195.69, selected: true},
                {name: '湖北', value: 19632.26},
                {name: '湖南', value: 19669.56},
                {name: '四川', value: 21026.68},
                {name: '辽宁', value: 22226.7},
                {name: '河北', value: 24515.76},
                {name: '河南', value: 26931.03},
                {name: '浙江', value: 32318.85},
                {name: '山东', value: 45361.85},
                {name: '江苏', value: 49110.27},
                {name: '广东', value: 53210.28, selected: true},
            ],
            data2:null,
            dataa:[
                {name: '农安县', value: 605.83},
                {name: '榆树市', value: 1670.44},
                {name: '德惠市', value: 2102.21},
                {name: '宽城区', value: 2522.66},
                {name: '九台市', value: 5020.37},
                {name: '二道区', value: 17560.18},
                {name: '双阳区', value: 32318.85},
                {name: '朝阳区', value: 45361.85},
                {name: '南关区', value: 49110.27},
                {name: '绿园区', value: 53210.28},
            ]
        }
    }
    componentWillMount() {
        console.log("dada")
        Axios.post('http://localhost:8888/eley/get',{'name':this.state.dataa}).then((data)=>{
            console.log(data.data);
            this.setState({
                data2: data.data
            },function () {
                
            });
        });
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
                    {this.state.data2?<Country data={this.state.data2} name = {this.state.name2}  mapType ={this.state.mapType2} />:""}
                </div>
            </div>
        );
    }
}
export default Blocked;