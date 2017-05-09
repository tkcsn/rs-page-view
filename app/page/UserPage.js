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

var API = 'http://localhost:8080/api/v1/users/search?q=hoge';

class UserPage extends React.Component {

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
      <TouchableHighlight onPress={this.props.onItemClick}>
          <View style={{padding: 10, flexDirection: 'row'}}>
            <Image source={require('../imgs/react.png')} style={{height: 50, width: 50}}/>
            <View style={{flex:1, justifyContent: 'center', alignItems: 'flex-start', paddingLeft: 20}}>
                <Text>{item.name}</Text>
            </View>
          </View>
      </TouchableHighlight>
    );
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

module.exports = UserPage;
