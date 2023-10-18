import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

import { View, Text } from 'react-native'
import React from 'react'
import Homescreen from './screens/Homescreen';
import RestaurantScreen from './screens/RestaurantScreen';
import VisitorPage from './screens/Visitor';
import CartScreen from './screens/CartScreen';
import OrderPreparing from './screens/OrderPreparing';
import DeliveryScreen from './screens/DeliveryScreen';



export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="visitor" component={VisitorPage} />
        <Stack.Screen name="Home" component={Homescreen} />
        <Stack.Screen name="Restaurant" component={RestaurantScreen} />
        <Stack.Screen name="Cart" options={{presentation:'modal'}} component={CartScreen} />
        <Stack.Screen name="OrderPreparing" options={{presentation:'fullScreenModal'}} component={OrderPreparing} />
        <Stack.Screen name="Delivery" options={{presentation:'fullScreenModal'}} component={DeliveryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}