import React from 'react'
import { StyleSheet, View, Text, FlatList, Image, TouchableOpacity, Dimensions } from 'react-native'
import Button from '../../../components/Button';
import HeaderTop from './HeaderTop'
import foodapp from '../../../mocks/foodapp.json';

export default function PopularItems() {
    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.button}>
                <View style={styles.container}>
                    <Image style={styles.img} source={{ uri: item.image }} />
                    <View style={styles.contentContainer}>
                        <View>
                            <Text size={16}>{item.name}</Text>
                            <Text color="#AAAAAA">By {item.location}</Text>
                        </View>
                        <Text size={16}>{item.price}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.mainContainer}>
            <HeaderTop title="Popular Items" moreTitle="View all" />
            <FlatList
                style={{ marginTop: 10 }}
                horizontal
                data={foodapp}
                renderItem={renderItem}
            />
        </View>
    )
}
const W = Dimensions.get('window').width / 4

const styles = StyleSheet.create({
    button: {
        margin: 5,
        borderRadius: 8,
        padding: 10,
        color: '#fff'
    },
    container: {
        flexDirection: 'row'
    },
    img: {
        width: W,
        height: W,
        borderRadius: 8,
    },
    contentContainer: {
        paddingHorizontal: 8
    }
})
