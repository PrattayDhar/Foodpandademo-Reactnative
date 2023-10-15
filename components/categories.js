import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { categories } from '../api';

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        {categories.map((category, index) => {
          const isActive = category.id === activeCategory;
          const btnStyle = isActive ? styles.activeButton : styles.inactiveButton;
          const textStyle = isActive ? styles.activeText : styles.inactiveText;

          return (
            <View key={index} style={styles.categoryContainer}>
              <TouchableOpacity
                style={[styles.button, btnStyle]}
                onPress={() => setActiveCategory(category.id)}
              >
                <Image style={styles.image} source={category.image} />
                <Text style={[styles.text, textStyle]}>{category.name}</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 4,
  },
  scrollViewContent: {
    paddingHorizontal: 15,
  },
  categoryContainer: {
    marginRight: 6,
  },
  button: {
    padding: 5,
    borderRadius: 25,
    shadowColor: 'yellow',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    backgroundColor: 'gray',
    alignItems: 'center',
  },
  activeButton: {
    backgroundColor: 'gray',
  },
  inactiveButton: {
    backgroundColor: 'lightgray',
  },
  image: {
    width: 45,
    height: 45,
  },
  text: {
    fontSize: 16,
    color: 'Green',
  },
  activeText: {
    fontWeight: 'bold',
    color: 'yellow',
  },
  inactiveText: {
    color: 'green',
  },
});
