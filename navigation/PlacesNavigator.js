import React from 'react';
import {Platform} from 'react-native'
import {createAppContainer} from 'react-navigation'
import { createStackNavigator } from '@react-navigation/stack'





import MapScreen from '../screens/MapScreen'
import NewPlacesScreen from '../screens/NewPlaceScreen'
import PlaceDetailScreen from '../screens/PlaceDetailScreen'
import PlacesListScreen from '../screens/PlacesListScreen'
import Colors from '../constants/Colors'




const PlacesNavigator = createStackNavigator({
    Places:PlacesListScreen,
    Map: MapScreen,
    NewPlace: NewPlacesScreen,
    placeDetail:PlaceDetailScreen

},
    {

defaultNavigationOptions:{
    headerTitle:"Strona główna",
    headerStyle:{
        backgroundColor:Platform.OS==='android'?Colors.primary:''
    },
            headerTintColor: Platform.OS === 'android' ? "white": 'Colors.primary '
}
    }
    )

export default createAppContainer(PlacesNavigator)


