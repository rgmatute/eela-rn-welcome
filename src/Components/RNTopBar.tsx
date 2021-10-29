import React from 'react';
import { AsyncStorage, Image, Platform, Text, TouchableOpacity, View } from 'react-native';
import { Context } from "../Context";
import { LoginRoute } from '../Routes';


type RNTopBarProps = { context: Context };

export const RNTopBar = (props: RNTopBarProps) => {

    const [username, setUsername] = React.useState<string>("");

    React.useEffect(()=>{
        AsyncStorage.getItem("session.username", (err_, value) => {
            if(!err_){
                setUsername(String(value));
            }
        });
    })

    return (
    <View style={{backgroundColor: 'white', flexDirection: 'row'}}>
        <View style={{flex: 1, width: '65%', padding: 10, paddingHorizontal: 20, flexDirection: 'row', alignItems: 'center'}}>
            <View style={{flex: 1}}>
                <TouchableOpacity>
                    <Text style={{height: 35, width: 100, top: 5, fontSize: 20, fontWeight: 'bold', color: '#0E6655' }}>
                        {username}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>

        <View style={{backgroundColor: 'white', width: '40%', paddingHorizontal: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity style={{marginRight: -20, alignItems: 'center', flex: 1}} onPress={ () => onLogout(props.context) }>
                <View>
                    <Text style={{color: '#0E6655', fontSize: 20}}>
                        <Text style={{fontSize: 18}}>{`Cerrar Sesion`}</Text>
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>);
}

const onLogout = (context: Context) => {
    AsyncStorage.removeItem('session.username', () => {
        context.store.value = {};
        context.onRoute(new LoginRoute())
    });
}
