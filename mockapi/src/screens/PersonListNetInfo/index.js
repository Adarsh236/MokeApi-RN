import React from 'react';
import axios from 'axios';
import {FlatList, View, Text} from 'react-native';
import Toast from 'react-native-tiny-toast';
import {NetworkConsumer} from 'react-native-offline';

export default class PersonListNetInfo extends React.Component {
  state = {
    status: 'none',
    persons: [],
    error: 'none',
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
          status: 'isLoaded',
          persons: [...persons],
        });
        this.showToast();
      })
      .catch((e) => {
        if (e.message === 'Network Error')
          this.setState({status: 'offline', error: e.message});
        else this.setState({status: 'error', error: e.message});
        this.showToast();
      });
  }

  showToast() {
    switch (this.state.status) {
      case 'isLoaded': {
        Toast.showSuccess('Successfully Loaded');
        break;
      }
      case 'none': {
        Toast.show('Loading...');
        break;
      }
      case 'offline': {
        Toast.show('You are offline.');
        break;
      }
      default:
        Toast.show('Error');
    }
  }

  async componentDidMount() {
    this.getResultFromAxios();
  }

  render() {
    switch (this.state.status) {
      case 'None': {
        return (
          <View style={{flex: 1, padding: 24}}>
            <Text>Loading...</Text>
          </View>
        );
      }
      case 'error': {
        return (
          <View>
            <Text>No Data</Text>
            <Text>Error: {this.state.error}</Text>
          </View>
        );
      }
      default: {
        return (
          <View style={{flex: 1, padding: 24, backgroundColor: '#F5BCF4'}}>
            <NetworkConsumer>
              {({isConnected}) =>
                isConnected ? (
                  <View>
                    <Text
                      style={{
                        fontSize: 25,
                        color: '#008000',
                        textAlign: 'center',
                      }}>
                      You are online.
                    </Text>
                    <FlatList
                      data={this.state.persons}
                      extraData={this.state.persons}
                      keyExtractor={({id}, index) => id}
                      renderItem={({item}) => (
                        <Text>
                          NAME: {item.name}, HEIGHT: {item.height}, MASS:{' '}
                          {item.mass}
                        </Text>
                      )}
                    />
                  </View>
                ) : (
                  <View>
                    <Text
                      style={{
                        fontSize: 25,
                        color: '#FF0000',
                        textAlign: 'center',
                      }}>
                      You are offline.
                    </Text>
                    <FlatList
                      data={this.state.persons}
                      extraData={this.state.persons}
                      keyExtractor={({id}, index) => id}
                      renderItem={({item}) => (
                        <Text>
                          NAME: {item.name}, HEIGHT: {item.height}, MASS:{' '}
                          {item.mass}
                        </Text>
                      )}
                    />
                  </View>
                )
              }
            </NetworkConsumer>
          </View>
        );
      }
    }
  }
}
