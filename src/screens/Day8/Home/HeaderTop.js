import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import COLORS from '../../../assets/colors'

export default function HeaderTop({ title, moreTitle, moreIcon }) {
    return (
        <View>
            <Text>{title}</Text>
            <Button>
                <View>
                    <Feather size={18} color={COLORS.orange} name={moreIcon} />
                    <View>
                        {'  '}
                        {moreTitle}
                    </View>
                </View>
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({})
