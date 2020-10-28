import React, {useContext, useEffect, useState} from 'react';
import {Clipboard, ScrollView, Text, TouchableOpacity, View} from 'react-native'
import Header from "../components/header";
import {DrawerToggle} from "../components/drawerToggle";
import {NotificationContext} from "../context/notificationContext";
import {cipherHandler} from "../cipherHandler";
import {CustomPicker} from "../components/customPicker";
import {CustomInput} from "../components/customInput";
import CustomButton from "../components/customButton";

export const Decoder = (props) => {
    const [text, setText] = useState('')
    const [key, setKey] = useState('')
    const [selectedValue, setSelectedValue] = useState("rot1")
    const [disabled, setDisabled] = useState(true)
    const [result, setResult] = useState('')

    const showNot = useContext(NotificationContext)

    useEffect(() => {
        if (selectedValue === 'vigener') {
            if (key.trim() !== '' && text.trim() !== '') {
                setDisabled(false)
            } else {
                setDisabled(true)
            }
        } else {
            if (text.trim()) {
                setDisabled(false)
            } else {
                setDisabled(true)
            }
        }
    }, [text, key])

    useEffect(() => {
        setResult('')
        setText('')
        setKey('')
    }, [selectedValue])

    const handleDecoder = () => {
        setResult(cipherHandler(false, selectedValue, text, key))
    }

    return (
        <View style={{flex: 1}}>
            <Header
                title={'Декодировать'}
                headerLeftComponent={<DrawerToggle navigation={props.navigation}/>}
            />
            <ScrollView style={{flex: 1}}>
                <CustomPicker
                    label={'Выберите шифр'}
                    selectedValue={selectedValue}
                    setSelectedValue={setSelectedValue}
                />
                <CustomInput
                    placeholder={'Вводите текст, который надо расшифровать'}
                    value={text}
                    onChange={setText}
                    onEndEditing={handleDecoder}
                />
                {
                    selectedValue === 'vigener'
                    &&
                    <CustomInput
                        placeholder={'Введите ключ'}
                        value={key}
                        numberOfLines={1}
                        onChange={setKey}
                        onEndEditing={handleDecoder}
                    />
                }
                <CustomButton
                    title={'Расшифровать'}
                    onPress={handleDecoder}
                    disabled={disabled}
                />
                <View style={{padding: 20}}>
                    <Text style={{
                        paddingBottom: 10,
                        textAlign: 'center',
                        fontWeight: 'bold',
                        opacity: .5,
                        color: 'black'
                    }}>Ниже будет показан результат работы программы</Text>
                    <View style={{backgroundColor: '#ccc', height: 200, paddingVertical: 5}}>
                        <ScrollView>
                            <TouchableOpacity
                                activeOpacity={.1}
                                onLongPress={() => {
                                    showNot(true)
                                    Clipboard.setString(result)
                                }}
                            >
                                <Text style={{margin: 15, lineHeight: 25}}>{result}</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};