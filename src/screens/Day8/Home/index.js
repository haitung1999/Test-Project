import React from 'react'
import { StyleSheet, Text, View, Button, SafeAreaView, ScrollView } from 'react-native'
import { AuthContext } from '../../../contexts/index';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import SearchBar from './SearchBar';
import TopCategories from './TopCategories';

const Tabs = createStackNavigator();
const Foodtack = createStackNavigator();
const AccountStack = createStackNavigator();

const TabsName = {
    Explorere: "Explorer",
    Account: "Account",
}

const ExplorerScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <View>
                    <SearchBar />
                    <TopCategories />
                    <View />
                    <PopularItems />
                    <View />
                    <NearByDeals />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default function HomeScreen() {

    const { setIsLoggedIn } = React.useContext(AuthContext);

    return (
        <Tabs.Navigator>
            <Tabs.Screen name={TabsName.Explorer} component={ExolorerStackScreen} />
            <Tabs.Screen name={TabsName.Account} component={AccountStackScreen} />
        </Tabs.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
