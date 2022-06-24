import React, { useState } from "react";
import { View, FlatList } from "react-native";
import { Card, Header } from "../components";
import axios from "axios";

const Home = ({ navigation }) => {
  const [data, setData] = useState();
  const getData = async () => {

    const options = {
      method: "GET",
      url: "https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng",
      params: {
        latitude: "31.5204",
        longitude: "74.3587",
        limit: "30",
        currency: "USD",
        distance: "2",
        open_now: "false",
        lunit: "km",
        lang: "en_US",
      },
      headers: {
        "X-RapidAPI-Key": "8641b854f5msh0bd2fc5e595d926p1eba9cjsn8e39aa500992",
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
      },
    };

    axios.request(options)
      .then(function (response) {
        console.log(response.data.data);
        var filteredData = response.data.data.filter((val)=> (val.photo!=null && val.photo.images!=null && val.name!=null && val.phone!=null));

        setData(filteredData);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  React.useEffect(getData, []);

  return (
    <View style={{ backgroundColor: "#4e0066", flex: 1, padding: 10 }}>
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={data}
            renderItem={({ item }) => <Card data={item} />}
            keyExtractor={(item) => item.location_id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<Header />}
          />
        </View>

        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <View style={{ height: 300, backgroundColor: "#fff" }} />
          <View style={{ flex: 1, backgroundColor: "#4e0066" }} />
        </View>
      </View>
    </View>
  );
};

export default Home;
