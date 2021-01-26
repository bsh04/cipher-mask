import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from "react-native";
import Header from "../components/header";
import {BackButton} from "../components/backButton";
import {DrawerToggle} from "../components/drawerToggle";

export const AlgorithmsList = (props) => {
    return (
        <View style={{flex: 1}}>
            <Header
                title={'Список алгоритмов'}
                headerLeftComponent={<DrawerToggle navigation={props.navigation}/>}
            />
            <ScrollView style={{flex: 1, padding: 10}}>
                <Text style={{paddingBottom: 10, fontSize: 15, textAlign: "justify"}}>Здесь предствлены некоторые алгоритмы, которые используют в повседневной жизни.
                    {'\n'}{'\n'}Нажмите для того, чтобы воспользоваться алгоритмом...
                </Text>
                <TouchableOpacity style={{borderTopWidth: 1, borderBottomWidth: 1, borderBottomColor: '#ccc', borderTopColor: '#ccc', height: 100, justifyContent: 'center'}} onPress={() => props.navigation.navigate('Algorithm')}>
                    <Text style={{paddingHorizontal: 10, fontWeight: 'bold'}}>Алгоритм Луна</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};