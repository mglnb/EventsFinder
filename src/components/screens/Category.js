/* global fetch */
import React, { Component } from 'react'
import { View, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native'
import BoxCategory from '../sharedComponents/BoxCategory'
import LinearGradient from 'react-native-linear-gradient'
export default class Category extends Component {
  constructor (props) {
    super(props)
    this.state = {
      categories: [],
      isLoading: false,
      textColor: 'white'
    }
  }

  componentWillMount () {
    this.setState({ isLoading: true })
    fetch('https://eventos-pelotas.firebaseio.com/events/categories.json')
      .then(response => response.json())
      .then(response => this.setState({ categories: Object.values(response), isLoading: false }))
  }
  render () {
    const { navigate } = this.props.navigation
    return this.state.isLoading ? <ActivityIndicator size='large' style={styles.activity} color='#0000ff' /> : (
      <View>
        <FlatList
          data={this.state.categories}
          keyExtractor={(item, index) => index}
          style={{ marginBottom: 0 }}
          numColumns={2}
          renderItem={
            ({ item }) => (
              <LinearGradient
                start={{ x: 0.0, y: 1 }} end={{ x: 1, y: 0.5 }}
                colors={['#35C9FF', '#5480F3']}
                style={styles.linearGradient}
                locations={[0.1, 1]}
              >
                <TouchableOpacity
                  style={styles.touchableBox}
                  onPress={() => {
                    navigate('ListEvents', { filter: item })
                  }}>
                  <BoxCategory pointerEvents='box-only' color={this.state.textColor} value={item} />
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
    margin: 2,
    borderTopLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  linearGradient: {
    margin: 6,
    flex: 1,
    borderTopLeftRadius: 15,
    borderBottomRightRadius: 15

  },
  activity: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
