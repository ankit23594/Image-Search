import React from 'react'
import { View, StyleSheet } from 'react-native'

import { createStackNavigator } from '@react-navigation/stack'

import Home from '../screens/Home'
import ImageList from '../screens/ImageList'
import ImageDetail from '../screens/ImageDetail'

const Stack = createStackNavigator()

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name='Home'
        component={Home}
      />
      <Stack.Screen
        name='ImageList'
        component={ImageList}
        options={{ 
          title: 'Image List',
          headerTitleStyle: styles.title
        }}
      />
      <Stack.Screen
        name='ImageDetail'
        component={ImageDetail}
        options={{
          title: 'Image Details',
          headerTitleStyle: styles.title
        }}
      />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 20
  }
})

export default AppNavigator