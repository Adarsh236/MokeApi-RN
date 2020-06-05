import React from 'react';
import axios from 'axios';
import {FlatList, View, Text, ToastAndroid} from 'react-native';

//export default class PersonListView extends React.Component{
    const PersonListView = props =>
      return(
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
                      NO: {item.id}) NAME: {item.name}, HEIGHT: {item.height}, MASS:{' '}
                      {item.mass}
                    </Text>
                  )}
                />
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
//}