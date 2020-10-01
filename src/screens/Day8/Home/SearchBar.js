import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Button from '../../../components/Button';
import Feather from 'react-native-vector-icons/Feather';
import { TextInput } from 'react-native-gesture-handler';

export default function SearchBar() {
    return (
        <View style={styles.container}>
            <Button style={styles.Button}>
                <Feather name="map-pin" size={20} />
            </Button>
            <View style={styles.blockContainer}>
                <View style={styles.block}>
                    <TextInput
                        placeholder="Search for meals or area"
                    />
                </View>
                <Feather name="search" size={20} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})
