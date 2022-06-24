import { View, Text, ImageBackground,TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import BackgroundImg from "../assets/images/rest.jpg";

const Intro = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={BackgroundImg}
      resizeMode="cover"
      style={{ flex: 1, textAlign: "center", padding: 30 }}
    >
      <View style={{ padding: 30 }}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: "900",
            color: "#fff",
            textAlign: "center",
            marginTop: 50,
            textDecorationLine: 'underline'
          }}
        >
          Restaurant Traveler
        </Text>

        <View  style={{
              backgroundColor:'rgba(0, 2, 31,0.7)',
              padding:20,
              marginTop:130,
              borderRadius:10
          }}>
        <Text
          style={{
            fontSize: 15,
            color: "#fff",
            textAlign: "left",
            fontWeight: "bold",
          }}
        >
          Now You can Travel Your nearest Restaurant!!!
          You can get Details of restaurants nearest...
        </Text>
        </View>

        <Text
          style={{
            fontSize: 15,
            color: "#fff",
            textAlign: "left",
            marginTop: 200,
            fontWeight: "bold",
          }}
        >
         So Don't Wait Just Click Here.....
        </Text>

        <TouchableOpacity
                  style={{
                    backgroundColor: "#fff",
                    padding: 10,
                    borderRadius:10,
                    width:150,
                    marginTop:30
                  }}
                  onPress={()=>{navigation.navigate("Home")}}
                >
                  <Text
                    style={{
                    
                      fontSize: 20,
                      color: "darkblue",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    Click Here
                  </Text>
                </TouchableOpacity>

      </View>
    </ImageBackground>
  );
};
export default Intro;
