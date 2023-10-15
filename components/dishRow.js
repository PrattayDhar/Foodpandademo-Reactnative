import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import * as Icon from "react-native-feather";
import { themeColors } from "../theam";

export default function DishRow({ item }) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        padding: 12,
        borderRadius: 20,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        marginBottom: 10,
        marginHorizontal: 4,
      }}
    >
      <Image
        style={{
          height: 100,
          width: 100,
          borderRadius: 20,
        }}
        source={item.image}
      />
      <View style={{ paddingLeft: 12 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.name}</Text>
        <Text style={{ color: "gray" }}>{item.description}</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingLeft: 12,
          }}
        >
          <Text style={{ color: "gray", fontSize: 18, fontWeight: "bold" }}>
            {item.price}Tk
          </Text>
          <View
            style={{
                paddingLeft:"30%",
              flexDirection: "row",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={{
                padding: 8,
                borderRadius: 20,
                backgroundColor: themeColors.bgColor(1),
              }}
            >
              <Icon.Minus strokeWidth={2} height={20} stroke="white" />
            </TouchableOpacity>
            <Text style={{ paddingLeft: 12, paddingRight: 12 }}>{2}</Text>
            <TouchableOpacity
              style={{
                padding: 8,
                borderRadius: 20,
                backgroundColor: themeColors.bgColor(1),
              }}
            >
              <Icon.Plus strokeWidth={2} height={20} stroke="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
