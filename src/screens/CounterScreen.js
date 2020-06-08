import React, { useReducer } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const reducer = (state, action) => {
    return { ...state, counter: state.counter + action.payload }
};

const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, { counter: 0 });
    return (
        <View>
            <Button title="Increase" onPress={() => { dispatch({ type: 'increase_counter', payload: 1 }) }} />
            <Button title="Decrease" onPress={() => { dispatch({ type: 'decrease_counter', payload: -1 }) }} />
            <Text>Current Count: {state.counter}</Text>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default CounterScreen;