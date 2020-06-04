import React from 'react';
import axios from 'axios';
import {FlatList, View, Text, ToastAndroid} from 'react-native';

function Toast(prop) {
  ToastAndroid.showWithGravity(
    prop.text,
    ToastAndroid.SHORT,
    ToastAndroid.CENTER,
  );
}
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
        console.log(persons);
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
          ToastAndroid.LONG,
          ToastAndroid.CENTER,
        );
      });
  }

  render() {
    if (this.state.intenetProblem) {
      return (
        <View style={{flex: 1, padding: 24}}>
          <Text>Error: No Internet...</Text>
        </View>
      );
    } else if (this.state.isLoading) {
      return (
        <View style={{flex: 1, padding: 24}}>
          <Text>Loading...</Text>
        </View>
      );
    } else {
      return (
        <View style={{flex: 1, padding: 24}}>
          <FlatList
            data={this.state.persons}
            keyExtractor={({id}, index) => id}
            renderItem={({item}) => (
              <Text>
                NO: {item.id}) NAME: {item.name}, HEIGHT: {item.height}, MASS:{' '}
                {item.mass}
              </Text>
            )}
          />
        </View>
      );
    }
  }
}
