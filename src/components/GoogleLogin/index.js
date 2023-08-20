import React from "react";
import {TouchableOpacity, Image } from "react-native";
import {styles} from './styles';

const GoogleLogin = ({}) => {
 return(
    <TouchableOpacity activeOpacity={0.6} style={styles.container}>
       <Image style={styles.googleImage} source={require('../../assets/google.png')} />
    </TouchableOpacity>
 )
}

export default React.memo(GoogleLogin);