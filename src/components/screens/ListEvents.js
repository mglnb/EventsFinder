import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import BoxEvents from '../sharedComponents/BoxEvents'
import _ from 'lodash';
import firebase from '../../plugins/firebase'

export default class ListEvents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
            filter: this.props.navigation.state.filter || ''
        };
    }

    componentDidUpdate(prevProps, prevState) {
        console.ltron(this.state.filter)
    }

    componentWillMount() {
        firebase.database().ref("events/list")
            .once("value")
            .then(snapshot => {
                this.setState({events: _.orderBy(snapshot.val(), 'startTime')});
            });
        const {filter} = this.state;
        this.setState({
            events: _.filter(this.state.events, (o) => o.venue.category !== state.params.filter)
        });
    }

    componentDidMount() {
        this.addListenerOn(this.props.filter, 'filter', this.miscFunction);

    }

    render() {
        return (
            <FlatList
                data={this.state.events}
                keyExtractor={(item, index) => item.id}
                renderItem={({item}) => <BoxEvents value={item} key={item.id}/>}
            />
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
