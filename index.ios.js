/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

var App = require('./component/App');

export default class AwesomeProject extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
