import React, { Component } from 'react';
import { Text, View, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native'
import firebase from '../../plugins/firebase'
import BoxCategory from '../sharedComponents/BoxCategory'
import LinearGradient from 'react-native-linear-gradient'
import { NavigationActions } from 'react-navigation'
export default class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            isLoading: false
        }
    }

    componentWillMount() {
        this.setState({ isLoading: true })
        fetch('https://eventos-pelotas.firebaseio.com/events/categories.json')
            .then(response => response.json())
            .then(response => this.setState({ categories: Object.values(response), isLoading: false }))

    }
    render() {
        const { navigate } = this.props.navigation;
        return this.state.isLoading
            ?
            <ActivityIndicator size="large" style={styles.activity} color="#0000ff" />
            :
            (
                <View>
                    <FlatList
                        data={this.state.categories}
                        keyExtractor={(item, index) => index}
                        numColumns={2}
                        style={{ marginBottom: 0 }}
                        renderItem={
                            ({ item }) => (
                                <LinearGradient
                                    start={{ x: 0.0, y: 1 }} end={{ x: 1, y: .5 }}
                                    colors={['#35C9FF', '#5480F3']}
                                    style={styles.linearGradient}
                                    locations={[.1, 1]}
                                >
                                    <TouchableOpacity
                                        style={styles.touchableBox}
                                        onPress={() => navigate("ListEvents", { filter: item })}>
                                        <BoxCategory pointerEvents='box-only' value={item} />
                                    </TouchableOpacity>
                                </LinearGradient>
                            )
                        }
                    />
                </View>
            )
    }
}
const styles = StyleSheet.create({
    touchableBox: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff', 
        margin:2,
        borderRadius: 80,
    },
    linearGradient: {
        margin: 10,
        flex: 1,
        borderRadius: 80,
    },
    activity: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    }
}); 