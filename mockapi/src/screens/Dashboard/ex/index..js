import React from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';
import {NetworkConsumer} from 'react-native-offline';
console.log('Hi from React Native');

const ex = ({navigation}) => {
  return (
    <View style={styles.dashboardArea}>
      <Text style={{fontSize: 25, color: '#FFFFFF'}}>
        Star war Character list
      </Text>
      <Button
        onPress={() => navigation.navigate('PersonList')}
        title="GET STARTED"
        color="#006400"
        style={styles.startButton}
      />
      <NetworkConsumer>
        {({isConnected}) =>
          isConnected ? (
            <Text>Downloading</Text>
          ) : (
            <Text>Downloading images is disabled since you are offline</Text>
          )
        }
      </NetworkConsumer>
    </View>
  );
};

export default ex;

const styles = StyleSheet.create({
  dashboardArea: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
});
