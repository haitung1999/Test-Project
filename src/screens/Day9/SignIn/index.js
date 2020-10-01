import React from 'react'
import { useContext } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { AuthContext } from '../../../contexts'

export default function SignInScreen() {
    const { setIsLoggedIn } = useContext(AuthContext)
    return (
        <View style={styles.container}>
            <Button title="Sign In" onPress={() => setIsLoggedIn(true)} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
