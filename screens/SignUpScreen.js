import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native';

class SignUpScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Button title="Back" onPress={()=>
                    this.props.navigation.goBack()} />
                <Button title="Complete signup" onPress={()=>
                    this.props.navigation.navigate("Home")} />
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

export default SignUpScreen;
