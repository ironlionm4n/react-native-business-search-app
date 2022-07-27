import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import SearchScreen from './src/screens/SearchScreen'
import HomeScreen from './src/screens/HomeScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

// App.js is a special file that anything exported from this file is taken and shown by React Native
export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{title: 'Restaurant App'}}>
        <Stack.Screen name='Home' component={HomeScreen} options={{title: 'Home'}}/>
        <Stack.Screen name='Search' component={SearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}