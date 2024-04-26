import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import Timeline from "react-native-timeline-flatlist";
import { useLocalSearchParams } from "expo-router/build/hooks";
import { encontreMenorRota } from "../../../utils/tsp";

const index = (navigation) => {
  // --- PARÂMETROS DA EXECUÇÃO: ---
  const matrizDeDistancias = [
    // X -> Y (distância de X para Y)
    [0, 10, 15, 20], // A -> A, A -> B, A -> C, A -> D
    [10, 0, 35, 25], // B -> A, B -> B, B -> C, B -> D
    [15, 35, 0, 30], // C -> A, C -> B, C -> C, C -> D
    [20, 25, 30, 0], // D -> A, D -> B, D -> C, D -> D
  ];
  const nomeDeParadas = [
    "Parada de Ônibus 002",
    "Rua Felismina Brito",
    "Praça Central",
    "Povoado XYZ",
  ]; // Nome dos pontos A, B, C, D, etc. Em ordem. Ir adicionando/removendo conforme a quantidade de paradas.

  const { menorCaminho, menorDistancia } =
    encontreMenorRota(matrizDeDistancias);
  console.log(menorCaminho, menorDistancia); // B->A=10, A->C=15, C->D=30

  var atual = "PARTIDA";
  var previsao = "45min";
  var pontodDePartida = "CETI AUGUSTINHO";

  let data = [{ time: "06:00", title: pontodDePartida, delay: "06:02" }];
  for (const paradaIndice of menorCaminho) {
    data.push({
      time: "06:10",
      title: nomeDeParadas[paradaIndice],
      delay: "06:10",
    });
  }

  return (
    <>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 8,
          backgroundColor: "#BFEE90",
          justifyContent: "center",
          height: 90,
          borderBottomEndRadius: 30,
          borderBottomStartRadius: 30,
        }}
      >
        <View>
          <Entypo
            style={{ top: 30, left: 130 }}
            name="back-in-time"
            size={18}
            color="red"
          />
        </View>
        <View
          style={{
            flexDirection: "column",
            // alignItems: "center",
            // justifyContent: "center",
            height: 60,
            marginTop: 50,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Text style={{ color: "black", fontSize: 16 }}>
            Seu ônibus chegou a {atual}
          </Text>
          <Text style={{ color: "red", textAlign: "center" }}>
            estará chegando em {previsao}
          </Text>
          {/* <TouchableOpacity onPress={handleclick}><Text>Ok!</Text></TouchableOpacity> */}
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "white",
          gap: 8,
          height: 35,
          justifyContent: "center",
          width: 70,
          margin: 40,
          marginLeft: 20,

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
        <Text style={{ color: "red" }}>Caixeiro Viajante</Text>
      </View>

      <View style={styles.container}>
        <View style={styles.busPointer}>
          <FontAwesome5 name="bus-alt" size={20} color="#4169E1" />
        </View>
        <Timeline
          data={data}
          circleSize={8}
          circleColor="#343434"
          lineColor="black"
          titleStyle={styles.title}
          timeContainerStyle={styles.time}
          descriptionStyle={styles.description}
          renderDetail={(rowData, sectionID, rowID) => (
            <View style={styles.detailContainer}>
              <Text style={styles.title}>{rowData.title}</Text>
              <Text style={styles.description}>{rowData.delay}</Text>
            </View>
          )}
        />
      </View>
      {/* <Map/> */}
    </>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    marginLeft: 100,
    flex: 1,
    marginTop: 10,
  },
  busPointer: {
    position: "absolute",
    top: -4,
    left: 55,
  },
  time: {
    fontsize: 10,
    top: -4,
  },
  title: {
    marginTop: -15,
    fontSize: 15,
    color: "black",
    marginBottom: 70,
  },
  description: {
    color: "red",
    left: -75,
    top: -70,
    fontSize: 12,
  },
});
