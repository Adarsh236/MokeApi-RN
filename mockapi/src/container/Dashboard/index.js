import React from 'react';
import {View, Text} from 'react-native';

console.log('Hi from React Native');

const Dashboard = ({navigation}) => {
  return (
    <View>
      <Text onPress={() => navigation.navigate('PersonList')}>Dashboard</Text>
    </View>
  );
};

export default Dashboard;
