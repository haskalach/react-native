import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        { name: 'Firend #1', age: '1' },
        { name: 'Firend #2', age: '2' },
        { name: 'Firend #3', age: '3' },
        { name: 'Firend #4', age: '4' },
        { name: 'Firend #5', age: '5' },
        { name: 'Firend #6', age: '6' },
        { name: 'Firend #7', age: '7' }
    ];
    return (
        <FlatList
            keyExtractor={(friend) => friend.name}
            data={friends}
            renderItem={({ item }) => {
                return <Text style={styles.textStyle}>{item.name} - {item.age}</Text>
            }}
        />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;