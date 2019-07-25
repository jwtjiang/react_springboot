import React from 'react';
import { Router, Route, browserHistory  } from 'react-router';
import Home from '../Home';
import App from '../App';
import Poise from '../js/body/Poise';
import EleRota from '../js/body/EleRota';
import EleLose from '../js/body/EleLose';
import Abnormal from '../js/body/Abnormal';
import Way from '../js/body/Way';
import Supply from '../js/body/Supply';
import Defects from "../js/body/Defects";
import Environment from "../js/body/Environment";
import Generation from "../js/body/Generation";
import Blocked from "../js/body/Blocked";
import Given from "../js/body/Given";
import Delivery from '../js/body/Delivery';
class RouterUrl extends React.Component{

    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Home}>
                    <Router  path="/app" component={App}>
                        <Route path="/app/poise" component={Poise}/>
                        <Route path="/app/elerota" component={EleRota}/>
                        <Route  path="/app/elelose" component={EleLose}/>
                        <Route  path="/app/abnormal" component={Abnormal}/>
                        <Route  path="/app/way" component={Way}/>
                        <Route  path="/app/supply" component={Supply}/>
                        <Route  path="/app/defects" component={Defects}/>
                        <Route  path="/app/environment" component={Environment}/>
                        <Route  path="/app/generation" component={Generation}/>
                        <Route  path="/app/blocked" component={Blocked}/>
                        <Route  path="/app/given" component={Given}/>
                        <Route  path="/app/delivery" component={Delivery}/>
                    </Router >
                </Route>
            </Router>
        );
    }
}
export default RouterUrl;
