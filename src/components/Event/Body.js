import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'
import MapView from 'react-native-maps'
export default class Body extends Component {
    constructor(props) {
        super(props)
        console.tlog(this.props.event)
    }
    render() {
        let { event } = this.props
        return (
            <View style={styles.scrollViewContent}>
                <View style={styles.card}>
                    <View style={styles.row}>
                        <Icon name="place" />
                        <Text style={styles.desc}>{event.place.name}</Text>
                    </View>
                    <View style={styles.row}>
                        <Icon name="event" />
                        <Text style={styles.desc}>{event.startTime}</Text>
                    </View>
                    <View style={styles.row}>
                        <Icon name="business" />
                        <Text style={styles.desc}>{event.venue.name}</Text>
                    </View>
                </View>
                <View style={styles.card}>
                    <View style={styles.description}>
                        <Text>{event.description}</Text>
                    </View>
                </View>
                <View style={styles.thumbs}>
                    <View style={styles.card}>
                        <View style={styles.stats}>
                            <Icon name="thumb-up" />
                            <Text>{event.stats.attending}</Text>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <View style={styles.stats}>
                            <Icon name="thumb-down" />
                            <Text>{event.stats.declined}</Text>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <View style={styles.stats}>
                            <Icon name="thumbs-up-down" />
                            <Text>{event.stats.maybe}</Text>
                        </View>
                    </View>
                </View>


                <MapView
                    style={styles.map}
                    region={{
                        latitude: event.place.location.latitude,
                        longitude: event.place.location.longitude,
                        latitudeDelta: 0.003,
                        longitudeDelta: 0.0031,
                    }}>
                    <MapView.Marker
                        coordinate={{
                            latitude: event.place.location.latitude,
                            longitude: event.place.location.longitude,
                        }}>
                    </MapView.Marker>
                </MapView>
            </View >
        );
    }
}
const styles = StyleSheet.create({
    scrollViewContent: {
        marginTop: 300
    },
    stats: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },

    map: {
        height: 200,
        flex: 1,
    },
    description: {

    },
    thumbs: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between' 
    },
    row: {
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    card: {
        elevation: 2,
        backgroundColor: "#FFF",
        padding: 10,
        margin: 10,
        flex: 1,
    },
    desc: {
        marginLeft: 10
    }
})