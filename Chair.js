import React, {useState} from 'react';
import {
    Text
} from 'react-native';

const Chair = () => {

    const [isBig , setIsBig] = useState(false)

    console.log('isBig : >>>' + isBig)
    const changeState = () => {
        setIsBig(currentState => !currentState)
    }

    return (
        <Text style={{ fontSize: isBig ? 24 : 14}} onPress={changeState}> This is Chair</Text>
    )
}

export default Chair;