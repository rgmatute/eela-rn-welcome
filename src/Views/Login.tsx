import React from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { RNButton } from "../Components/RNButton";
import { RNTextInput } from "../Components/RNTextInput";
import { Context } from '../Context'
import { HomeRoute } from "../Routes";

type LoginProps = {
    context: Context
}

export const Login = (props: LoginProps) => {

    const [input, setInput] = React.useState(String);
    const [password, setPassword] = React.useState(String);

    React.useEffect(()=>{
        console.log(props.context)
    })

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

            <RNButton onPress={ () => onLogin(input, password, props.context) } fontSize={30} title="Iniciar Sesion" color='blue' marginTop={10}></RNButton>

        </View>
    );
};

const onLogin = (username: string, password: string, context: Context) => {
    // Alert.alert(username, password)
    context.onRoute(new HomeRoute())
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        // backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
  });