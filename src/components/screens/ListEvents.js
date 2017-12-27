import React, {
    Component
} from 'react';
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
            eventsFiltered: [],
            filter: '',
            haveFilter: false,
        };
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
        if (nextProps.navigation.state.params.filter) {
            let filtered = this.state.events.filter((value, index) => value.venue.categoryList.indexOf(nextProps.navigation.state.params.filter) > -1);
            this.setState({
                eventsFiltered: filtered,
                haveFilter: true,
            })
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('should?', nextProps, nextState);
        return true
    }
    componentWillMount() {
        console.log('mounted')
        fetch('https://eventos-pelotas.firebaseio.com/events/list.json')
            .then(response => response.json())
            .then(response => this.setState({
                events: _.orderBy(response, 'startTime')
            }))
        const {
            filter
        } = this.state;
    }

    componentDidMount() {

    } 

    render() {
        let events = this.state.haveFilter ? this.state.eventsFiltered : this.state.events;        
        if(events.length > 0) {
            return (  
                <FlatList data={this.state.haveFilter ? this.state.eventsFiltered : this.state.events}
                    keyExtractor={(item, index) => item.id}
                    renderItem={({ item }) => <BoxEvents value={item} key={item.id} />} />
                );
        }
        return (<Text style={styles.textError}> Não há eventos com este filtro. </Text>)
    }
}

const styles = StyleSheet.create({
    textError : {
        fontSize: 20,
        alignSelf: 'center',
    }
});