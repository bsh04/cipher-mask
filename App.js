import React, {useRef, useState} from 'react';
import {View, StyleSheet, Animated, Text} from 'react-native';
import MainNavigator from "./src/router";
import {NotificationContext} from "./src/context/notificationContext";
import {device} from "./src/tools/device";

export default function App() {

    const [showNot, setShowNot] = useState(false)

    const fadeAnim = useRef(new Animated.Value(-50)).current

    React.useEffect(() => {
        if (showNot) {
            startAnimation()
        }
    }, [showNot])

    const endAnimation = async () => {
        await Animated.timing(
            fadeAnim,
            {
                toValue: -50,
                duration: 300,
                useNativeDriver: false,
            },
        ).start();

        const clearState = window.setTimeout(() => {
            setShowNot(false)
            window.clearTimeout(clearState)
        }, 300)
    }

    const startAnimation = async () => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 60,
                duration: 300,
                useNativeDriver: false,
            }
        ).start();

        const timeOut = window.setTimeout(() => {
            endAnimation()
            window.clearTimeout(timeOut)
        }, 3000)
    }


    return (
        <NotificationContext.Provider value={setShowNot}>
            <View style={{flex: 1}}>
                <MainNavigator/>
                <View style={styles.container}>
                    <Animated.View style={[styles.notificationContainer, {bottom: fadeAnim}]}>
                        <Text style={styles.notText}>Текст скопирован в буфер обмена!</Text>
                    </Animated.View>
                </View>
            </View>
        </NotificationContext.Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        width: device.width,
        alignItems: 'center'
    },
    notificationContainer: {
        position: 'absolute',
        width: device.width * .95,
        height: 40,
        backgroundColor: 'white',
        borderRadius: 5,
        bottom: 60,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    notText: {
        color: 'black',
        opacity: .5,
        fontSize: 14,
        textAlignVertical: 'center',
        height: 40,
        paddingLeft: 10
    }
})