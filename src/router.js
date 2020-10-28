import React from 'react';

import {createDrawerNavigator, DrawerItem, DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import {
    Decoder,
    Coder,
    AboutApp,
    Cipher,
    ListCipher
} from './screens/index'
import {View} from "react-native";
import {Icon} from "react-native-elements";

const BottomTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const CipherStack = createStackNavigator();

function CipherStackNavigator() {
    return (
        <CipherStack.Navigator screenOptions={{headerShown: false}}>
            <CipherStack.Screen name="List" component={ListCipher}/>
            <CipherStack.Screen name="Cipher" component={Cipher}/>
        </CipherStack.Navigator>
    );
}

function BottomTabNavigator() {
    return (
        <BottomTab.Navigator>
            <BottomTab.Screen name="Coder" component={Coder} options={() => ({
                title: 'Кодировать',
                tabBarIcon: ({focused}) => <Icon name={'lock'} type={"font-awesome"} color={focused ? '#2196f3' : 'gray'}/>
            })}/>
            <BottomTab.Screen name="Decoder" component={Decoder} options={() => ({
                title: 'Декодировать',
                tabBarIcon: ({focused}) => <Icon name={'unlock'} type={"font-awesome"} color={focused ? '#2196f3' : 'gray'}/>
            })}/>
        </BottomTab.Navigator>
    );
}


function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItem label="Cipher Master"
                        style={{height: 80}}
                        labelStyle={{
                            paddingLeft: 10,
                            textAlignVertical: "bottom",
                            height: '100%',
                            fontWeight: 'bold',
                            fontSize: 16
                        }}
            />
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
}

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            initialRouteName="Coder"
            drawerPosition="left"
            drawerContent={props => <CustomDrawerContent {...props} />}
            drawerContentOptions={{itemStyle: {paddingLeft: 10, marginVertical: 0}}}
        >
            <Drawer.Screen name={'Главная'} component={BottomTabNavigator}/>
            <Drawer.Screen name={'Список шифров'} component={CipherStackNavigator}/>
            <Drawer.Screen name={'О приложении'} component={AboutApp}/>
        </Drawer.Navigator>
    )
}

const MainNavigator = () => (
    <View style={{flex: 1}}>
        <NavigationContainer>
            <DrawerNavigator/>
        </NavigationContainer>
    </View>
)

export default MainNavigator