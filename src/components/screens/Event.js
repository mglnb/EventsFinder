import React, { Component } from 'react';
import { Text } from 'react-native'
import ScrollableHeader from '../Event/ScrollableHeader'
export default class Event extends Component {
    static navigationOptions = {
        headerStyle: { height: 0 }
    }
    state = {}
    render () {
        return (
            <ScrollableHeader event={this.props.navigation.state.params.event} />
        );
    }
}