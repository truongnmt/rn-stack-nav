import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';

class LoginScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Button title="Back" onPress={()=>
                    this.props.navigation.goBack()} />
                <Button title="Complete login" onPress={()=>
                    this.props.navigation.dispatch(resetAction)} />
            </View>
        );
    }
}

const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'DrawerNavigator' })],
  });

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default LoginScreen;
