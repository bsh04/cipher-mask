import React from 'react';
import {Icon} from "react-native-elements";

export const BackButton = ({navigation}) => {
    return <Icon name={'arrowleft'} type={"antdesign"} onPress={() => navigation.goBack()} color={'white'}/>
};