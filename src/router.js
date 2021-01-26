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
    ListCipher,
    Algorithm,
    AlgorithmsList
} from './screens/index'
import {View, Text} from "react-native";
import {Icon} from "react-native-elements";

const BottomTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const CipherStack = createStackNavigator();
const AboutStack = createStackNavigator();
const AlgorithmStack = createStackNavigator();

function CipherStackNavigator() {
    return (
        <CipherStack.Navigator screenOptions={{headerShown: false}}>
            <CipherStack.Screen name="List" component={ListCipher}/>
            <CipherStack.Screen name="Cipher" component={Cipher}/>
        </CipherStack.Navigator>
    );
}

function AboutStackNavigator() {
    return (
        <AboutStack.Navigator screenOptions={{headerShown: false}}>
            <AboutStack.Screen name="About" component={AboutApp}/>
            <AboutStack.Screen name="List" component={ListCipher}/>
        </AboutStack.Navigator>
    );
}

function AlgorithmStackNavigator() {
    return (
        <AlgorithmStack.Navigator screenOptions={{headerShown: false}}>
            <AlgorithmStack.Screen name="AlgorithmList" component={AlgorithmsList}/>
            <AlgorithmStack.Screen name="Algorithm" component={Algorithm}/>
        </AlgorithmStack.Navigator>
    );
}

function BottomTabNavigator() {
    return (
        <BottomTab.Navigator tabBarOptions={{
            style: {height: 60, backgroundColor: "#e0e0e0"},
            tabStyle: {alignItems: 'center', flexDirection: 'column', paddingBottom: 5,}
        }}>
            <BottomTab.Screen name="Coder" component={Coder} options={() => ({
                tabBarLabel: ({focused}) => <Text
                    style={{color: focused ? '#2196f3' : 'gray', fontStyle: "italic"}}>Кодировать</Text>,
                tabBarIcon: ({focused}) => <Icon name={'lock'} type={"font-awesome"}
                                                 color={focused ? '#2196f3' : 'gray'}/>
            })}/>
            <BottomTab.Screen name="Decoder" component={Decoder} options={() => ({
                tabBarLabel: ({focused}) => <Text
                    style={{color: focused ? '#2196f3' : 'gray', fontStyle: "italic"}}>Декодировать</Text>,
                tabBarIcon: ({focused}) => <Icon name={'unlock'} type={"font-awesome"}
                                                 color={focused ? '#2196f3' : 'gray'}/>
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
                        onPress={() => {
                        }}
            />
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
}

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            drawerType={"slide"}
            initialRouteName="Coder"
            drawerPosition="left"
            drawerContent={props => <CustomDrawerContent {...props} />}
            drawerContentOptions={{
                itemStyle: {paddingLeft: 10, marginVertical: 0},
                labelStyle: {color: "#4a148c", fontSize: 16},
                style: {backgroundColor: "#eceff1"}
            }}
        >
            <Drawer.Screen name={'Главная'} component={BottomTabNavigator}/>
            <Drawer.Screen name={'Список шифров'} component={CipherStackNavigator}/>
            <Drawer.Screen name={'Список алгоритмов'} component={AlgorithmStackNavigator}/>
            <Drawer.Screen name={'О приложении'} component={AboutStackNavigator}/>
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