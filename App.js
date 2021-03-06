
import React, { Component } from 'react'
import './src/plugins/reactotron'
import { Tabs } from './src/plugins/router'
import { StatusBar } from 'react-native'
export default class App extends Component {
  constructor () {
    super()
    console.ignoredYellowBox = ['Setting a timer', 'Remote debugger is in background']
    StatusBar.setBackgroundColor('#5480F3')
  }

  render () {
    return <Tabs />
  }
}
