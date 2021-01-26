import React from 'react';
import {Button} from "react-native-elements";
import {device} from "../tools/device";
import {Alert} from "react-native";

const CustomButton = ({title, onPress, disabled}) => {

    const disabledAlert = () => (
        Alert.alert('Внимание', 'Необходимо ввести текст')
    )

    return (
        <Button
            title={title}
            onPress={disabled ? disabledAlert : onPress}
            containerStyle={{width: device.width, alignItems: "center"}}
            buttonStyle={[disabled ? {backgroundColor: '#ccc'} : {backgroundColor: '#43a047'}, {width: device.width * .5, borderRadius: 10}]}
            titleStyle={disabled ? {color: 'black'} : {}}
        />
    );
};

export default CustomButton;