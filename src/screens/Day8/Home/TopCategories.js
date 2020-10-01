import React from 'react'
import { FlatList, Image, StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import HeaderTop from './HeaderTop';
import categories from '../../../mocks/categories.json';

export default function TopCategories() {
    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.button}>
                <Image style={styles.img} source={{ uri: item.image }} />
                <Text style={styles.text}>
                    {item.name}
                </Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <HeaderTop moreIcon="filter" title="Top Categories" moreTitle="Filter" />
            <FlatList
                style={{ marginTop: 10 }}
                data={categories}
                horizontal
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />
        </View>
    )
}

const W = Dimensions.get('window').width / 4

const styles = StyleSheet.create({
    button: {
        padding: 5
    },
    img: {
        width: W,
        height: (W * 9) / 16,
        borderRadius: 8,
    },
    text: {
        padding: 8,
        textAlign: 'center'
    },
    container: {
        padding: 10
    }
})
