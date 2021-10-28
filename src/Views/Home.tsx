import React from "react";
import { View } from "react-native";
import { RNButton } from "../Components/RNButton";
import { Context } from "../Context";
import { LoginRoute } from "../Routes";
import { RNBottomBar } from "../Components/RNBottomBar";

type HomeProps = {
    context: Context
}

export const Home = (props: HomeProps) => {

    return (
        <View style={{height: '100%'}}>
            <View style={{flex: 1, paddingTop: 40}}>
                <RNButton color={"red"} title="Cerrar Sesion" onPress={ () => onLogout(props.context) }></RNButton>
            </View>
            <RNBottomBar context={props.context}></RNBottomBar>
        </View>
    );
}

const onLogout = (context: Context) => {
    context.onRoute(new LoginRoute())
}

