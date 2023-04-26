import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Linking
} from "react-native";
export default function App() {
  return (
    <View style={styles.container}>
    <Image
        style={styles.imagem}
        source={require('./spotify_white.png')}/>
        <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>Baixar o Spotify</Text>
      <Text style={styles.text2}>Escute milhões de músicas e podcasts no seu dispositivo</Text>

    </TouchableOpacity>    

      </View> 
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1DB954",
    alignItems: "center",
    justifyContent: "center",
  },

  imagem: {
    width: 250,
    height: 100,
    resizeMode: 'contain',
    margin: 20
  },
  button: {
    width: 250,
    borderRadius: 15,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#191414",
  },
  text: {
    color: "white"
  },
  text2: {
    color: "white",
    marginTop: 100, 
    justifyContent: "center",
  }
});