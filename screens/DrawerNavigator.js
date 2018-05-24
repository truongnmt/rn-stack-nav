import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { createDrawerNavigator, createBottomTabNavigator  } from 'react-navigation'
import HomeScreen from './HomeScreen'

const AppDrawerNavigator = createDrawerNavigator({
    Home: HomeScreen
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default AppDrawerNavigator;
