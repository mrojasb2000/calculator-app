import { View, Text } from 'react-native'
import React from 'react'
import { Slot } from 'expo-router'

const Rootlayout = () => {
  return (
    <View>
      <Text>Rootlayout</Text>
      <Slot />
    </View>
  )
}

export default Rootlayout