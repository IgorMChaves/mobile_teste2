import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import Button from "../../components/Button";
import { LoginTypes } from "../../types/Screen.types";
import { FontAwesome5 } from "@expo/vector-icons";
import CardSocial from "../../components/CardSocial";


export default function Perfil({ navigation }: LoginTypes) {
  async function handleSignIn() {
    console.log("Cadastrar");
  }
  function handleLogin() {
    navigation.navigate("Login");
  }

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/perfil.png")} />
      <Text style={styles.title}>nome</Text>
      <CardSocial>
        <>
          <FontAwesome5 name="facebook" style={styles.icon} />
          <Text style={styles.link}>https://facebook.com</Text>
        </>
      </CardSocial>
      <CardSocial>
        <>
          <FontAwesome5 name="instagram" style={styles.icon} />
          <Text style={styles.link}>https://instagram.com</Text>
        </>
      </CardSocial>
      <Button title="CONFIGURAÇÕES" type="black" onPress={handleSignIn} />
      <Button title="SAIR" type="primary" onPress={handleLogin} />  
    </View>
  );
}


       
    
