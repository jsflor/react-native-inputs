import { StyleSheet, TextInput } from 'react-native'
import React from 'react'

import {COLORS, RADIUS, SCREEN_WIDTH, SPACING} from '../theme/index'

export default function Input(props) {
  return (
    <TextInput
    placeholder='Type in here (uncontrolled input)'
    style={styles.input}
    {...props}
    />
  )
}

const styles = StyleSheet.create({
    input: {
        width: SCREEN_WIDTH - SPACING.DOUBLE,
        padding:SPACING.SINGLE, 
        borderRadius: RADIUS.SINGLE,
        backgroundColor: COLORS.INPUT,
        marginBottom: SPACING.SINGLE,
    }
})