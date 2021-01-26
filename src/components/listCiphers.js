import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from "react-native";
import {Rating} from "./rating";

export const ListCiphers = ({item, navigation}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Cipher', {item: item})}>
            <Text style={styles.title}>{item.title}</Text>
            <Rating rating={item.rating}/>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 100,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%'
    },
    title: {
        textAlignVertical: 'center',
        height: '100%',
        paddingLeft: 10,
        fontSize: 14,
        fontWeight: 'bold',
        fontStyle: "italic"
    }
})