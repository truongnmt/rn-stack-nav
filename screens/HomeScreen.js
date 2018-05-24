import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation'
import { StackActions, NavigationActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons'

export class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Home</Text>
            </View>
        );
    }
}

export class Profile extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Profile</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default createBottomTabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({tintColor}) => (
                <Icon name="ios-home" size={24} color={tintColor} />
            )
        }
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            tabBarLabel: 'Profile',
            tabBarIcon: ({tintColor}) => (
                <Icon name="ios-contact" size={24} color={tintColor} />
            )
        }
    }
}, {
    initialRouteName: 'Home',
    order: ['Home', 'Profile'],
    navigationOptions: {
        tabBarVisible: true,
    },
    tabBarOptions: {
        activeTintColor: 'red',
        inactiveTintColor: 'grey'
    }
});
