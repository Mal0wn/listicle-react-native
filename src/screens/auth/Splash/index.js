import React from "react";
import {styles} from './styles';
import {
    Text,
    Image,
    View
} from 'react-native';
import Button from "../../../components/Button";

const Splash = () => {
    return(
        <View style={styles.container}>
            <Image resizeMode='contain' style={styles.image} source={require('../../../assets/splash.png')}/>
            <Text style={styles.title}>You'll Find</Text>
            <Text style={[styles.innerTitle, styles.title]}>All you need</Text>
            <Text style={styles.title}>Here!</Text>

            <Button title='Sign up'/>
        </View>
       
        
    )
}

export default Splash;