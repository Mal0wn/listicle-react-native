import React, { useState } from "react";
import {styles} from './styles';
import {
    View, 
    Text
} from 'react-native';
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";
import Checkbox from "../../../components/Checkbox";
import Button from "../../../components/Button";

const SignUp = () => {

    const [checked , setChecked] = useState(false)


    return(
        <View style={styles.container}>
           <AuthHeader title='Sign In'/>
           <Input label='Name' placeholder="John Doe" />
           <Input label='Email' placeholder="johndoe@example.com" />
           <Input label='Password' placeholder="***********" isPassword />

           <View style={styles.agreeRow}>
           <Checkbox checked={checked} onCheck={setChecked} />
           <Text style={styles.label}>I agree with <Text style={[styles.label, styles.labelBold]}>Terms</Text> & <Text style={[styles.label, styles.labelBold]}>Privacy</Text>.</Text>
           </View>
           <Button style={styles.button} title='Sign up'/>
           
        </View>
    )
}

export default SignUp;