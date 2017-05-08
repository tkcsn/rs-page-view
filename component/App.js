'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  TabBarIOS,
  Text,
  TextInput,
  View,
} from 'react-native';
import {IndicatorViewPager, PagerTitleIndicator} from 'rn-viewpager';

import TagPage from './page/TagPage';
import UserPage from './page/UserPage';
import BrandPage from './page/BrandPage';

class App extends React.Component {

  state = {
    selectedTab: 'search'
  };

  render() {
    return (
      <TabBarIOS
        unselectedTintColor="gray"
        tintColor="red"
        unselectedItemTintColor="gray"
        barTintColor="lightgray">

        <TabBarIOS.Item
          systemIcon="favorites"
          selected={this.state.selectedTab === 'timeline'}
          onPress={() => {
            this.setState({
              selectedTab: 'timeline',
            });
          }}>
          {this._renderContent('#414A8C', 'Timeline')}
        </TabBarIOS.Item>

        <TabBarIOS.Item
          systemIcon="search"
          selected={this.state.selectedTab === 'search'}
          onPress={() => {
            this.setState({
              selectedTab: 'search',
            });
          }}>
          <Search />
        </TabBarIOS.Item>

        <TabBarIOS.Item
          systemIcon="more"
          selected={this.state.selectedTab === 'more'}
          onPress={() => {
            this.setState({
              selectedTab: 'more'
            });
          }}>
          {this._renderContent('#21551C', 'More Tab')}
        </TabBarIOS.Item>

      </TabBarIOS>
    );
  }

  _renderContent = (color: string, pageText: string, num?: number) => {
    return (
      <View style={[styles.tabContent, {backgroundColor: color}]}>
        <Text style={styles.tabText}>{pageText}</Text>
        <Text style={styles.tabText}>{num} re-renders of the {pageText}</Text>
      </View>
    );
  };
}

class Search extends Component {
  render() {
    return (
      <View style={{backgroundColor: "#eee", paddingTop: 20, flex: 1}}>

        <View style={{padding: 5}}>
          <TextInput
            style={{height: 30, padding: 3, backgroundColor: 'white', marginBottom: 10}}
            placeholder="キーワードで探す" />
        </View>

        <IndicatorViewPager
            style={{flex:1, flexDirection: 'column-reverse', backgroundColor:'white'}}
            indicator={this._renderTitleIndicator()}
            directionalLockEnabled={true}
        >

            <View style={{backgroundColor:'steelblue'}}>
                <Text>page three</Text>
            </View>
            <View style={{backgroundColor:'skyblue'}}>
                <TagPage />
            </View>
            <View style={{backgroundColor:'powderblue'}}>
                <UserPage />
            </View>

        </IndicatorViewPager>

      </View>
    );
  }
  _renderTitleIndicator() {
      return <PagerTitleIndicator titles={['HOT', '#', 'ユーザ']} />;
  }
}

var styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 50,
  },
});

module.exports = App;
