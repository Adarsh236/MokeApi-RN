import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {PersonListTimer, Dashboard, PersonListNetInfo} from '../screens';
import {color} from '../res';

const Stack = createStackNavigator();

function NavContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="PersonListTimer" component={PersonListTimer} />
        <Stack.Screen name="PersonListNetInfo" component={PersonListNetInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavContainer;
