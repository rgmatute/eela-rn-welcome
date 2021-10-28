import React from "react";
import { Text, View } from "react-native";
import { RNBottomBar } from "../Components/RNBottomBar";
import Geolocation from '@react-native-community/geolocation';
import { Context } from "../Context";


type GenerarProps = {
    context: Context
}
export const Generar = (props: GenerarProps) => {

    const [lat, setLat] = React.useState<number>();
    const [long, setLong] = React.useState<number>();
    const [prec, setPrec] = React.useState<number>();

    React.useEffect(()=>{
        Geolocation.getCurrentPosition((info)=>{
            setLat(info.coords.latitude)
            setLong(info.coords.longitude)
            setPrec(info.coords.accuracy)
        });
    })

    return (
        <View style={{height: '100%'}}>
            <View style={{flex: 1}}>
                <Text style={{fontSize: 25}}>Latitud: { lat }</Text>
                <Text style={{fontSize: 25}}>Longitud: { long }</Text>
                <Text style={{fontSize: 30}}>Precision: { prec + ' Metros'}</Text>
            </View>
            <RNBottomBar context={props.context}></RNBottomBar>
        </View>
    );

}