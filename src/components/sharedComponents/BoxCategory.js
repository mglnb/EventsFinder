import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const BoxCategory = (props) => (
  <View style={styles.container}>
    <Text style={[styles.text, { color: props.color }]}>{props.value}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5
  },
  text: {
    textAlign: 'center'
  }
})

export default BoxCategory