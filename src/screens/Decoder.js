import React from 'react';
import {View} from 'react-native'
import Header from "../components/header";
import {DrawerToggle} from "../components/drawerToggle";

export const Decoder = (props) => {
    return (
        <View>
            <Header
                title={'Декодировать'}
                headerLeftComponent={<DrawerToggle navigation={props.navigation}/>}
            />

        </View>
    );
};