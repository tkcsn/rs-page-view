import React from 'react';
import {
  TextInput,
  View,
  Text,
} from 'react-native';

export class SearchBar extends React.Component {
    render() {
        return (
            <View style={{padding: 5, backgroundColor: '#eee', marginTop: 25}}>
            <TextInput
                style={{height: 30, padding: 3, backgroundColor: 'white'}}
                placeholder="キーワードで探す" />
            </View>
        )
    }
}

export class Dummy extends React.Component {
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Dummy</Text>
            </View>
        );
    }
}