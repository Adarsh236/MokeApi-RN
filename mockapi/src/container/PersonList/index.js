import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {FlatList, View, Text, ToastAndroid} from 'react-native';

export default class PersonList extends React.Component {
  state = {
    isLoading: true,
    intenetProblem: false,
    persons: [],
  };

  async componentDidMount() {
    axios
      .get(
        'https://70c7859a-69e5-4de6-aa70-e6c14e5bd8e4.mock.pstmn.io/starwar/people',
      )
      .then((res) => {
        const persons = res.data.results;
        this.setState({
          isLoading: false,
          persons: [...persons],
        });

        ToastAndroid.showWithGravity(
          'API Loaded',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        );
      })
      .catch((e) => {
        this.setState({intenetProblem: true});
        ToastAndroid.showWithGravity(
          'Waiting For The Internet',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        );
      });
  }

  render() {
    if (this.state.intenetProblem) {
      return (
        <View>
          <Text>Error: No Internet...</Text>
        </View>
      );
    } else if (this.state.isLoading) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      );
    } else {
      return (
        <View style={{flex: 1, padding: 24}}>
          {
            <FlatList
              data={this.state.persons}
              keyExtractor={({id}, index) => id}
              renderItem={({item}) => (
                <Text>
                  Name: {item.name}, height: {item.height}, mass: {item.mass}
                </Text>
              )}
            />
          }
        </View>
      );
    }
  }
}
