import { Text, View, StyleSheet } from 'react-native'

export default (props) => (
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
