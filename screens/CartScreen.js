import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import * as Icon from "react-native-feather";
import { useNavigation } from "@react-navigation/native";
import { themeColors } from "../theam";
import { featured } from "../api";

export default function CartScreen() {
  const restaurant = featured.restaurants[0];
  const navigation = useNavigation();

  return (
    <View>
      <View style={{ position: "relative" }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            position: "absolute",
            top: 50,
            left: 4,
            backgroundColor: themeColors.bgColor(1),
            padding: 10,
            borderRadius: 50,
            shadowColor: "black",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
          }}
        >
          <Icon.ArrowLeft strokeWidth={3} stroke="white" />
        </TouchableOpacity>
        <Text style={{ textAlign: "center", fontSize: 24, fontWeight: "bold" }}>
          Your Cart
        </Text>
        
      </View>
    </View>
  );
}
