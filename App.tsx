import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AsyncStorage, Button, Route, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';
import { RNButton } from './src/Components/RNButton';
import { RNTextInput } from './src/Components/RNTextInput';
import { Context } from './src/Context';
import { HomeRoute, LoginRoute } from './src/Routes';
import { dispatch } from './src/Routes/routeDispatch';
import { Store } from './src/Store';
import { Login } from './src/Views/Login';

export default function App() {

  const [route, setRoute] = React.useState<Route>(new HomeRoute());
  const [store, setStore] = React.useState<any>({menuSelected:1});
  const [session, setSession] = React.useState<any>(null);

  const context = new Context(setRoute, new Store(store), session, setSession);


  React.useState(()=>{
      AsyncStorage.getItem("session.username", (err_, value) => {
        if(!err_){
            setSession(value);
        }
      });
  })

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