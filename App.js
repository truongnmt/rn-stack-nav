import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from 'react-navigation'
import DrawerNavigator from './screens/DrawerNavigator'

import WelcomeScreen from './screens/WelcomeScreen'
import LoginScreen from './screens/LoginScreen'
import HomeScreen from './screens/HomeScreen'
import SignUpScreen from './screens/SignUpScreen'
export default class App extends React.Component {
  render() {
    return (
      <AppStackNavigator />
    );
  }
}

const AppStackNavigator = createStackNavigator({
  Welcome: WelcomeScreen,
  Login: LoginScreen,
  SignUp: SignUpScreen,
  Home: HomeScreen,
  DrawerNavigator: DrawerNavigator
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
