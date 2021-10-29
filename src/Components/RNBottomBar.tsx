import React from "react";
import { Image, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { Context } from "../Context";
import { CoornedanasRoute, Enrutamiento, GenerarRoute, HomeRoute } from "../Routes";
import { Home } from "../Views/Home";


type RNBottomBarProps = {
    context: Context
}

export const RNBottomBar = (props: RNBottomBarProps) => {

    const [menu, setMenu] = React.useState(props.context?.store.value.menuSelected);

    return (
        <View style={styles.container}>
            <TouchableHighlight underlayColor={'#0B5345'} style={styles.icon} onPress={ () => onRoute(props.context, new HomeRoute(), 1) }>
                <View style={{ alignItems: 'center' }}>
                    {/*
                    { menu !== 1 && <View><Image source={ require('../../images/menu/iconHome2.png') } style={(menu!==1) && styles.iconImage}></Image></View>}
                    { menu ===1 && <View style={styles.viewSelected}><Image source={ require('../../images/menu/iconHome1.png') } style={(menu===1) && styles.iconImageSelected }></Image></View>}
                    */}
                    <Image source={ (menu === 1)?require('../../images/menu/iconHome1.png'):require('../../images/menu/iconHome2.png') } style={(menu===1)?styles.iconImageSelected:styles.iconImage}></Image>
                    <Text style={(menu===1)?styles.iconTextSelected:styles.iconText}>Inicio</Text>
                </View>
            </TouchableHighlight>

            <TouchableHighlight underlayColor={'#0B5345'} style={styles.icon} onPress={ () => onRoute(props.context, new GenerarRoute(), 2) }>
                <View style={{ alignItems: 'center' }}>
                    <Image source={ (menu === 2)?require('../../images/menu/iconGenerar1.png'):require('../../images/menu/iconGenerar2.png') } style={(menu===2)?styles.iconImageSelected:styles.iconImage}></Image>
                    <Text style={(menu===2)?styles.iconTextSelected:styles.iconText}>Generar</Text>
                </View>
            </TouchableHighlight>

            <TouchableHighlight underlayColor={'#0B5345'} style={styles.icon} onPress={ () => onRoute(props.context, new CoornedanasRoute(), 3) }>
                <View style={{ alignItems: 'center' }}>
                    <Image source={ (menu === 3)?require('../../images/menu/iconCoord1.png'):require('../../images/menu/iconCoord2.png') } style={(menu===3)?styles.iconImageSelected:styles.iconImage}></Image>
                    <Text style={(menu===3)?styles.iconTextSelected:styles.iconText}>Coordenadas</Text>
                </View>
            </TouchableHighlight>
        </View>
    );
}

const onRoute = (contex: Context, route: Enrutamiento, menu: number)=>{
    contex.onRoute(route);
    contex.store.value.menuSelected = menu;
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0E6655', 
        flexDirection: 'row',
        // borderRadius: 100,
        //marginBottom: 10
    },
    icon: {
        flex: 1,
        paddingVertical: 10,
        alignItems: 'center',
        paddingTop: 5,
        paddingBottom: 4
    },
    iconText: {
        color: 'black',
        textAlign: 'center',
        fontSize: 15
    },
    iconTextSelected: {
        color: 'white',
        textAlign: 'center',
        fontSize: 15
    },
    iconImage: {
        height: 30,
        width: 40,
        resizeMode: 'contain'
    },
    iconImageSelected: {
        height: 30,
        width: 40,
        // bottom: 8,
        backgroundColor: '#0E6655',
        //marginTop: 5,
        /*marginBottom:2,*/
        resizeMode: 'contain',
        alignItems: "center"
    },
    viewSelected: {
        backgroundColor: 'white',
        height: 30,
        width: 50,
        bottom: 10,
        alignItems: "center",
        borderRadius: 100
    }
});