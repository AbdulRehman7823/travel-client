import React, { useState } from "react";
import { View, Text } from "react-native";

const Description = ({ data }) => {
  const [text, setText] = useState((data.description==null)?"No description available":data.description.slice(0, 100));
  const [readMore, setReadMore] = useState(false);

  return (
    <>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        
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
        

      </View>

      <View style={{ marginVertical: 20 * 1.5 }}>
        <Text
          style={{
            fontSize:15,
        
            color: "#4e0066",
          }}
        >
          Address:
          {data.address}
        </Text>
        <View
          style={{
            marginTop: 10,
          }}
        >
          <Text
            style={{
              color: "black",
              fontSize: 14,
            }}
          >
            Website:
            {data.website}           
          </Text>
        </View>
      </View>
    </>
  );
};

export default Description;