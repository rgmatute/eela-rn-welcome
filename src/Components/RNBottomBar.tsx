import React from "react";
import { Image, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { Context } from "../Context";
import { CoornedanasRoute, GenerarRoute, HomeRoute } from "../Routes";
import { Home } from "../Views/Home";


type RNBottomBarProps = {
    context: Context
}

export const RNBottomBar = (props: RNBottomBarProps) => {

    return (
        <View style={{backgroundColor: 'gray', flexDirection: 'row'}}>
            <TouchableHighlight style={styles.icon} onPress={ () => props.context.onRoute(new HomeRoute()) }>
                <View style={{ alignItems: 'center' }}>
                    <Image source={ require('../../images/menu/iconHome1.png') } style={styles.iconImage}></Image>
                    <Text style={styles.iconText}>Inicio</Text>
                </View>
            </TouchableHighlight>

            <TouchableHighlight style={styles.icon} onPress={ () => props.context.onRoute(new GenerarRoute()) }>
                <View style={{ alignItems: 'center' }}>
                    <Image source={ require('../../images/menu/iconHome1.png') } style={styles.iconImage}></Image>
                    <Text style={styles.iconText}>Generar</Text>
                </View>
            </TouchableHighlight>

            <TouchableHighlight style={styles.icon} onPress={ () => props.context.onRoute(new CoornedanasRoute()) }>
                <View style={{ alignItems: 'center' }}>
                    <Image source={ require('../../images/menu/iconHome1.png') } style={styles.iconImage}></Image>
                    <Text style={styles.iconText}>Coordenadas</Text>
                </View>
            </TouchableHighlight>
        </View>
    );
}


const styles = StyleSheet.create({
    icon: {
        flex: 1,
        paddingVertical: 10,
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10
    },
    iconText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 15
    },
    iconImage: {
        height: 35,
        width: 40,
        resizeMode: 'contain'
    }
});