import React from 'react';
import {
  TextInput,
  View,
} from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Search from '../screen/Search'
import { Dummy, SearchBar } from '../common'

export const SearchStack = StackNavigator({
    List: {
        screen: Search,
        navigationOptions: {
            header: <SearchBar />,
        },
    },
    Detail: {
        screen: Dummy,
        navigationOptions: {
            title: 'User Detail',
        },
    },
});

export const Tabs = TabNavigator({
    Timeline: {
        screen: Dummy,
        navigationOptions: {
            tabBarLabel: 'Timeline',
            tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
        },
    },
    Search: {
        screen: SearchStack,
        navigationOptions: {
            tabBarLabel: 'Search',
            tabBarIcon: ({ tintColor }) => <Icon name="search" size={30} color={tintColor} />,
        },
    },
    Settings: {
        screen: Dummy,
        navigationOptions: {
            tabBarLabel: 'Settings',
            tabBarIcon: ({ tintColor }) => <Icon name="settings" size={30} color={tintColor} />,
        },
    },
});

export const Root = StackNavigator({
    Tabs: {
        screen: Tabs,
    },
}, {
    headerMode: 'none',
});