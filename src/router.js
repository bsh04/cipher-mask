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
                tabBarIcon: () => <Icon name={'lock'} type={"font-awesome"}/>
            })}/>
            <BottomTab.Screen name="Decoder" component={Decoder} options={() => ({
                tabBarIcon: () => <Icon name={'unlock'} type={"font-awesome"}/>
            })}/>
        </BottomTab.Navigator>
    );
}


function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItem label="Coder | Decoder"
                        style={{height: 80}}
                        labelStyle={{
                            textTransform: "uppercase",
                            paddingLeft: 10,
                            textAlignVertical: "bottom",
                            height: '100%'
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