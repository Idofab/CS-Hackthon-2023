import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Link from './components/Link';
import User from './components/User';
import NavBar from './components/NavBar';
import CompanyUser from './components/CompanyUser';
import Home from './components/Home'
import Ride from './components/Ride';
const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Ride' component={Ride} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Link" component={Link} />
        <Stack.Screen name="User" component={User} />
        <Stack.Screen name='CompanyUser' component={CompanyUser} />
      </Stack.Navigator>
      <NavBar />
    </NavigationContainer>

  )
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 50,
  },

  text: {
    color: 'purple',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});




export default App;
