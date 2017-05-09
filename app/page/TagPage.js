'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
} from 'react-native';

var API = 'http://localhost:8080/api/v1/tags/search?q=hoge';

class TagPage extends React.Component {

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
        renderRow={this._renderItem} />
    );
  }
  
  _renderItem(item, sectionId, rowId) {
    return (
      <View style={{padding: 10}}><Text>{item.name}</Text></View>
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

module.exports = TagPage;
