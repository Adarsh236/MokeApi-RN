import React from 'react';
import axios from 'axios';
import {FlatList, View, Text, ToastAndroid} from 'react-native';
import Toast from 'react-native-tiny-toast';
//import PersonListView from '../PersonListView';

export default class PersonList extends React.Component {
  state = {
    intenetStatus: 'None',
    persons: [],
    Old_URL:
      'https://70c7859a-69e5-4de6-aa70-e6c14e5bd8e4.mock.pstmn.io/starwar/people',
    New_URL: 'https://swapi.dev/api/people/',
  };

  getResultFromAxios() {
    axios
      .get(this.state.New_URL, {timeout: 1000})
      .then((res) => {
        const persons = res.data.results;
        this.setState({
          intenetStatus: 'isConnected',
          persons: [...persons],
        });
      })
      .catch((e) => {
        if (
          e.message === 'timeout of 1000ms exceeded' ||
          e.message === 'Network error.'
        )
          this.setState({intenetStatus: 'notConnected'});
        else this.setState({intenetStatus: e.message});
      });
  }

  timer() {
    try {
      this.intervalID = setInterval(() => {
        this.setState({
          time: this.state.time + 1,
        });

        if (this.state.intenetStatus === 'notConnected') {
          Toast.show('Waiting For The Internet ');
          this.getResultFromAxios();
        } else if (this.state.intenetStatus === 'isConnected') {
          Toast.showSuccess('List Loaded');
          clearInterval(this.intervalID);
        } else {
          console.log('waiting');
        }
      }, 2000);
    } catch (e) {
      console.log('e in timer' + e);
    }
  }

  async componentDidMount() {
    this.getResultFromAxios();
    this.timer();
  }

  async componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  /* render() {
    return <PersonListView personListView={this.state.intenetStatus} />;
  } */
  render() {
    switch (this.state.intenetStatus) {
      case 'None': {
        return (
          <View style={{flex: 1, padding: 24}}>
            <Text>Loading...</Text>
          </View>
        );
      }
      case 'notConnected': {
        return (
          <View style={{flex: 1, padding: 24}}>
            <Text>Error: No Internet...</Text>
          </View>
        );
      }
      case 'isConnected': {
        return (
          <View style={{flex: 1, padding: 24, backgroundColor: '#F5BCF4'}}>
            <FlatList
              data={this.state.persons}
              extraData={this.state.persons}
              keyExtractor={({id}, index) => id}
              renderItem={({item}) => (
                <Text>
                  NAME: {item.name}, HEIGHT: {item.height}, MASS: {item.mass}
                </Text>
              )}
            />
            <Toast message="Example" />
          </View>
        );
      }
      default: {
        return (
          <View>
            <Text>No Data</Text>
            <Text>Error: {this.state.intenetStatus}</Text>
          </View>
        );
      }
    }
  }
}
