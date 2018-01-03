import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native'
import ScrollableHeader from '../Event/ScrollableHeader'
import { Icon } from 'react-native-elements';
export default class Event extends Component {
    static navigationOptions = {
        headerStyle: { height: 0 }
    }

    state = {}
    render () {
        return (
            <ScrollableHeader 
                navigation={this.props.navigation}
                event={this.props.navigation.state.params.event}  />
        );
    }
}

