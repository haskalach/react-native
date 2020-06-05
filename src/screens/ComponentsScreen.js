import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const name = 'Hassan';
    const greeting = <Text style={styles.smallText}>My Name is {name}!</Text>;
    return (
        <View >
            <Text style={styles.textStyle}>Getting Started With React Native! </Text>
            {greeting}
        </View >
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    smallText:{
        fontSize: 20
    }
});

export default ComponentsScreen;