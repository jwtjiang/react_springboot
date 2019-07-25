import React from 'react';
import ECharts from 'echarts';
import gson from '../../../json/geometryCouties/220100';


class ChinaMap extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    componentDidMount() {
        console.log(this.props.data)
        this.createMap(gson);
    }
    createMap = element => {
        //let _this = this;
        console.log(element)
        //const myChart = ECharts.init(element);
        ECharts.registerMap(this.props.mapType, element);
        const myChart = ECharts.init(document.getElementById('main'));
        const option = {
            tooltip: {
                trigger: 'item',
            },
            dataRange: {
                orient: 'horizontal',
                min: 0,
                max: 55000,
                text: ['高', '低'], // 文本，默认为数值文本
                splitNumber: 0,
                color: ['#2d70d6', '#80b5e9', '#e6feff'],
            },
            series: [
                {
                    name: this.props.name,
                    type: 'map',
                    mapType: this.props.mapType,
                    mapLocation: {
                        x: 'left',
                    },
                    // selectedMode: 'multiple',
                    itemStyle: {
                        normal: {label: {show: true, color: '#222'}, borderWidth: 0},
                        emphasis: { label: { show: true } },
                        borderWidth: 0,
                        borderColor: '#eee',
                    },
                    data: this.props.data,
                },
            ],
            animation: false,
        };
        myChart.setOption(option, true);
    };
    render(){
        return (
            <div className="main"  id ="main" style={{width:'100%',height:'100%'}}>

            </div>
        )
    }
}
export default ChinaMap;