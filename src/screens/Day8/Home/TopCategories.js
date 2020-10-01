import React from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import HeaderTop from './HeaderTop';
import Button from '../../../components/Button';
import categories from '../../../mocks/categories.json';

export default function TopCategories() {
    const renderItem = ({ item }) => {
        return (
            <Button>
                <Image style={styles.img} source={{ uri: item.image }} />
                <View>{item.name}</View>
            </Button>
        )
    }
    return (
        <View style={styles.container}>
            <HeaderTop moreIcon="filter" title="Top Categories" moreTitle="Filter" />
            <FlatList
                style={{ marginTop: 10 }}
                data={categories}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({})
