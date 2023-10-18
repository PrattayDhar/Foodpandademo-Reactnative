import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import * as Icon from "react-native-feather";
import { useNavigation } from "@react-navigation/native";
import { themeColors } from "../theam";
import { featured } from "../api";

export default function CartScreen() {
  const restaurant = featured.restaurants[0];
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
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
        <Text
          style={{
            textAlign: "center",
            fontSize: 24,
            fontWeight: "bold",
            marginTop: 50,
          }}
        >
          Your Cart
        </Text>
        <Text
          style={{ textAlign: "center", fontSize: 15, fontWeight: "light" }}
        >
          {restaurant.name}
        </Text>
      </View>
      <View>
        {/* Delivery Time */}
        <View
          style={{
            backgroundColor: themeColors.bgColor(0.3),
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 10,
          }}
        >
          <Image
            source={require("../assets/images/bikeGuy.png")}
            style={{ width: 80, height: 80, borderRadius: 40 }}
          />
          <Text style={{ flex: 1, paddingLeft: 10 }}>
            Deliver In 30-40 Mins
          </Text>
          <TouchableOpacity>
            <Text style={{ fontWeight: "bold", color: themeColors.text }}>
              Change
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
      >
        {restaurant.dishes.map((dish, index) => (
          <View
            key={index}
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 2,
              paddingHorizontal: 10,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                color: themeColors.text,
              }}
            >
              {" "}
              2 x
            </Text>
            <Image
              style={{
                width: 80,
                height: 80,
                borderRadius: 40,
              }}
              source={dish.image}
            />
            <Text style={{ flex: 1, paddingLeft: 10, fontWeight: "bold" }}>
              {dish.name}
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>
              ${dish.price}
            </Text>
            <TouchableOpacity
              style={{
                padding: 10,
                borderRadius: 50,
                backgroundColor: themeColors.bgColor(1),
              }}
            >
              <Icon.Minus
                strokeWidth={2}
                height={20}
                width={20}
                stroke="white"
              />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      {/* Calculation  */}
      <View
        style={{
          backgroundColor: themeColors.bgColor(0.2),
          paddingHorizontal: 10,
          paddingTop: 20,
          paddingBottom: 20,
          borderRadius: 20,
        }}
      >
        <View
          style={{
            paddingBottom: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ flex: 1, color: themeColors.text }}>Subtotal</Text>
          <Text style={{ color: themeColors.text }}>$20</Text>
        </View>
        <View
          style={{
            paddingBottom: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ flex: 1, color: themeColors.text }}>Delivery Fee</Text>
          <Text style={{ color: themeColors.text }}>$2</Text>
        </View>
        <View
          style={{
            paddingBottom: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ flex: 1, color: themeColors.text }}>Order Total</Text>
          <Text style={{ color: themeColors.text }}>$22</Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: themeColors.bgColor(1),
            borderRadius: 50,
            padding: 10,
          }}
        >
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            Place Order
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
