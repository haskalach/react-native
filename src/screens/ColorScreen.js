import React, { useState } from 'react';
import { Text, StyleSheet, View, Button, FlatList } from 'react-native';
import ColorDetails from '../components/ColorDetails';

const ColorScreen = () => {
    const [colorArray, SetColorArray] = useState([]);
    return (
        <View>
            <Button title="Add Color" onPress={() => {
                SetColorArray([...colorArray, { color: randomRgb(), key: colorArray.length.toString() }])
            }} />
            <FlatList
                keyExtractor={(colorItem) => colorItem.key}
                data={colorArray}
                renderItem={({ item }) => {
                    return <ColorDetails color={item.color} index={item.key}></ColorDetails>
                }}
            />
        </View>
    )
};

const randomRgb = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`
}

const styles = StyleSheet.create({

});

export default ColorScreen;