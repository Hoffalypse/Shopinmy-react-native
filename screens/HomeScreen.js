import { View, Text } from 'react-native'
import React from 'react'
import { TailwindProvider } from 'tailwindcss-react-native';

const HomeScreen = () => {
  return (
    <TailwindProvider>
    <View>
      <Text className ="text-red-500"> This is HomeScreen</Text>
    </View>
    </TailwindProvider>
  )
}

export default HomeScreen