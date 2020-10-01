import React from 'react'
import { StyleSheet, Text, View, FlatList, Dimensions, Image, TouchableOpacity } from 'react-native'
import Button from '../../../components/Button';
import foodapp from '../../../mocks/foodapp.json';
import HeaderTop from './HeaderTop';
export default function NearByDeals() {
    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.button}>
                <View style={styles.div}>
                    <Image style={styles.img} source={{ uri: item.image }} />
                    <View paddingVertical={8}>
                        <Text size={16}>{item.name}</Text>
                        <Text color="#AAAAAA">By {item.location}</Text>

                        <Text size={16}>{item.price}</Text>
                    </View>

                    <View style={styles.saleoff}>
                        <Text style={styles.discount}>
                            10% OFF
                </Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <View padding={10}>
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
const W = Dimensions.get('window').width / 2

const styles = StyleSheet.create({
    button: {
        margin: 5,
        borderRadius: 8,
        padding: 10,
        color: '#fff'
    },
    img: {
        width: W,
        height: W / 2,
        borderRadius: 8,
    },
    div: {
        position: 'relative',
    },
    saleoff: {
        position: 'absolute',
        top: 4,
        right: 4,
    },
    discount: {
        padding: 3,
        color: "#fff",
        backgroundColor: "#FF0000"

    }
})
