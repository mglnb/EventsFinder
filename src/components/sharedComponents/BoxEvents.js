import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    ScrollView,
    TouchableOpacity,
} from 'react-native';

export default class BoxEvents extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let time = this.props.value.startTime + '';
        let date = time.split('T')[0].split('-').reverse().join('/');
        let hour = time.split('T')[1] + '';
        let { navigate } = this.props.navigation
        return (   
            <TouchableOpacity onPress={() => navigate("Events", {event: this.props.value})} activeOpacity={0.5} key={this.props.value.id}>

                <View style={styles.boxEvent}>
                    <Image
                        style={styles.eventPicture}
                        source={{ uri: this.props.value.coverPicture }}
                    />
                    <View style={styles.event}>
                        <Text style={styles.title}>{this.props.value.name.toUpperCase()}</Text>
                        <View style={styles.description}>
                            <Text style={styles.place}>
                                {this.props.value.place && this.props.value.place.name}
                            </Text>
                            <Text style={styles.time}>
                                {date} {hour.split('-')[0].substring(0, 5)}
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

}


const styles = StyleSheet.create({
    eventPicture: {
        alignSelf: 'stretch',
        height: 120,
    },
    boxEvent: {
        flexWrap: 'nowrap',
        flexDirection: 'column',
        alignItems: 'flex-start',
        borderWidth: 1,
        borderColor: '#cccccc',
        margin: 10,
        elevation: 2,
        borderRadius: 3,
        backgroundColor: '#FFFFFF',
    },
    event: {
        flex: 2,
        alignSelf: 'stretch',
        marginTop: 5,
        padding: 15,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        letterSpacing: 1,

    },
    place: {
        fontSize: 12,
    },
    time: {
        fontSize: 10,
    },
    description: {
        alignSelf: 'stretch',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
});
