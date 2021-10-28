import React from "react";
import { Text, View } from "react-native";
import { RNButton } from "../Components/RNButton";
import { Context } from "../Context";
import { LoginRoute } from "../Routes";
import { RNBottomBar } from "../Components/RNBottomBar";

type HomeProps = {
    context: Context
}

export const Coordenadas = (props: HomeProps) => {

    return (
        <View style={{height: '100%'}}>
            <View style={{flex: 1, paddingTop: 40}}>
                <Text>Aqui estaran mis coordenadas</Text>
            </View>
            <RNBottomBar context={props.context}></RNBottomBar>
        </View>
    );
}
