import React, { useState } from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import App from './App';
import App2 from './App2'; 
import App4 from './App4';
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
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="App" component={App}/>
        <Stack.Screen name="App2" component={App2} />
        <Stack.Screen name="App4" component={App4} />
      </Stack.Navigator>
    </NavigationContainer>
    <View style={styles.container}>
    <Image
        style={styles.imagem}
        source={require('./spotify_white.png')}/>
        <TouchableOpacity style={styles.button}>
      <View>
      <Text style={styles.text}>Baixar o Spotify</Text>
      </View>
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
    color: "white",
    marginTop:85
  },
  text2: {
    color: "white",
    marginTop: 70,
    width: 350,
    textAlign: 'center',
    fontSize: 12
  }
});