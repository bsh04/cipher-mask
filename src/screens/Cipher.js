import React from 'react';
import {ScrollView, Text, View, StyleSheet} from 'react-native'
import Header from "../components/header";
import {BackButton} from "../components/backButton";
import {Rating} from "../components/rating";

export const Cipher = (props) => {

    const item = props.route.params.item

    return (
        <View style={{flex: 1}}>
            <Header
                title={'О шифре'}
                headerLeftComponent={<BackButton navigation={props.navigation}/>}
            />
            <ScrollView style={styles.container}>
                <Text style={styles.title}>{item.title}</Text>
                <View style={styles.titleCont}>
                    <Text style={{paddingBottom: 5, fontWeight: 'bold'}}>Сложность шифра: </Text>
                    <Rating rating={item.rating}/>
                </View>
                <View style={styles.titleCont}>
                    <Text style={{paddingBottom: 5, fontWeight: 'bold'}}>Описание шифра: </Text>
                    <Text style={{textAlign: "justify"}}>{item.desc}</Text>
                </View>
                {
                    item.authors && <View style={styles.titleCont}>
                        <Text style={{paddingBottom: 5, fontWeight: 'bold'}}>Автор шифра: </Text>
                        <Text style={{textAlign: "justify"}}>{item.authors}</Text>
                    </View>
                }
                {
                    item.year && <View style={styles.titleCont}>
                        <Text style={{paddingBottom: 5, fontWeight: 'bold'}}>Год создания шифра: </Text>
                        <Text style={{textAlign: "justify"}}>{item.year}</Text>
                    </View>
                }
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1
    },
    titleCont: {
        paddingVertical: 10,
        justifyContent: 'space-between'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center'
    }
})