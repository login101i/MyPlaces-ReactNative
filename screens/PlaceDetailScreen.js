import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function PlaceDetailScreen() {
    return (
        <View>
            <Text></Text>
        </View>
    )
}

PlaceDetailScreen.navigationOptions=navData=>{

return {
    headerTitle:navData.navigation.getParam('placeTitle')
}

}

const styles = StyleSheet.create({})
