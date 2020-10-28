import React from 'react';
import {View} from "react-native";
import Header from "../components/header";
import {BackButton} from "../components/backButton";

export const ListCipher = (props) => {
    return (
        <View>
            <Header
                title={'Список кодировок'}
                headerLeftComponent={<BackButton navigation={props.navigation}/>}
            />
        </View>
    );
};