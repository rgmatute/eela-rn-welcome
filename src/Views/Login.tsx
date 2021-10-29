import React from "react";
import { Alert, AsyncStorage, Image, StyleSheet, Text, View } from "react-native";
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
            <View style={{ height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center' }}>

                <Image source={ require('../../images/logo.png') } style={styles.iconImage}></Image>
                <Text style={styles.iconText}>Mis Coordenadas</Text>
            
                <View style={{width: '100%', marginTop: 20}}>
                    <RNTextInput 
                        value={input} 
                        onChangeText={setInput}
                        placeholder="Usuario" />

                    <RNTextInput 
                        secureTextEntry={true}
                        value={password} 
                        onChangeText={setPassword} 
                        placeholder="Contraseña" />
                </View>
                <View style={{alignItems: 'center', justifyContent: 'center', top: 10, width: '100%'}}>
                    <RNButton onPress={ () => onLogin(input, password, props.context) } fontSize={20} title="Iniciar Sesion" color='#0E6655' marginTop={10}></RNButton>
                </View>
            </View>
        </View>
    );
};

const onLogin = (username: string, password: string, context: Context) => {

    if(username === "rmatute" && password === "12345"){ // validamos las credenciales

        context.store.setValue("menuSelected", 1);
    
        AsyncStorage.setItem("session.username", username, () => {
            context.setSession(username);
            context.onRoute(new HomeRoute())
        }); // Guardamos nuestra sesion

        /*
        context.store.setValue("username", username, () => {
            context.onRoute(new HomeRoute())
        });
        */
    }else{
        Alert.alert("No Autorizado", "Las credenciales estan incorrectas")
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    icon: {
        flex: 1,
        paddingVertical: 10,
        alignItems: 'center',
        paddingTop: 5,
        paddingBottom: 4
    },
    iconText: {
        color: '#0E6655',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: "bold"
    },
    iconImage: {
        height: 120,
        marginBottom: 20,
        resizeMode: 'contain'
    }
  });