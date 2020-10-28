import React, {useEffect, useState} from 'react';
import {ScrollView, Text, View} from 'react-native'
import Header from "../components/header";
import {DrawerToggle} from "../components/drawerToggle";
import {CustomInput} from "../components/customInput";
import {CustomPicker} from "../components/customPicker";
import CustomButton from "../components/customButton";
import {cipherHandler} from "../cipherHandler";

export const Coder = (props) => {

    const [text, setText] = useState('')
    const [selectedValue, setSelectedValue] = useState("rot1")
    const [disabled, setDisabled] = useState(true)
    const [result, setResult] = useState('')

    useEffect(() => {
        if (text.trim()) {
            setDisabled(false)
        } else {
            setDisabled(true)
        }
    }, [text])


    const handleCoder = () => {
        setResult(cipherHandler(selectedValue, text))
    }

    return (
        <View style={{flex: 1}}>
            <Header
                title={'Кодировать'}
                headerLeftComponent={<DrawerToggle navigation={props.navigation}/>}
            />
            <ScrollView style={{flex: 1}}>
                <CustomPicker
                    label={'Выберите шифр'}
                    selectedValue={selectedValue}
                    setSelectedValue={setSelectedValue}
                />
                <CustomInput
                    placeholder={'Вводите текст, который необходимо зашифровать'}
                    value={text}
                    onChange={setText}
                />
                <CustomButton
                    title={'Зашифровать'}
                    onPress={handleCoder}
                    disabled={disabled}
                />
                <Text>{result}</Text>
            </ScrollView>
        </View>
    );
};