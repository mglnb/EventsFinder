import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native'

export default class BoxCategory extends Component {
    constructor(props) {
        super(props);
    }

    render() { 
        return (
            <View style={styles.container}> 
                <Text style={[styles.text, {color : this.props.color}]}>{this.props.value}</Text>
            </View>
        )
    } 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
    },
    text: {
        
        textAlign: 'center',
    }

})