import { View, Text, TouchableWithoutFeedback, Image } from 'react-native';
import React from 'react';

export default function RestaurantCard({ item }) {
  return (
    <TouchableWithoutFeedback>
      <View style={{ marginRight: 6, backgroundColor: 'white', borderRadius: 20, shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.3 }}>
        <Image style={{ height: 144, width: 256, borderTopLeftRadius: 20, borderTopRightRadius: 20 }} source={item.image} />
      </View>
    </TouchableWithoutFeedback>
  );
}
