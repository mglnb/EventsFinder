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
    ActivityIndicator
} from 'react-native';
import BoxEvents from '../sharedComponents/BoxEvents'
import _ from 'lodash';
import firebase from '../../plugins/firebase'
export default class ListEvents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: ['1'],
            eventsFiltered: [],
            filter: '',
            isLoading: false,
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
    componentWillMount() {
        this.setState({ isLoading: true })
        console.log('mounted')
        fetch('https://eventos-pelotas.firebaseio.com/events/list.json')
            .then(response => response.json())
            .then(response => this.setState({
                events: _.orderBy(response, 'startTime'),
                isLoading: false
            }))
            .then(() => { 
                let haveFilter = this.props.navigation.state && this.props.navigation.state.params && this.props.navigation.state.params.filter || null
                if (haveFilter)   {
                    let filtered = this.state.events.filter((value, index) => value.venue.categoryList.indexOf(this.props.navigation.state.params.filter) > -1);
                    this.setState({ 
                        eventsFiltered: filtered,
                        haveFilter: true,
                    })
                }
            })
            .catch(e => console.error(e))


    }
 
    isLoading() { 
        return this.state.isLoading ? <ActivityIndicator size="large" style={styles.activity} color="#0000ff" /> : undefined
    }

    render() {
        let events = this.state.haveFilter ? this.state.eventsFiltered : this.state.events;
        if (events.length > 0) {
            if (!this.isLoading()) {
                return (
                    <View>
                        <FlatList data={this.state.haveFilter ? this.state.eventsFiltered : this.state.events}
                            keyExtractor={(item, index) => item.id}
                            renderItem={({ item }) => <BoxEvents value={item} key={item.id} />} />
                    </View>
                );
            }
            return this.isLoading()
        }
        return (<Text style={styles.textError}> Não há eventos com este filtro, tente novamente mais tarde. :(</Text>)
    }
}

const styles = StyleSheet.create({
    textError: {
        fontSize: 24,
        flex: 1,
        textAlign: 'center',
        textAlignVertical: 'center',
        alignItems: 'stretch',
        justifyContent: 'center'
    },
    activity: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});