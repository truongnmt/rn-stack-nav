import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native';

class WelcomeScreen extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <View style={styles.container}>
                <Button title="Login" onPress={() => 
                    this.props.navigation.navigate('Login')} />
                <Button title="Signup" onPress={() => 
                    this.props.navigation.navigate('SignUp')} />
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

export default WelcomeScreen;
