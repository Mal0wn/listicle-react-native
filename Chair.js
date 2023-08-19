import React, {useEffect, useState} from 'react';
import {
    Text
} from 'react-native';

const Chair = (props) => {

const {theme} = props; // Syntax Object Destructuring = props.theme = {theme} = props 
    const [isBig , setIsBig] = useState(false)

    /**
     * When we put the state isBig in the array , useEffect is called each time when we click in the OnPress for changed State
     * When we put nothing in the array , useEffect is called once when the component is mounted 
     */
    useEffect(() => {
        console.log('inside useEffect'); 
    }, [isBig])

    console.log('isBig : >>>' + isBig)
    const changeState = () => {
        setIsBig(currentState => !currentState)
    }

    return (
        /**
         * When we depend a state we out style like this
         */
        <Text style={{ fontSize: isBig ? 24 : 14, color: theme === 'dark' ? 'grey' : 'pink'}} onPress={changeState}> This is Chair</Text>
    )
}

export default Chair;