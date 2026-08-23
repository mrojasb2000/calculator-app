import { View, Text } from 'react-native'
import React from 'react'
import { Slot } from 'expo-router'
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { Colors } from '@/constants/theme';

const Rootlayout = () => {

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf')
  })

  if (!loaded) {
    return null;
  }

  return (
    <View style={{ backgroundColor: Colors.background, flex: 1}}>
      <Text>Rootlayout</Text>
      <Slot />

      <StatusBar style='light' />
    </View>
  )
}

export default Rootlayout