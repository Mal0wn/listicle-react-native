import React from "react";
import {styles} from './styles';
import {
    Text,
    Image,
    View,
    Pressable
} from 'react-native';
import Button from "../../../components/Button";

const Splash = () => {
    return(
        <View style={styles.container}>
            <Image resizeMode='contain' style={styles.image} source={require('../../../assets/splash.png')}/>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>You'll Find</Text>
                <Text style={[styles.innerTitle, styles.title]}>All you need</Text>
                <Text style={styles.title}>Here!</Text>
            </View>
            <Button title='Sign up'/>

            <Pressable hitSlop={20}>
                <Text style={styles.footerText}>Sign In</Text>
            </Pressable>
        </View>
       
        
    )
}

export default Splash;