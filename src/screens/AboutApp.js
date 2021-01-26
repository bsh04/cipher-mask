import React from 'react';
import {Text, View} from 'react-native'
import Header from "../components/header";
import {BackButton} from "../components/backButton";
import {DrawerToggle} from "../components/drawerToggle";

export const AboutApp = (props) => {
    return (
        <View>
            <Header
                title={'О приложении'}
                headerLeftComponent={<DrawerToggle navigation={props.navigation}/>}
            />
            <View style={{height: '70%', alignItems: 'center', justifyContent: "center", paddingHorizontal: 20}}>
                <Text style={{fontSize: 18}}>Всем привет!{'\n'}</Text>
                <Text style={{fontSize: 14, width: '100%', textAlign: 'left'}}>Данное приложение носит название Cipher Master.{'\n'}</Text>
                <Text style={{width: '100%', textAlign: "justify", }}>Cipher Master поможет вам в шифровке и расшифровки текста используя для этого различные шифры, полный
                    список таких алгоритмов можно посмотреть <Text
                        style={{color: '#2196f3', textDecorationLine: "underline"}}
                        onPress={() => props.navigation.navigate('List')}>здесь</Text>.{'\n'}</Text>
                <Text style={{width: '100%', textAlign: "justify", }}>Помимо этого, в данном приложении можно испробовать в действии различные алгоритмы, такие как алгоритм Луна.{'\n'}</Text>
                <Text style={{width: '100%', textAlign: "justify", }}>Приложение разработал: Власов Дмитрий</Text>
            </View>
        </View>
    );
};