import React, {useContext, useEffect, useState} from 'react';
import {ScrollView, Text, View, Clipboard, TouchableOpacity} from 'react-native'
import Header from "../components/header";
import {DrawerToggle} from "../components/drawerToggle";
import {CustomInput} from "../components/customInput";
import {CustomPicker} from "../components/customPicker";
import CustomButton from "../components/customButton";
import {cipherHandler} from "../cipherHandler";
import {NotificationContext} from "../context/notificationContext";

export const Coder = (props) => {

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
        setKey('')
        setText('')
        setResult('')
    }, [selectedValue])


    const handleCoder = () => {
        setResult(cipherHandler(true, selectedValue, text, key))
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
                    placeholder={'Вводите текст, который надо зашифровать'}
                    value={text}
                    onChange={setText}
                    onSubmitEditing={selectedValue === 'vigener' ? null : handleCoder}
                    multiline={true}
                />
                {
                    selectedValue === 'vigener'
                    &&
                    <CustomInput
                        placeholder={'Введите ключ'}
                        value={key}
                        numberOfLines={1}
                        onChange={setKey}
                        onSubmitEditing={handleCoder}
                        inputContainerStyle={{padding: 0, paddingHorizontal: 10}}
                        multiline={false}
                    />
                }
                <CustomButton
                    title={'Зашифровать'}
                    onPress={handleCoder}
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
                    <View style={{backgroundColor: '#ddd', height: 200, paddingVertical: 5, borderColor: '#444', borderWidth: 1, borderRadius: 5}}>
                        <ScrollView>
                            <TouchableOpacity
                                activeOpacity={.1}
                                onLongPress={() => {
                                    showNot(true)
                                    Clipboard.setString(result)
                                }}
                            >
                                <Text style={{margin: 15, lineHeight: 25, color: 'black', fontSize: 16, opacity: .8}}>{result}</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};