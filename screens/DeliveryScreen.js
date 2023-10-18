import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { featured } from "../api";
import { useNavigation } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";
import { themeColors } from "../theam";
import * as Icon from "react-native-feather";

export default function DeliveryScreen() {
  const restaurant = featured.restaurants[0];
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <MapView
          initialRegion={{
            latitude: restaurant.lat,
            longitude: restaurant.lng,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
          style={styles.map}
          mapType="standard"
        >
          <Marker
            coordinate={{
              latitude: restaurant.lat,
              longitude: restaurant.lng,
            }}
            title={restaurant.name}
            description={restaurant.description}
          />
        </MapView>
      </View>

      <View style={styles.ridersinfo}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Estimated Arrival</Text>
          <Text style={styles.text}>20-30 Min</Text>
          <Text style={styles.orderStatus}>Order On The Way ......</Text>
        </View>

        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../assets/images/bikeGuy2.gif")}
          />
        </View>
      </View>

      <View style={styles.riderContainer}>
        <View style={styles.riderInfo}>
          <Image
            style={styles.riderImage}
            source={require("../assets/images/deliveryGuy.png")}
          />
          <View style={styles.riderText}>
            <Text style={styles.riderName}>Prattay</Text>
            <Text style={styles.riderRole}>Your Rider</Text>
          </View>
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate('Home')} style={styles.cancelButton}>
          <Icon.X stroke={"red"} strokeWidth={4} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapContainer: {
    flex: 2,
  },
  map: {
    flex: 1,
  },
  textContainer: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    alignItems: "center",
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "gray",
  },
  orderStatus: {
    textAlign: "center",
    padding: 10,
    fontSize: 16,
    color: "gray",
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: 120,
    height: 120,
  },
  riderContainer: {
    backgroundColor: themeColors.bgColor(1),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    borderRadius: 50,
  },
  cancelButton: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 50,
  },
  riderInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  riderImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  riderText: {
    marginLeft: 10,
  },
  riderName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  riderRole: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  ridersinfo: {
    
    flexDirection: "row",
    backgroundColor:"white",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    borderRadius: 50,
  },
});
