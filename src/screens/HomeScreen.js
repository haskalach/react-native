import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hi there</Text>
      <Button
        onPress={() => navigation.navigate('Components')}
        title="Go To Components Demo"
      />
      <Button
        onPress={() => navigation.navigate('List')}
        title="Go To List"
      />
      <Button
        onPress={() => navigation.navigate('Image')}
        title="Go To Image"
      />      
      <Button
        onPress={() => navigation.navigate('Counter')}
        title="Go To Counter"
      />      
      <Button
        onPress={() => navigation.navigate('ColorScreen')}
        title="Go To Color Demo"
      />
      <Button
        onPress={() => navigation.navigate('Square')}
        title="Go To Square Screen Demo"
      />
      <Button
        onPress={() => navigation.navigate('TextScreen')}
        title="Go To Text Screen Demo"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
