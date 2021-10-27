import React from "react";
import { Image, StyleSheet, Text, TextInput, TouchableHighlight, View } from "react-native";

type RNTextInputProps = {
    value?: string,
    onChangeText?: (s: string) => void,
    placeholder?: string,
    secureTextEntry?: boolean
}

export const RNTextInput = (props: RNTextInputProps) => {

    const [visible, setVisible] = React.useState(false)
    const [isPassword, setIsPassword] = React.useState(false)

    const oculta = (value: boolean) =>{
        setVisible(value);
    };

    React.useEffect(()=>{
        if(props.secureTextEntry){
            setIsPassword(true);
        }
    })

    return (
        <View style={{width: '100%'}}>
            <View style={{ flexDirection: "row", marginBottom: 15, alignItems: "center", backgroundColor: 'white' , borderRadius: 3 }}>
                { isPassword &&  <TextInput secureTextEntry={!visible} placeholder={props.placeholder} value={props.value} onChangeText={props.onChangeText} style={styles.myInput}></TextInput> }
                { !isPassword && <TextInput placeholder={props.placeholder} value={props.value} onChangeText={props.onChangeText} style={styles.myInput}></TextInput>}



                { props.value != undefined && props.value?.length > 0 && isPassword && !visible && 
                    <TouchableHighlight underlayColor={'white'} onPress={ () => oculta(true)}>
                        <Image source={require('../../images/eye-2.png')}
                            style={{width: 30, height: 20, backgroundColor: 'white', margin: 0, marginRight: 10}}>
                        </Image>
                    </TouchableHighlight>
                }

                { isPassword && visible && 
                    <TouchableHighlight underlayColor={'white'} onPress={ () => oculta(false)}>
                        <Image source={require('../../images/eye-1.png')}
                            style={{width: 30, height: 20, backgroundColor: 'white', margin: 0, marginRight: 10}}>
                        </Image>
                    </TouchableHighlight>
                }
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    myInput: {
        flex: 1,
        backgroundColor: 'white', 
        fontSize: 40,
        color: 'black', 
        padding: 10
    }
});