import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ColorDetails = ({ color, index }) => {
    return (
        <View style={{
            width: 30,
            height: 30,
            borderWidth: 1,
            borderColor: 'black',
            backgroundColor: color
        }} >
            <Text>{index}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    Box: {
        width: 30,
        height: 30,
        display: 'flex',
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'red',
        position: 'relative',
        display: 'flex'
    }
});

export default ColorDetails;