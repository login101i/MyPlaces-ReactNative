import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export default function PlaceItem(props) {
    return (
        <TouchableOpacity style={styles.placeItem} onPress={props.onSelect}  >
            <Image style={styles.image} source={{ uri: props.image }} />
            <View style={styles.infoContainer}>
                <Text style={styles.title}>props.title</Text>
                <Text style={styles.address}>{props.address}</Text>
            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({})
