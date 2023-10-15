import { View, Text, TouchableWithoutFeedback, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function RestaurantCard({ item }) {
    const navigation=useNavigation();

  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate('Restaurant', { ...item })}>

        
      <View style={{
        marginRight: 6,
        backgroundColor: 'white',
        borderRadius: 20,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
      }}>
        <Image
          style={{
            height: 144,
            width: 256,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}
          source={item.image}
        />
        <View style={{ paddingHorizontal: 12, paddingBottom: 4 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', paddingTop: 6 }}>
            {item.name}
          </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 2 }}>
            <Image source={require('../assets/images/fullStar.png')} style={{ height: 16, width: 16 }} />
            <Text style={{ fontSize: 14, marginLeft: 4 }}>
              <Text style={{ color: 'green' }}>{item.stars}</Text>
              <Text style={{ color: 'gray' }}>
                ({item.reviews} review).
                <Text style={{ fontWeight: 'bold' }}>{item.category}</Text>
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
