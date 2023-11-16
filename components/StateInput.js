import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Input from './Input'

export default function StateInput() {
  const [value, setValue] = React.useState('');
  return (
    <Input
      value={value}
      onChangeText={setValue}
      placeholder='Type in here (controlled input)'
    />
  )
}

const styles = StyleSheet.create({})