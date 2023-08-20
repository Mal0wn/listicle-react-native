import { StyleSheet } from "react-native";
import {colors} from '../../utils/colors'

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.darkGrey,
        paddingVertical: 20,
        paddingHorizontal: 8,
        borderRadius: 14,
        width: '40%',
        height: 60,
        alignSelf:'center',
        justifyContent: 'center',
        alignItems : 'center'
    },
    googleImage : {
        width : 28,
        height : 28
    }
})