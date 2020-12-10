import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, ScrollView, Button, Image, View } from 'react-native'
import {useDispatch} from 'react-redux'


import Colors from '../constants/Colors'
import * as placesActions from '../store/placesAction'


export default function NewPlaceScreen(props) {

    const [titleValue, setTitleValue] = useSTate('')

    const titleChangeHandler = (text) => {
        setTitleValue(text)
    }

    const savePlaceHandler=()=>{
        dispatchEvent(placesActions.addPlace(titleValue))
        props.navigation.goBack()
    }

    return (


        <ScrollView>
            <View style={styles.form}>
                <Text style={styles.label}>Tytuł</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={titleChagneHandler}
                    value={titleValue}
                />
                <Button
                    title="save place"
                    color={Colors.primary}
                    onPress={savePlaceHandler}

                />
            </View>
        </ScrollView>

    )
}

NewPlaceScreen.navigationOptions = {
    headerTitle: "Dodaj miejsce"
}

const styles = StyleSheet.create({
    form: {
        margin: 30,
    },
    label: {
        fontSize: 18,
        marginBottom: 15
    },
    textInput: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: 15,
        paddingVertical: 4,
        paddingHorizontal: 4,
        textAlign: 'center'
    }
})
