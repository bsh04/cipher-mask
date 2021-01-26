import React from 'react';
import {Picker, Text, View} from "react-native";
import {device} from "../tools/device";

export const CustomPicker = ({label, selectedValue, setSelectedValue}) => {


    const renderItems = (item, index) => {
        return (
            <Picker.Item key={index} label={item.label} value={item.value} />
        )
    }

    return (
        <View style={{width: device.width, alignItems: "center", paddingVertical: 10}}>
            <Text style={{paddingVertical: 10, fontWeight: 'bold'}}>{label}</Text>
            <View style={{borderRadius: 10, width: device.width * .6, alignItems: "center", borderColor: '#607d8b', borderWidth: 2}}>
                <Picker
                    selectedValue={selectedValue}
                    style={{ height: 50, width: device.width * .5, borderColor: 'black', borderWidth: 1}}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    {cipherList.map((item, index) => renderItems(item, index))}
                </Picker>
            </View>
        </View>
    );
};

const cipherList = [
    {
        value: 'rot1',
        label: 'ROT1'
    },
    {
        value: 'caesar',
        label: 'Шифр Цезаря'
    },
    {
        value: 'vigener',
        label: 'Шифр Вижинера'
    },
    {
        value: 'a1z26',
        label: 'Шифр A1Z26'
    }
]