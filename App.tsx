import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';
import { RNButton } from './src/Components/RNButton';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{color: 'black', fontSize: 50}}>Hola</Text>

      <RNButton title="Mostrar A" color='blue'></RNButton>
      <RNButton title="Mostrar B" color="black"></RNButton>
      <RNButton title="Mostrar C" color="gray"></RNButton>
      <RNButton title="Mostrar D" color="green"></RNButton>

      <View style={{width: '100%'}}>
        <TextInput style={{backgroundColor: 'red', fontSize: 20}}></TextInput>
      </View>

    </View>
  );
}

const onClick = ()=>{
  console.log("SI funciona el click");
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


// https://www.youtube.com/watch?v=SXFnpo-6u1U