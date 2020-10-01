import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Button from '../../../components/Button';

import COLORS from '../../../assets/colors'
import Feather from 'react-native-vector-icons/Feather'

export default function HeaderTop({ title, moreTitle, moreIcon }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Button>
                <View style={styles.content}>
                    <Feather size={18} color={COLORS.orange} name={moreIcon} />
                    <Text style={styles.moreTitle}>
                        {'  '}
                        {moreTitle}
                    </Text>
                </View>
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    },
    moreTitle: {
        color: COLORS.orange
    }
})
