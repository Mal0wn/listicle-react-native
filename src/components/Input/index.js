import React, { useState } from "react";
import { Pressable, View, Image, Text, TextInput } from "react-native";
import {styles} from './styles';

const Input = ({label, placeholder, isPassword}) => {
    const [isPasswordVisible , setIsPasswordVisible] = useState(false)

    const onEyePressed = () => {
       setIsPasswordVisible(!isPasswordVisible)
    }

 return(
   <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.inputContainer}>
            <TextInput secureTextEntry={isPassword && !isPasswordVisible} placeholder={placeholder} style={styles.input}></TextInput>

            {isPassword ? (
                <Pressable onPress={onEyePressed}>
                <Image style={styles.image} source={isPasswordVisible ? require('../../assets/eye.png') : require('../../assets/eye_closed.png') }/>
                </Pressable>
            ) : null}
        </View>
   </View>
 )
}

export default Input;