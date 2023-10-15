import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { themeColors } from '../theam';
import RestaurantCard from './restaurantCard';

export default function FeaturedRow({ title, description, restaurants }) {
  return (
    <View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 16 }}>
        <View>
          <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{title}</Text>
          <Text style={{ color: 'gray', fontSize: 12 }}>{description}</Text>
        </View>
        <TouchableOpacity>
          <Text style={{ color: themeColors.text, fontWeight: 'bold' }}>See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15, paddingVertical: 5 }}>
        {
          restaurants.map((restaurant, index) => (
            <RestaurantCard item={restaurant} key={index} />
          ))
        }
      </ScrollView>
    </View>
  );
}
