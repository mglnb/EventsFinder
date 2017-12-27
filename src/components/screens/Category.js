import React, {Component} from 'react';
import {Text, View, FlatList, TouchableOpacity, StyleSheet} from 'react-native'
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
        fetch('https://eventos-pelotas.firebaseio.com/events/categories.json')
            .then(response => response.json())
            .then(response => this.setState({categories: Object.values(response)})) 
        this.eventEmitter = new EventEmitter();

    }
    render() {
        const {navigate} = this.props.navigation;
        return (
            <FlatList
                data={this.state.categories} 
                keyExtractor={(item, index) => index}
                numColumns={2} 
                renderItem={({item}) => ( 
                    <TouchableOpacity  
                        style={styles.touchableBox}
                        onPress={() => navigate("ListEvents", {filter: item})}>
                        <BoxCategory pointerEvents='box-only' value={item}/> 
                    </TouchableOpacity>   
                    )
                }
            />
        )
    }
} 

const styles = StyleSheet.create({
   touchableBox: {
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center',
   }
}); 