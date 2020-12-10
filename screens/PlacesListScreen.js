import React from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux'


import CustomHeaderButton from '../components/HeaderButtons'
import PlaceItem from '../components/PlaceItem'


export default function PlacesListScreen(props) {

    const places = useSelector(state => state.places.places)

    return (
        <View>
            <Text>PlacesListScrreen</Text>
            <FlatList
                data={places}
                keyExtractor={item => item.id}
                renderItem={itemData => <PlaceItem
                    onSelect={props.navigation.navigate("PlaceDetail", {
                        placeTitle: itemData.item.title,
                        placeId: itemData.item.id
                    })}
                    image={null}
                    title={itemData.item.title}
                    address={null}
                />}
            />
        </View>
    )
}

const styles = StyleSheet.create({})


PlacesListScreen.navigationOptions = navData => {
    return {
        headerTitle: "Home Site",
        headerRight: (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                    title="Add Place"
                    iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
                    onPress={() => { navData.navigation.navigate("NewPlace") }}
                />
            </HeaderButtons>
        ),
    }
}