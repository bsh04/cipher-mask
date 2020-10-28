import React from 'react';
import {Icon} from "react-native-elements";

export const DrawerToggle = ({navigation}) => {
    return <Icon name={"menu"} type={"entypo"} onPress={() => navigation.openDrawer()} color={'white'}/>
};