import React from "react";
import { Pressable, TouchableOpacity, Text } from "react-native";
import {styles} from './styles';

const Button = ({title}) => {
    const handlePress=()=>{
        console.log('Button Pressed');
    }
 return(
    <Pressable hitSlop={24} onPress={handlePress} style={styles.container}>
        <Text style={styles.title}>{title}</Text>
    </Pressable>
 )
}

export default Button;