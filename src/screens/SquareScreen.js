import React, { useReducer } from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';
import ColorItem from '../components/ColorItem';
import ColorDetails from '../components/ColorDetails';

const COLOR_INCREMENT = 15;
const reducer = (state, action) => {
    const color = action.type;
    return state[color] + action.payload > 255 || state[color] + action.payload < 0 ? state : { ...state, [color]: state[color] + action.payload }
};

const SquareScreen = () => {
    // const [colorArray, SetColorArray] = useState([255, 255, 255])

    const colors = [{ name: 'red' }, { name: 'blue' }, { name: 'green' }]
    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
    const { red, green, blue } = state;

    return (
        <View>
            <Text>Square Screen</Text>
            <FlatList
                keyExtractor={(colorItem) => colorItem.name}
                data={colors}
                renderItem={({ item }) => {
                    return <ColorItem
                        OnIncrease={() => dispatch({ type: item.name, payload: COLOR_INCREMENT })}
                        OnDecrease={() => dispatch({ type: item.name, payload: -1 * COLOR_INCREMENT })}
                        color={item.name} />
                }} />
            <ColorDetails color={`rgb(${red},${green},${blue})`}></ColorDetails>
            <Text>{`rgb(${red},${green},${blue})`}</Text>
        </View>

    )
};

const styles = StyleSheet.create({

});

export default SquareScreen;