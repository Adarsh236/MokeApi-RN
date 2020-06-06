import React from 'react';
import {Button, View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {NetworkConsumer} from 'react-native-offline';
import {
  checkInternetConnection,
  offlineActionCreators,
} from 'react-native-offline';

console.log('Dashbroad');

function Separator() {
  return <View style={styles.separator} />;
}

const Dashboard = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Star war Character list</Text>

        <Separator />
        <Button
          onPress={() => navigation.navigate('PersonListTimer')}
          title="Person List With Timer"
          color="#006400"
        />
        <Separator />
        <Button
          onPress={() => navigation.navigate('PersonListNetInfo')}
          title="Person List With NetInfo"
          color="#006400"
        />
        <Separator />

        <NetworkConsumer>
          {({isConnected}) =>
            isConnected ? (
              <Text style={styles.text}>You are online</Text>
            ) : (
              <Text style={styles.text}>You are offline</Text>
            )
          }
        </NetworkConsumer>
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginHorizontal: 16,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
    fontSize: 25,
    color: '#FFFFFF',
  },
  text: {
    textAlign: 'center',
    marginVertical: 8,
    fontSize: 20,
    color: '#FFFFFF',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
