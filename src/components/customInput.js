import React, {useState} from 'react';
import {StyleSheet} from "react-native";
import {Input} from "react-native-elements";
import {device} from "../tools/device";

export const CustomInput = ({label, placeholder, onChange, value, onEndEditing, numberOfLines}) => {

    const [focus, setFocus] = useState(false)

    return (
        <Input
            label={label}
            placeholder={placeholder}
            value={value}
            onChangeText={onChange}
            numberOfLines={numberOfLines ? numberOfLines : 5}
            inputStyle={{textAlignVertical: 'top', fontSize: 15}}
            containerStyle={styles.containerStyle}
            inputContainerStyle={[styles.inputContainerStyle, focus ? {borderColor: '#00C12B'} : {}]}
            onBlur={() => setFocus(false)}
            onFocus={() => setFocus(true)}
            onEndEditing={onEndEditing ? onEndEditing : null}
        />
    )
};

const styles = StyleSheet.create({
    inputContainerStyle: {
        width: device.width * .9,
        padding: 10,
        borderBottomWidth: 2
    },
    containerStyle: {
        width: device.width,
        paddingVertical: 20,
        alignItems: 'center'
    }
})