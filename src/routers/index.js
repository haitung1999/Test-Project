import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React, { useContext, useState, useCallback, useEffect, useMemo } from 'react'
import { StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import { AuthContext } from '../contexts';

import EditProfileScreen from '../screens/Day9/EditProfile';
import FoodDetailScreen from '../screens/Day9/FoodDetail';
import ForgotPasswardScreen from '../screens/Day9/ForgotPassword';
import HomeScreen from '../screens/Day9/Home';
import AccountScreen from '../screens/Day8/Account'
import SignInScreen from '../screens/Day8/SignIn/index';
import SignUpScreen from '../screens/Day9/SignUp';
import SplashScreen from '../screens/Day9/Splash';

// Creat AuthStack
const AuthStack = createStackNavigator();
const authStack = () => (
    <AuthStack.Navigator initialRouteName="SignIn">
        <AuthStack.Screen name="SignIn" component={SignInScreen} />
        <AuthStack.Screen name="SignUp" component={SignUpScreen} />
        <AuthStack.Screen name="ForgotPassword" component={ForgotPasswardScreen} />
    </AuthStack.Navigator>
);

// Creat MainTab
const MainTab = createBottomTabNavigator();
const mainTab = () => (
    <MainTab.Navigator>
        <MainTab.Screen name="Home" component={HomeScreen} />
        <MainTab.Screen name="Profile" component={AccountScreen} />
    </MainTab.Navigator>
);

// creat MainStack
const MainStack = createStackNavigator();
const mainStack = () => (
    <MainStack.Navigator initialRouteName="MainTab">
        <MainStack.Screen name="MainTab" component={mainTab} />
        <MainStack.Screen name="EditProfile" component={EditProfileScreen} />
        <MainStack.Screen name="FoodDetail" component={FoodDetailScreen} />
    </MainStack.Navigator>
)

const LOGIN_KEY = 'USER_LOGIN_KEY';

export default function RootRouter() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [restoring, setIsRestoring] = useState(true);

    const authContext = useMemo(() => {
        return {
            onSignedIn: () => {
                setIsLoggedIn(true)
            },
            signOut: () => {
                setIsLoggedIn(false)
            }
        }
    }, [])
    const restoreLoggedInStatus = useCallback(async () => {
        try {
            const loggedInState = await AsyncStorage.getItem(LOGIN_KEY);
            setIsLoggedIn(loggedInState ? JSON.parse(loggedInState) : false);
            setTimeout(() => {
                setIsRestoring(false);
            }, 1000);
        } catch (e) {
            setIsRestoring(false);
            return false;
        }
    }, [setIsLoggedIn])

    const cacheLoggedInStatus = useCallback(async (loggedInState) => {
        try {
            await AsyncStorage.setItem(LOGIN_KEY, JSON.stringify(loggedInState))
        } catch (e) {
            return false;
        }
    }, [])

    useEffect(() => {
        restoreLoggedInStatus();
    }, [restoreLoggedInStatus]);

    useEffect(() => {
        cacheLoggedInStatus(isLoggedIn);
    }, [cacheLoggedInStatus, isLoggedIn])

    return (
        <AuthContext.Provider value={authContext} >
            <NavigationContainer>
                {restoring ? <SplashScreen /> : !isLoggedIn ? authStack() : mainStack()}
            </NavigationContainer>
        </AuthContext.Provider>
    )
}

const styles = StyleSheet.create({})
