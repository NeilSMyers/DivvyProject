/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Businesses from './screens/Businesses';
import BusinessProfile from './screens/BusinessProfile';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Businesses">
        <Stack.Screen name="Businesses" component={Businesses} />
        <Stack.Screen name="BusinessProfile" component={BusinessProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
