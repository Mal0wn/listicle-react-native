import React from "react";
import {styles} from './styles';
import {
    View
} from 'react-native';
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";

const SignUp = () => {
    return(
        <View style={styles.container}>
           <AuthHeader title='Sign In'/>
           <Input label='Name' placeholder="John Doe" />
           <Input label='Email' placeholder="johndoe@example.com" />
           <Input label='Password' placeholder="***********" isPassword />
        </View>
    )
}

export default SignUp;