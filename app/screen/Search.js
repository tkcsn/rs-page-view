'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {IndicatorViewPager, PagerTitleIndicator} from 'rn-viewpager';

import TagPage from '../page/TagPage';
import UserPage from '../page/UserPage';
import { Dummy } from '../common'

class Search extends Component {
    
  render() {
    return (
      <View style={{backgroundColor: "#eee", paddingTop: 10, flex: 1}}>
        <IndicatorViewPager
            style={{flex:1, flexDirection: 'column-reverse', backgroundColor:'white'}}
            indicator={this._renderTitleIndicator()}
            directionalLockEnabled={true}
        >
            <View style={{backgroundColor:'steelblue'}}>
                <Dummy />
            </View>
            <View style={{backgroundColor:'skyblue'}}>
                <TagPage />
            </View>
            <View style={{backgroundColor:'powderblue'}}>
                <UserPage onItemClick={this._toDetail.bind(this)} />
            </View>
        </IndicatorViewPager>
      </View>
    );
  }
  _renderTitleIndicator() {
      return <PagerTitleIndicator titles={['Hot', '#', 'User']} />;
  }
  _toDetail() {
    this.props.navigation.navigate('Detail');
  }
}

module.exports = Search;
