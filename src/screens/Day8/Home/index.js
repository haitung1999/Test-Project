import React from 'react'
import { StyleSheet, Text, View, Button, SafeAreaView, ScrollView } from 'react-native'
import { AuthContext } from '../../../contexts/index';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import SearchBar from './SearchBar';
import TopCategories from './TopCategories';
import PopularItems from './PopularItems';
import NearByDeals from './NearByDeals';


export default function HomeScreen() {

    // const { setIsLoggedIn } = React.useContext(AuthContext);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View>
                    <SearchBar />
                    <TopCategories />
                    <View style={styles.view} />
                    <PopularItems />
                    <View style={styles.view} />
                    <NearByDeals />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    view: {
        height: 1,
        color: '#EFEEEE'
    }
})
