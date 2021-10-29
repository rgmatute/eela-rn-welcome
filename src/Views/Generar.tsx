import React from "react";
import { Alert, AsyncStorage, StyleSheet, Text, View } from "react-native";
import { RNBottomBar } from "../Components/RNBottomBar";
import Geolocation from '@react-native-community/geolocation';
import { Context } from "../Context";
import { RNTopBar } from "../Components/RNTopBar";
import { TouchableOpacity } from "react-native-gesture-handler";


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
            <RNTopBar context={props.context}></RNTopBar>
            <View style={styles.container}>
                <View style={{backgroundColor: 'gray', width: '100%', padding: 20, borderRadius: 8, margin: 5, alignItems: "center"}}>
                    <Text style={{fontSize: 20, color: 'white'}}>Latitud: { lat }</Text>
                </View>
                <View style={{backgroundColor: 'gray', width: '100%', padding: 20, borderRadius: 8, margin: 5, alignItems: "center"}}>
                    <Text style={{fontSize: 20, color: 'white'}}>Longitud: { long }</Text>
                </View>
                <View style={{backgroundColor: 'gray', width: '100%', padding: 20, borderRadius: 8, margin: 5, alignItems: "center"}}>
                    <Text style={{fontSize: 25, color: 'white'}}>Precision: { prec + ' Metros'}</Text>
                </View>

                <View style={{backgroundColor: '#0B5345', width: '100%', padding: 40, alignItems: 'center', borderRadius: 8, margin: 10}}>
                    <TouchableOpacity style={{width: '100%'}}  onPress={()=> guardar(props.context, lat, long, prec)}>
                        <Text style={{color: 'white', fontSize: 20}}>Guardar Coordenada</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <RNBottomBar context={props.context}></RNBottomBar>
        </View>
    );

}

const guardar = (context: Context, lat: number, long: number, prec: number) => {

    var coordenadas: Array<any> = [];

    
    AsyncStorage.getItem("coords", (err_, coords)=>{
        if(coords == undefined || coords == null){
            coordenadas.push({
                "lat": lat,
                "long": long,
                "prec": prec
            });
            AsyncStorage.setItem("coords", JSON.stringify(coordenadas), () => {
                Alert.alert("Bien!", "La coordenada se almaceno correctamente.")
            });
        }else{
            coordenadas = JSON.parse(coords);

            coordenadas.push({
                "lat": lat,
                "long": long,
                "prec": prec
            });

            AsyncStorage.setItem("coords", JSON.stringify(coordenadas), () => {
                Alert.alert("Bien!", "Se añadio nueva coordenada.")
            });
        }
    });
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        alignItems: 'center',
        // justifyContent: 'center',
        padding: 10
    }
  });