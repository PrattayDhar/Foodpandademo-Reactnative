import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { themeColors } from "../theam";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "../slices/cartSlice";

export default function CartIcon() {
  const navigation=useNavigation();
  const cartItems = useSelector(selectCartItems);
  const cartTotal=useSelector(selectCartTotal)
  if (!cartItems.length) return;
  return (
    <View
      style={{
        position: "absolute",
        bottom: 0,
        width: "100%",
        zIndex: 50,
        alignItems: "center",
      }}
    >
      <TouchableOpacity
      onPress={()=>navigation.navigate('Cart')}
        style={{
          backgroundColor: themeColors.bgColor(1),
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 30,
          borderRadius: 50,
          paddingVertical: 12,
          shadowColor: "gray",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.5,
          marginLeft:30,
          marginRight:30,
        
        }}
      >
        <View
          style={{
            padding: 8,
            borderRadius: 20,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>
            {cartItems.length}
          </Text>
        </View>
        <Text
          style={{
            flex: 1,
            textAlign: "center",
            fontSize: 18,
            fontWeight: "bold",
            color: "white",
          }}
        >
          View Cart
        </Text>
        <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>
         {cartTotal}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
