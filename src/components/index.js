import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import BoxEvents from './sharedComponents/BoxEvents'
import _ from 'lodash';
import firebase from '../plugins/firebase'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
        };
    }

    componentWillMount() {
        firebase.database().ref("events/list")
            .once("value")
            .then(snapshot => {
                this.setState({events: _.orderBy(snapshot.val(), 'startTime')});
            });
    }

    render() {
        let {events} = this.state;
        return (
            <FlatList style={styles.container}>
                {events.map(value => {
                    return <BoxEvents value={value} key={value.id}/>;
                })}
            </FlatList>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 8,
        backgroundColor: '#ecf0f1',
        paddingLeft: 5,
        paddingRight: 15,
    }
});
