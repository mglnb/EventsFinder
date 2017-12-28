
import React, {Component} from 'react';
import Main from './src/components/screens/ListEvents';
import './src/plugins/reactotron'
import { Tabs } from "./src/plugins/router";

export default class App extends Component {
    constructor() {
        super();
        console.ignoredYellowBox = ['Setting a timer', 'Remote debugger is in background'];
    }


    render() {
        return (
            <Tabs> </Tabs> 
        );
    }
}


