import React, {Component} from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native'
import firebase from '../../plugins/firebase'
import BoxCategory from '../sharedComponents/BoxCategory'
import { NavigationActions } from 'react-navigation'
import EventEmitter from 'EventEmitter';

export default class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: []
        }
    }

    componentWillMount() {
        firebase.database().ref("events/categories")
            .once("value")
            .then(snapshot => {
                this.setState({categories: Object.values(snapshot.val())});
            });
        this.eventEmitter = new EventEmitter();

    }

    sendProps(prop) {
        this.eventEmitter.emit('filter', { filter: prop });

        const navigateAction = NavigationActions.navigate({
            routeName: 'ListEvents',
            params: {filter: prop},
            action: NavigationActions.navigate({ routeName: 'ListEvents'})
        });
        return this.props.navigation.dispatch(navigateAction)
    }
    render() {
        const {navigate} = this.props.navigation;
        return (
            <FlatList
                data={this.state.categories}
                keyExtractor={(item, index) => index}
                renderItem={({item}) => (
                    <TouchableOpacity
                        onPress={() => this.sendProps(item)}>
                        <BoxCategory value={item}/>
                    </TouchableOpacity>
                    )
                }
            />
        )
    }
}