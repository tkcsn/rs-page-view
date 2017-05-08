'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  TouchableHighlight
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import UserDetail from './DetailPage'

var API = 'http://localhost:8080/v1/search/user?query=hoge';

class UserPage extends React.Component {

  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
        items: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    }
  }

  componentDidMount() {
      this._fetchData();
  }

  render() {
    return (
      <ListView
        dataSource={this.state.items}
        renderRow={this._renderItem.bind(this)} />
    );
  }

  _renderItem(item, sectionId, rowId) {
    return (
      <TouchableHighlight onPress={this._navigateDetail.bind(this)}>
          <View style={{padding: 10, flexDirection: 'row'}}>
            <Image source={require('../imgs/react.png')} style={{height: 50, width: 50}}/>
            <View style={{flex:1, justifyContent: 'center', alignItems: 'flex-start', paddingLeft: 20}}>
                <Text>{item.name}</Text>
            </View>
          </View>
      </TouchableHighlight>
    );
  }

  _navigateDetail(item) {
    const { navigate } = this.props.navigation;
    navigate('Child')
  }

  _fetchData() {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          items: this.state.items.cloneWithRows(data)
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

}

// ナビゲーションでラップ
const BaseApp = StackNavigator({
    Home: {screen: UserPage},
    Child: {screen: UserDetail},
});

module.exports = BaseApp;
