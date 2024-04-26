import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";
import { Fontisto } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import { Redirect } from "expo-router";
import axios from "axios";
import { base_url } from "../../../utils";

const index = () => {
  const router = useRouter();
  const [stops, setStops] = useState([]);
  const [busData, setbusData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://${base_url}:8000/getbusdetailseve`)
      .then((response) => {
        setbusData(response.data);
        // setAllstops(response.data)
        // setAllstops(response.data.data)
        const data = response.data.data[0].stops;
        data = response.data.data[0].stops;
        console.log(data);
        data.forEach((element) => {
          setStops((prev) => [...prev, element.name]);
        });
      })
      .catch((err) => {
        console.log("Erro:", err);
      });
  }, []);
  const passStops = (index) => {
    const req = allstops.data[index].stops;
    req.forEach((element) => {
      setStops((prev) => [...prev, element.name]);
    });
    console.log(stops);
  };
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 8,
          backgroundColor: "#e0e0e0",
          height: 110,
          borderBottomEndRadius: 40,
          borderBottomStartRadius: 40,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Pressable
          onPress={() => router.navigate("/(pages)/profile")}
          style={{
            marginLeft: 15,
            paddingHorizontal: 10,
            paddingVertical: 6,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FontAwesome name="user-circle-o" size={34} color="black" />
        </Pressable>
        {/* <Text style={{ marginLeft: -2, color: "black", fontSize: 20 }}>
          Where is my
        </Text>
        <Text style={{ color: "#F98B88", fontSize: 20 }}>School Bus</Text> */}
        <Text
          style={{ color: "black", fontSize: 20, marginRight: 5 }}
          onPress={() => router.replace("/(authenticate)/open")}
        >
          Sair
        </Text>
      </View>

      <ScrollView style={{ flex: 1 }}>
        <View style={{ padding: 10 }}>
          <View
            style={{
              top: 80,
              left: 30,
              backgroundColor: "#e0e0e0",
              height: 30,
              width: 160,
            }}
          >
            <Text style={{ marginLeft: 10, color: "#068473", fontSize: 15 }}>
              Escolha o ônibus do seu filho
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "left",
              marginTop: 70,
              marginLeft: "auto",
              marginRight: "auto",
              backgroundColor: "white",
              height: 120,
              width: 320,
              borderRadius: 10,
              shadowColor: "black",
              shadowOffset: {
                width: 0,
                height: 20,
              },
              shadowOpacity: 0.75,
              shadowRadius: 4,
              elevation: 10,
            }}
          >
            <Pressable style={{ height: 50, color: "white" }}>
              <Link
                style={{
                  top: 0,
                  fontSize: 25,
                  textAlign: "left",
                  marginLeft: 30,
                }}
                href={{
                  pathname: "../(pages)/Businfo",
                  params: { data: [...stops], id: 0 },
                }}
              >
                Ônibus Nº 1
              </Link>
            </Pressable>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "left",
              marginTop: 10,
              marginLeft: "auto",
              marginRight: "auto",
              backgroundColor: "white",
              height: 120,
              width: 320,
              borderRadius: 10,
              shadowColor: "black",
              shadowOffset: {
                width: 0,
                height: 20,
              },
              shadowOpacity: 0.75,
              shadowRadius: 4,
              elevation: 10,
            }}
          >
            <Pressable style={{ height: 50, color: "white" }}>
              <Link
                style={{
                  top: 0,
                  fontSize: 25,
                  textAlign: "left",
                  marginLeft: 30,
                }}
                href={{
                  pathname: "../(pages)/Businfo",
                  params: { data: [...stops], id: 1 },
                }}
              >
                Ônibus Nº 2
              </Link>
            </Pressable>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "left",
              marginTop: 10,
              marginLeft: "auto",
              marginRight: "auto",
              backgroundColor: "white",
              height: 120,
              width: 320,
              borderRadius: 10,
              shadowColor: "black",
              shadowOffset: {
                width: 0,
                height: 20,
              },
              shadowOpacity: 0.75,
              shadowRadius: 4,
              elevation: 10,
            }}
          >
            <Pressable style={{ height: 50, color: "white" }}>
              <Link
                style={{
                  top: 0,
                  fontSize: 25,
                  textAlign: "left",
                  marginLeft: 30,
                }}
                href={{
                  pathname: "../(pages)/Tsp",
                  params: { data: [...stops], id: 2 },
                }}
              >
                Ônibus Nº 3
              </Link>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default index;

const styles = StyleSheet.create({});
