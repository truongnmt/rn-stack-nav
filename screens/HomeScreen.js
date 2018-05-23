import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native';

class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Button title="go back to login screen" onPress={() => this.props.navigation.goBack()} />
                <Button title="go to top of stack" onPress={() => this.props.navigation.popToTop()} />
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

export default HomeScreen;
