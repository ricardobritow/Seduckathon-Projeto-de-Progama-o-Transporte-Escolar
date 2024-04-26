import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  Image,
  ImageBackground,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const open = () => {
  const router = useRouter();
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}
    >
      <View style={{ marginTop: 250 }}>
        <Text
          style={{
            fontSize: 40,
            fontWeight: "600",
            color: "black",
            textAlign: "center",
          }}
        >
          Rastreio do
        </Text>
        <Text
          style={{
            fontSize: 40,
            fontWeight: "600",
            color: "#F98B88",
            textAlign: "center",
          }}
        >
          meu Ônibus
        </Text>
        <Text
          style={{
            fontSize: 10,
            fontWeight: "200",
            color: "black",
            textAlign: "center",
          }}
        >
          Faça o rastreio do ônibus do seu filho
        </Text>
        <Pressable
          // onPress={() => router.navigate("/(tabs)/Home")} // remove login
          onPress={() => router.navigate("/login")} // usa login
          style={{ marginTop: 15 }}
        >
          <Text style={{ textAlign: "center", fontSize: 15, color: "gray" }}>
            Entrar
          </Text>
        </Pressable>
        <Pressable
          onPress={() => router.navigate("/register")}
          style={{ marginTop: 15 }}
        >
          <Text style={{ textAlign: "center", fontSize: 15, color: "gray" }}>
            Novo usuário?
          </Text>
        </Pressable>
      </View>
      <KeyboardAvoidingView></KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default open;

const styles = StyleSheet.create({});
