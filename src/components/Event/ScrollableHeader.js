import React, { Component } from 'react'
import { Animated, Platform, StyleSheet, Text, View } from 'react-native'
import Body from './Body'
const HEADER_MAX_HEIGHT = 300
const HEADER_MIN_HEIGHT = Platform.OS === 'ios' ? 40 : 53
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT

export default class ScrollableHeader extends Component {
  constructor (props) {
    super(props)
    this.state = {
      scrollY: new Animated.Value(0)
    }
  }

  _renderScrollViewContent () {
    return (
      <Body event={this.props.event}></Body>
    )
  }

  render () {
    const headerTranslate = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, -HEADER_SCROLL_DISTANCE],
      extrapolate: 'clamp'
    })

    const imageOpacity = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 0],
      extrapolate: 'clamp'
    })

    const titleOpacity = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [0, 1, 1],
      extrapolate: 'clamp'
    })

    const imageTranslate = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, 100],
      extrapolate: 'clamp'
    })

    const titleScale = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [3, 1, 1],
      extrapolate: 'clamp'
    })
    const titleTranslate = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [0, 50, -28],
      extrapolate: 'clamp'
    })

    return (
      <View style={styles.fill}>
        <Animated.ScrollView
          style={styles.fill}
          scrollEventThrottle={1}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
            { useNativeDriver: true }
          )}
        >
          {this._renderScrollViewContent()}
        </Animated.ScrollView>
        <Animated.View
          style={[
            styles.header,
            { transform: [{ translateY: headerTranslate }] }
          ]}
        >
          <Animated.Image
            style={[
              styles.backgroundImage,
              {
                opacity: imageOpacity,
                transform: [{ translateY: imageTranslate }]
              }
            ]}
            source={{ uri: this.props.event.coverPicture }}
          />
        </Animated.View>
        <Animated.View
          style={[
            styles.bar,
            {
              opacity: titleOpacity,
              transform: [
                { scale: titleScale },
                { translateY: titleTranslate }
              ]
            }
          ]}
        >
          <Text style={styles.title}>{this.props.event.name}</Text>
        </Animated.View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  fill: {
    flex: 1
  },
  content: {
    flex: 1
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#5480F3',
    overflow: 'hidden',
    height: HEADER_MAX_HEIGHT
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: null,
    height: HEADER_MAX_HEIGHT,
    resizeMode: 'cover'
  },
  bar: {
    backgroundColor: 'transparent',
    marginTop: Platform.OS === 'ios' ? 28 : 38,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row'
  },
  arrow: {
    alignSelf: 'flex-start'
  },
  title: {
    color: 'white',
    fontSize: 21,
    marginLeft: 0,
    fontWeight: 'bold'
  },
  scrollViewContent: {
    marginTop: HEADER_MAX_HEIGHT
  },
  row: {
    height: 40,
    margin: 16,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
