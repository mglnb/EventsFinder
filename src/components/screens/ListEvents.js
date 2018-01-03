/* global fetch */
import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList, ActivityIndicator } from 'react-native'
import BoxEvents from '../sharedComponents/BoxEvents'
import _ from 'lodash'
import Touchable from '../sharedComponents/Touchable'
import { Icon } from 'react-native-elements';
export default class ListEvents extends Component {
  constructor (props) {
    super(props)
    this.state = {
      events: ['1'],
      eventsFiltered: [],
      filter: '',
      isLoading: false,
      haveFilter: false
    }
  }

  componentWillReceiveProps (nextProps) {
    console.tlog(nextProps)
    if (nextProps.navigation.state.params.filter) {
      let filtered = this.state.events.filter((value, index) => value.venue.categoryList.indexOf(nextProps.navigation.state.params.filter) > -1)
      this.setState({
        eventsFiltered: filtered,
        haveFilter: true
      })
    }
  }
  componentWillMount () {
    this.setState({ isLoading: true })
    console.tlog('mounted')
    fetch('https://eventos-pelotas.firebaseio.com/events/list.json')
      .then(response => response.json())
      .then(response => this.setState({
        events: _.orderBy(response, 'startTime'),
        isLoading: false
      }))
      .then(() => {
        console.log(this.state.events)
        this.setState({
          events: this.state.events.filter((value, index) => new Date(value.startTime) > new Date())
        })
        console.log(this.state.events)
      })
      .then(() => {
        let haveFilter = this.props.navigation.state && this.props.navigation.state.params && this.props.navigation.state.params.filter || null
        if (haveFilter) {
          let filtered = this.state.events.filter((value, index) => value.venue.categoryList.indexOf(this.props.navigation.state.params.filter) > -1)
          this.setState({
            eventsFiltered: filtered,
            haveFilter: true
          })
        }
      })
      .catch(e => console.error(e))
  }

  isLoading () {
    return this.state.isLoading ? <ActivityIndicator size="large" style={styles.activity} color="#0000ff" /> : undefined
  }
  scrollToTop () {
    this.flatListRef.scrollToIndex({ animated: true, index: 0 })
  }

  render () {
    let events = this.state.haveFilter ? this.state.eventsFiltered : this.state.events
    if (events.length > 0) {
      if (!this.isLoading()) {
        return (
          <View>
            <View style={styles.button}>
              <Touchable
                background={Touchable.Ripple('#fff', true)}
                style={styles.colorButtonContainer}
                onPress={() => this.scrollToTop()}>

                <Icon name="arrow-upward" raised reverse color={'#5480F3'} />
              </Touchable>
            </View>
            <FlatList
              data={this.state.haveFilter ? this.state.eventsFiltered : this.state.events}
              ref={(ref) => { this.flatListRef = ref; }}
              keyExtractor={(item, index) => item.id}
              renderItem={({ item }) => <BoxEvents navigation={this.props.navigation} value={item} key={item.id} />} />
          </View>
        )
      }
      return this.isLoading()
    }
    return (<Text style={styles.textError}> Não há eventos com este filtro, tente novamente mais tarde. :(</Text>)
  }
}

const styles = StyleSheet.create({
  button: {
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 25,
    right: 15,
    zIndex: 9999,
  },
  colorButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
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
    justifyContent: 'center'
  }
})
