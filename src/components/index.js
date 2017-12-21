import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import BoxEvents from './sharedComponents/BoxEvents'
import _ from 'lodash';
import firebase from 'react-native-firebase';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
        };
    }

    async componentWillMount() {
        let array = [];
        // for (let i = 0; i < 10000; i += 500) {
        //     console.log(i);
            await fetch(
                'https://events-facebook.herokuapp.com/events?lat=-31.7452702&lng=-52.3468351&distance=' + 1000 + '&sort=time&showActiveOnly=false&accessToken=1772639816363661|MI7I_9u05sr7vW6LzDLRv__2brI'
            )
                .then(response => response.json())
                .then(response => {
                    array = [
                        ...array,
                        ...response.events
                    ]
                })
                .then(() => console.log(new Date(), this.state.events));
        // }
        let newArray = this.removeDuplicates(array, 'id');
        let orderArray = _.orderBy(newArray, 'startTime');
        this.setState({events: orderArray});
    }

    removeDuplicates(myArr, prop) {
        return myArr.filter((obj, pos, arr) => {
            return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
        });
    }

    render() {
        let {events} = this.state;
        return (
            <ScrollView style={styles.container}>
                {events.map(value => {
                    return <BoxEvents value={value} key={value.id}/>;
                })}
            </ScrollView>
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
