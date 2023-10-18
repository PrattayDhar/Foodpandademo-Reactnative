import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as Icon from 'react-native-feather';
import { themeColors } from '../theam';
import DishRow from '../components/dishRow';
import CartIcon from '../components/carticon';
import { StatusBar } from 'expo-status-bar';

export default function RestaurantScreen() {
  const { params } = useRoute();
  const navigation = useNavigation();
  const item = params;

  return (
    <View>
      <CartIcon/>
      <StatusBar style="light"/>
      <ScrollView>
        <View style={{ position: 'relative' }}>
          <Image
            style={{ width: '100%', height: 450 }}
            source={item.image}
          />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              position: 'absolute',
              top: 40,
              left: 4,
              backgroundColor: themeColors.bgColor(1),
              padding: 10,
              borderRadius: 50,
              shadowColor: 'black',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.3,
            }}>
            <Icon.ArrowLeft strokeWidth={3} stroke="white" />
          </TouchableOpacity>
        </View>
        <View style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40, backgroundColor: 'white', marginTop: -12, paddingTop: 6 }}>
          <View style={{ paddingHorizontal: 20 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{item.name}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 2 }}>
              <Image source={require('../assets/images/fullStar.png')} style={{ height: 16, width: 16 }} />
              <Text style={{ fontSize: 14, marginLeft: 4 }}>
                <Text style={{ color: 'green' }}>{item.stars}</Text>
                <Text style={{ color: 'gray' }}>
                  ({item.reviews} reviews).
                  <Text style={{ fontWeight: 'bold' }}>{item.category}</Text>
                </Text>
              </Text>
            </View>
            <Text style={{ color: 'gray', marginTop: 2 }}>{item.description}</Text>
          </View>
        </View>
        <View style={{ backgroundColor: 'white', paddingBottom: 36 }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold', paddingLeft: 20, paddingTop: 20 }}>Menu</Text>
          {item.dishes.map((dish, index) => (
            <DishRow key={index} item={{ ...dish }} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
