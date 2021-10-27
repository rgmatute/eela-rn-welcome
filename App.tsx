import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';
import { RNButton } from './src/Components/RNButton';
import { RNTextInput } from './src/Components/RNTextInput';

export default function App() {

  const [input, setInput] = React.useState(String);
  const [password, setPassword] = React.useState(String);

  return (
    <View style={styles.container}>
      <Text style={{color: 'black', fontSize: 50, marginBottom: 50}}>Login</Text>

      <RNTextInput 
        value={input} 
        onChangeText={setInput}
        placeholder="Usuario" />

      <RNTextInput 
        secureTextEntry={true}
        value={password} 
        onChangeText={setPassword} 
        placeholder="Contraseña" />

      <RNButton fontSize={30} title="Iniciar Sesion" color='blue' marginTop={10}></RNButton>

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