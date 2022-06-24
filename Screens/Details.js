import React from "react";
import { View, Text,  Image,TouchableOpacity } from "react-native";
import {Description} from "../components"

const DetailsHeader = ({ data }) => (

  <View style={{ width: "100%", height: 370 }}>
    <Image
      source={{uri:data.photo.images.original.url }}
      resizeMode="cover"
      style={{ width: "100%", height: "100%" }}
    />
  </View>
);

const Details = ({ route, navigation }) => {
  const { data } = route.params;

  return (
    <View style={{ flex: 1 }}>
    
      <View
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(255,255,255,0.5)",
        }}
      >
         <DetailsHeader data={data} />
            <View style={{ padding:60 }}>
              <Description data={data} />
            </View>


            <TouchableOpacity
                  style={{
                    backgroundColor: "#fff",
                    padding: 10,
                    borderRadius:10,
                    width:150,
                    marginTop:10
                  }}
                  onPress={()=>{navigation.goBack()}}
                >
                  <Text
                    style={{
                    
                      fontSize: 20,
                      color: "darkblue",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                   Go Back
                  </Text>
                </TouchableOpacity>

      </View>

    </View>
  );
};

export default Details;
