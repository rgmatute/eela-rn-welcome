import React from "react";
import { AsyncStorage, Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { RNButton } from "../Components/RNButton";
import { Context } from "../Context";
import { RNBottomBar } from "../Components/RNBottomBar";
import { RNTopBar } from "../Components/RNTopBar";
import { LoginRoute } from "../Routes";

type HomeProps = {
    context: Context
}

export const Home = (props: HomeProps) => {


    if(props.context.session == null) {
        AsyncStorage.getItem("session.username", (err_, value) => {
            if(value == undefined || value == null){
                props.context.onRoute(new LoginRoute())
            }else{
                console.log("aaaaaaaaaaaaaaa");
            }
        });
        return <View></View>;
    }

    return (
        <View style={{height: '100%'}}>
            <RNTopBar context={props.context}></RNTopBar>

            <TouchableOpacity style={styles.container}>
                <Image source={ require('../../images/logo.png') } style={styles.iconImage}></Image>
            </TouchableOpacity>

            <RNBottomBar context={props.context}></RNBottomBar>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    iconImage: {
        height: 250,
        marginBottom: 20,
        resizeMode: 'contain'
    }
  });
