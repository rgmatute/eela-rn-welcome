import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Route, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';
import { RNButton } from './src/Components/RNButton';
import { RNTextInput } from './src/Components/RNTextInput';
import { Context } from './src/Context';
import { LoginRoute } from './src/Routes';
import { dispatch } from './src/Routes/routeDispatch';
import { Login } from './src/Views/Login';

export default function App() {

  const [route, setRoute] = React.useState<Route>(new LoginRoute());

  const context = new Context(setRoute);

  return (
    <View style={styles.container}>
      
      { dispatch(route, context) }
      
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    height: '100%'
  },
});


// https://www.youtube.com/watch?v=SXFnpo-6u1U