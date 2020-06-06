import React from 'react';
import axios from 'axios';
import {FlatList, View, Text} from 'react-native';
import Toast from 'react-native-tiny-toast';
import {NetworkConsumer} from 'react-native-offline';
import {
  checkInternetConnection,
  offlineActionCreators,
} from 'react-native-offline';

export default class PersonListNetInfo extends React.Component {
  state = {
    status: 'None',
    persons: [],
    error: 'None',
    Old_URL:
      'https://70c7859a-69e5-4de6-aa70-e6c14e5bd8e4.mock.pstmn.io/starwar/people',
    New_URL: 'https://swapi.dev/api/people/',
  };

  getResultFromAxios() {
    console.log('a------1');
    axios
      .get(this.state.New_URL, {timeout: 1000})
      .then((res) => {
        const persons = res.data.results;
        this.setState({
          status: 'isLoaded',
          persons: [...persons],
        });
        this.showToast();
        console.log('c------2');
      })
      .catch((e) => {
        console.log('c------3');
        this.setState({status: 'error', error: e.message});
        this.showToast();
      });
  }

  showToast() {
    switch (this.state.status) {
      case 'isLoaded': {
        Toast.showSuccess('Successfully Loaded');
        break;
      }
      case 'None': {
        Toast.show('Loading...');
        break;
      }
      default:
        Toast.show('Error');
    }
  }

  async componentDidMount() {
    this.getResultFromAxios();
    this.internetChecker();
    console.log('com------4');
  }

  async internetChecker(dispatch) {
    const isConnected = await checkInternetConnection();
    const {connectionChange} = offlineActionCreators;
    // Dispatching can be done inside a connected component, a thunk (where dispatch is injected), saga, or any sort of middleware
    // In this example we are using a thunk
    console.log('------99');
    console.log(isConnected);
    //dispatch(connectionChange(isConnected));
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
                  <Text style={{fontSize: 25, color: '#FFFFFF'}}>
                    You are offline.
                  </Text>
                )
              }
            </NetworkConsumer>
          </View>
        );
      }
    }
  }
}
