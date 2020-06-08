import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const ColorItem = ({ color, OnIncrease, OnDecrease }) => {
    return (
        <View>
            <Text style={styles.text}>{color}</Text>
            <Button title={`Increase - ${color}`} onPress={() => OnIncrease()} />
            <Button title={`Decrease - ${color}`} onPress={() => OnDecrease()} />
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        textAlign: 'center'
    }
});

export default ColorItem;