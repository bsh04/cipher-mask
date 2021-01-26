import React from 'react';
import {View, StyleSheet} from "react-native";
import {Icon} from "react-native-elements";
import {device} from "../tools/device";

export const Rating = ({rating}) => {

    const ratingRender = () => {

        let arr = []

        for (let i = 1; i < 6; i++) {
            if (i <= Math.floor(rating)) {
                arr.push(<Icon key={i} type={"font-awesome"} name={'star'} size={device.width * .05} color={"#ffc400"}/>)
            } else if (rating > Math.floor(rating) && i - rating < 1) {
                arr.push(<Icon key={i} type={"font-awesome"} name={'star-half-full'} size={device.width * .05} color={"#ffc400"}/>)
            } else {
                arr.push(<Icon key={i} type={"font-awesome"} name={'star-o'} size={device.width * .05} color={"#ffc400"}/>)
            }
        }
        return arr
    }

    return (
        <View style={styles.ratingProduct}>
            <View style={styles.ratingContainer}>
                {ratingRender()}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    ratingProduct: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    body: {
        paddingVertical: 15
    },

    ratingTitle: {
        fontWeight: 'bold'
    },

    ratingContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: device.width * .3,
        justifyContent: 'space-between'
    },
})