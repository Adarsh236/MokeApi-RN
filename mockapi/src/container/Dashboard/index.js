import React from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';

console.log('Hi from React Native');

const Dashboard = ({navigation}) => {
  return (
    <View style={styles.dashboardArea}>
      <Text style={{fontSize: 25}}>Star war Character list</Text>
      <Button
        onPress={() => navigation.navigate('PersonList')}
        title="GET STARTED"
        color="#006400"
        style={styles.startButton}
      />
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  dashboardArea: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
