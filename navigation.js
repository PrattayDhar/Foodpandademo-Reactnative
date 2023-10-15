import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

import { View, Text } from 'react-native'
import React from 'react'
import Homescreen from './screens/Homescreen';
import RestaurantScreen from './screens/RestaurantScreen';



export default function Navigation() {
  return (
   <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown:false}}>
             <Stack.Screen name="Home" component={Homescreen} />
         <Stack.Screen name="Restaurant" component={RestaurantScreen} />
      
       
      </Stack.Navigator>
    </NavigationContainer>
  )
}