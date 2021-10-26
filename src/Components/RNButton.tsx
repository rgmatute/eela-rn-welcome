import React from 'react'

import { Text, TouchableHighlight, View } from "react-native"

type RNButtonProps = {
    title: string,
    color?: string
}

export const RNButton = (props: RNButtonProps) => {
    return (
        <TouchableHighlight onPress={onClick} style={{ backgroundColor: props.color?props.color:'gray', borderRadius: 5, padding: 10, marginBottom: 5, width: '100%', borderColor: 'white', borderWidth: 1}}>
            <Text style={{fontSize: 18, color: 'white', textAlign: 'center'}}>
                {props.title}
            </Text>
        </TouchableHighlight>
    );
}


const onClick = () => {
    console.log("Si funciona mi componente personalizado..")
}




