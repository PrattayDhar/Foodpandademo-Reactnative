import React from "react";
import { View, Text, Button, TextInput, ImageBackground } from "react-native";

const VisitorPage = ({ navigation }) => {
  const navigateToHome = () => {
    navigation.navigate("Home");
  };

  return (
    <ImageBackground
      source={require("../assets/images/icon-back.jpeg")} 
      style={{ flex: 1, resizeMode: "50%", justifyContent: "center" }}
    >
      <View style={{ alignItems: "center", justifyContent: "top" }}>

      </View>
      <View style={{ alignItems: "center", marginBottom: 30 }}>
        <Button title="Find Food" onPress={navigateToHome} />
      </View>
    </ImageBackground>
  );
};

export default VisitorPage;
