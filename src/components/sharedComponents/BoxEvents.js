import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import Touchable from '../sharedComponents/Touchable'
const BoxEvent = (props) => {
  let time = props.value.startTime + ''
  let date = time.split('T')[0].split('-').reverse().join('/')
  let hour = time.split('T')[1] + ''
  let { navigate } = props.navigation
  return (
    <Touchable onPress={() => navigate('Events', { event: props.value })} activeOpacity={0.5} key={props.value.id}>

      <View style={styles.boxEvent}>
        <Image
          style={styles.eventPicture}
          source={{ uri: props.value.coverPicture }}
        />
        <View style={styles.event}>
          <Text style={styles.title}>{props.value.name.toUpperCase()}</Text>
          <View style={styles.description}>
            <Text style={styles.place}>
              {props.value.place && props.value.place.name}
            </Text>
            <Text style={styles.time}>
              {date} {hour.split('-')[0].substring(0, 5)}
            </Text>
          </View>
        </View>
      </View>
    </Touchable>
  )
}
const styles = StyleSheet.create({
  eventPicture: {
    alignSelf: 'stretch',
    height: 120
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
    backgroundColor: '#FFFFFF'
  },
  event: {
    flex: 2,
    alignSelf: 'stretch',
    marginTop: 5,
    padding: 15
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1

  },
  place: {
    fontSize: 12
  },
  time: {
    fontSize: 10
  },
  description: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  }
})

export default BoxEvent