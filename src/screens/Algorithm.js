import React, {useState} from 'react';
import {ScrollView, View} from "react-native";
import Header from "../components/header";
import {BackButton} from "../components/backButton";
import {Text} from "react-native-elements";
import {CustomInput} from "../components/customInput";
import CustomButton from "../components/customButton";

export const Algorithm = (props) => {

    const [card, setCard] = useState('')
    const [isValid, setIsValid] = useState(null)

    const handleSubmit = () => {
        let sum = 0;

        for (let i = 0; i < card.length; i++) {
            let cardNum = parseInt(card[i])

            if ((card.length - i) % 2 === 0) {
                cardNum = cardNum * 2

                if (cardNum > 9) {
                    cardNum = cardNum - 9
                }
            }

            sum += cardNum;
        }

        setIsValid(sum % 10 === 0)
    }

    return (
        <View style={{flex: 1}}>
            <Header
                title={'Алгоритм Луна'}
                headerLeftComponent={<BackButton navigation={props.navigation}/>}
            />
            <ScrollView style={{flex: 1, paddingHorizontal: 10, paddingVertical: 15}}>
                <Text style={{textAlign: "justify"}}>Алгоритм Луна предназначен для вычисления контрольной цифры номера пластиковой карты в соответствии со стандартом ISO/IEC 7812.</Text>
                <Text style={{textAlign: "justify"}}>{'\n'}Введите номер карты, чтобы узнать, действительная ли она.</Text>
                <View style={{flex: 1, alignItems: 'center'}}>
                    <CustomInput
                        value={card}
                        onChange={setCard}
                        numberOfLines={1}
                        onSubmitEditing={handleSubmit}
                        inputContainerStyle={{padding: 0, paddingHorizontal: 10}}
                        placeholder={'ХХХХ - ХХХХ - ХХХХ - ХХХХ'}
                        keyboardType={'phone-pad'}
                    />
                    <CustomButton
                        onPress={handleSubmit}
                        title={'Проверить'}
                        disabled={!card.trim()}
                    />
                    {isValid !== null && <Text style={{textAlign: 'center', paddingVertical: 20, fontWeight: 'bold'}}>{isValid ? 'Эта карта действительна' : 'Эта карта не действительна'}</Text>}
                </View>
            </ScrollView>
        </View>
    );
};