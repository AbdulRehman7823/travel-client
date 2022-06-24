import React from "react";
import { View, Text, Image } from "react-native";
import img from '../assets/images/rest.jpg'

const Header = () => {
  return (
    <View
      style={{
        backgroundColor: "#4e0066",
        padding: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "#fff",
            textAlign: "left",
          }}
        >
          Travelo
        </Text>

        <View style={{ width: 45, height: 45 }}>
          <Image
            source={img}
            resizeMode="contain"
            style={{ width: "100%", height: "100%", borderRadius: 45 / 2 }}
          />
        </View>
      </View>

      <View style={{ marginVertical: 10 }}>
        <Text
          style={{
            fontSize: 15,
            color: "#fff",
          }}
        >
          Developed By Shadab & Aqsa!:
        </Text>

        <Text
          style={{
            fontSize: 18,
            color: "#fff",
            marginTop: 6,
          }}
        >
          Find out the best Restaurant!!!
        </Text>

      </View>

      
    </View>
  );
};

export default Header;
