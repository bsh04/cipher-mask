import React from 'react';
import {StatusBar, View, Text, StyleSheet} from "react-native";
import {device} from "../tools/device";

const Header = ({headerLeftComponent, headerRightComponent, title}) => {

    return (
        <View>
            <StatusBar backgroundColor='#455a64'/>
            <View style={styles.container}>
                <View style={styles.leftItems}>
                    {headerLeftComponent ? headerLeftComponent : null}
                </View>
                <Text style={styles.title}>{title}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#546e7a',
        height: 56,
        width: device.width,
        paddingHorizontal: 20,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    leftItems: {
        display: 'flex',
        flexDirection: 'row',
    },
    title: {
        color: 'white',
        fontSize: 18,
        paddingLeft: 20,
        fontWeight: 'bold',
        width: device.width,
        textAlign: 'left'
    },
})

export default Header;