import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {PersonList, Dashboard} from '../container';
import {color} from '../res';

const Stack = createStackNavigator();

function NavContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="PersonList" component={PersonList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavContainer;
