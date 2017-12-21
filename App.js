/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Main from './src/components/';
import './src/plugins/reactotron'
// import Reactotron from 'reactotron-react-native'
export default class App extends Component<{}> {
  componentDidMount() {
      // console.tron = Reactotron
      //     .configure()
      //     .useReactNative()
      //     .connect()
  }
  render() {
    return (
      <Main> </Main>
    );
  }
}


