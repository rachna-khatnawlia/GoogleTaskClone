import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import colors from '../styles/colors';
import { moderateScale, moderateScaleVertical, textScale, width } from '../styles/responsiveSize';

export default function Button({
    buttonText = '',
    btnStyle = {},
    buttonTxt = {},
    btnIcon,
    onPress = () => { },
}) {
    return (

        <TouchableOpacity
            style={{
                ...styles.btnStyle,
                ...btnStyle,
            }}
            onPress={onPress}>
            {!!btnIcon ? <Image source={btnIcon} style={styles.imgIcon} /> : <View />}


            <Text style={{
                ...styles.buttonTxt,
                ...buttonTxt
            }}>{buttonText}</Text>

            <View />

        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    btnStyle: {
        height: moderateScale(37),
        paddingHorizontal:moderateScale(22),
        backgroundColor: '#4286f5',
        borderRadius: moderateScale(5),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        alignSelf:'center',
        marginVertical:moderateScaleVertical(15)
    },
    buttonTxt: {
        fontSize: textScale(13),
        fontWeight: '600',
        textAlign: 'center',
        color: colors.white,
        letterSpacing:1,
    },
    imgIcon: {
        marginLeft: moderateScale(19)
    }
});
