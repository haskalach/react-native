import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput } from 'react-native';

// const reducer = (state, action) => {
//     return { ...state, currentText: action.payload };
// }
const TextScreen = () => {
    // const [state, dispatch] = useReducer(reducer, { currentText: '' })
    const [name, SetName] = useState('');
    return (
        <View>
            <Text>Enter Name</Text>
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                valu={name}
                onChangeText={text => { SetName(text) }}
            />
            {name.length < 5 ? <Text>Please Enter Character more than 5 </Text> : null}
        </View>
    )
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default TextScreen;