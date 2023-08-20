import { StyleSheet } from "react-native";
import {colors} from '../../utils/colors'

export const styles = StyleSheet.create({
    container: {
       marginBottom : 20
    },
    label : {
        color : colors.blue,
        fontSize : 14,
        marginBottom : 8,
        fontWeight : '600'
    },
    inputContainer : {
        borderWidth : 1,
        borderColor : colors.blueGrey,
        borderRadius : 14,
        flexDirection : 'row',
        alignItems:'center',
        justifyContent : 'space-between'

    },
    input : {
        paddingVertical : 20,
        paddingHorizontal : 16,
        width : '80%'
    },
    image : {
        width: 24,
        height : 24,
        marginHorizontal : 10
    }
})