import React from "react";
import {styles} from './styles';
import {
    View
} from 'react-native';
import AuthHeader from "../../../components/AuthHeader";

const SignUp = () => {
    return(
        <View style={styles.container}>
           <AuthHeader title='Sign In'/>
        </View>
       
        
    )
}

export default SignUp;