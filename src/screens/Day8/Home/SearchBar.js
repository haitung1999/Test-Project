import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native'
import Feather from 'react-native-vector-icons/Feather';

export default function SearchBar() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <Feather name="map-pin" size={20} />
            </TouchableOpacity>
            <View style={styles.blockContainer}>
                <View style={styles.block}>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Search for meals or area"
                    />
                </View>
                <Feather name="search" size={20} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    button: {
        margin: 4,
        color: '#fff',
        padding: 10,
        borderRadius: 4,
    },
    blockContainer: {
        margin: 4,
        color: '#fff',
        borderRadius: 4,
        paddingHorizontal: 8,
        flexDirection: 'row',
    },
    // block: {
    //     flex: 1
    // },
    inputText: {
        padding: 10,
        
    }
})
