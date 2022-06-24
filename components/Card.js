import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Image,TouchableOpacity,Text } from "react-native";

const Card = ({ data }) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        backgroundColor: "#fff",
        borderRadius: 10,
        marginBottom: 20,
        margin: 5,
        boxShadow:'10 10 10 10'
      }}
    >
      <View
        style={{
          width: "100%",
          height: 250,
        }}
      >
        <Image
          source={{ uri: data.photo.images.original.url }}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
        />
      </View>

      <View style={{ width: "100%", padding: 10 }}>
        <Text
          style={{
            fontSize: 17,
            color: "#4e0066",
          }}
        >
          {data.name}
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: "#4e0066",
          }}
        >
          City : {data.location_string}
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: "#4e0066",
          }}
        >
          Contact : {data.phone}
        </Text>

        <Text
          style={{
            fontSize: 14,
            color: "#4e0066",
          }}
        >
          Rating {data.rating}
        </Text>
        </View>
        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "darkblue",
              padding: 10,
              borderRadius: 10,
              width: 80,
              marginTop: 30,
            }}
            onPress={() => {
              navigation.navigate("Detail",{data});
            }}
          >
            <Text
              style={{
                fontSize: 15,
                color: "#fff",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Details
            </Text>
          </TouchableOpacity>
        
      </View>
    </View>
  );
};

export default Card;
