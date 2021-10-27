import React from 'react'

import { StyleSheet, Text, TouchableHighlight, View } from "react-native"

type RNButtonProps = {
    title: string,
    color?: string,
    marginBottom?: number,
    marginTop?: number,
    fontSize?: number
}

export const RNButton = (props: RNButtonProps) => {

    const [ color, setColor ] = React.useState("");
    
    React.useEffect(()=>{
        console.log(props.title, " ", color);

        if ( color === "" ){
            if(props.color !== undefined){
                setColor(String(props.color));
            }else{
                setColor("gray");
            }   
        }
    },[color]);

    return (
        <TouchableHighlight onPress={onClick} style={{ ...style.container, backgroundColor: color, marginTop: props.marginTop, marginBottom: props.marginBottom }}>
            <Text style={{fontSize: props.fontSize, color: 'white', textAlign: 'center'}}>
                {props.title}
            </Text>
        </TouchableHighlight>
    );
}


const onClick = () => {
    console.log("Si funciona mi componente personalizado..")
}


const style = StyleSheet.create({
    container: { 
        backgroundColor: 'gray', borderRadius: 5, padding: 10, marginBottom: 5, width: '100%', borderColor: 'white', borderWidth: 1
    }
    
})



