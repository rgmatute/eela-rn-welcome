import React from "react";
import { AsyncStorage, FlatList, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import { RNButton } from "../Components/RNButton";
import { Context } from "../Context";
import { LoginRoute } from "../Routes";
import { RNBottomBar } from "../Components/RNBottomBar";
import { RNTopBar } from "../Components/RNTopBar";
import { RNTextInput } from "../Components/RNTextInput";
import { ScrollView } from "react-native-gesture-handler";

type HomeProps = {
    context: Context
}

/*
const coordenadas = [{
    id: 1,
    lat: 1902,
    long: 1903,
    name: 'Test direction'
},{
    id: 2,
    lat: 1902,
    long: 1903,
    name: 'Test direction 2'
},{
    id: 3,
    lat: 1902,
    long: 1903,
    name: 'Test direction 3'
},{
    id: 4,
    lat: 1902,
    long: 1903,
    name: 'Test direction 3'
},{
    id: 5,
    lat: 1902,
    long: 1903,
    name: 'Test direction 3'
},{
    id: 6,
    lat: 1902,
    long: 1903,
    name: 'Test direction 3'
},{
    id: 7,
    lat: 1902,
    long: 1903,
    name: 'Test direction 3'
},{
    id: 8,
    lat: 1902,
    long: 1903,
    name: 'Test direction 3'
}]*/

var coordenadas: Array<any> = [];

export const Coordenadas = (props: HomeProps) => {

    AsyncStorage.getItem("coords",(err_, coords)=>{
        if(coords == undefined || coords == null){
            coordenadas = [];
        }else{
            console.log(JSON.parse(coords))
            coordenadas = JSON.parse(coords);
        }
    });

    const [direccion, setDireccion] = React.useState<string>("");
    // const [coordenadas, setCoordenadas] = React.useState<any[]>([]);
    

    return (
        <View style={{height: '100%'}}>
            <RNTopBar context={props.context}></RNTopBar>
            <View style={styles.container}>
                <View style={{width: '100%', flexDirection: "row", justifyContent: "center"}}>
                    <View style={{width: '75%', marginRight: 5}}>
                        <RNTextInput
                            value={direccion}
                            onChangeText={setDireccion}
                            placeholder="Buscar Dirección" />
                    </View>
                    <View style={{width: '25%'}}>
                        <RNButton fontSize={20} onPress={ () => findDirection(props.context, direccion) } title="Buscar" color='#0E6655'></RNButton>
                    </View>
                </View>

                <FlatList
                    style={{flex: 1, padding: 0, paddingTop:0, width: '100%'}}
                    data={coordenadas.map(coord => ({ coord }))}
                    renderItem={({item}) => renderItem(props.context, item.coord)}
                    keyExtractor={(coord: any) => coord.id}>
                </FlatList>
            </View>
            <RNBottomBar context={props.context}></RNBottomBar>
        </View>
    );
}

const findDirection = (context: Context, direction: string) => {
    console.log(direction)
}

const navigate = (context: Context, direction: any) => {
    console.log("He seleccionado la coordenada --> ", direction)
}

const renderItem = (context: Context, coord: any) => {
    console.log(coord)
    return <TouchableHighlight onLongPress={()=>navigate(context, coord)} style={{backgroundColor: 'gray', width: '100%', padding: 20, borderRadius: 8, marginTop: 10, alignItems: "center"}}>
    <View>
        <Text style={{fontSize: 17, color: 'white'}}>Latitud: {coord.lat}</Text>
        <Text style={{fontSize: 17, color: 'white'}}>Longitud: {coord.long}</Text>
        <Text style={{fontSize: 17, color: 'white'}}>Longitud: {coord.prec}</Text>
    </View>
</TouchableHighlight>
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