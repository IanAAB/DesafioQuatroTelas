import React, { useState } from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import App2 from './App2'; 
import App3 from './App3';
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
const Stack = createStackNavigator();
export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="App2" component={App2} />
        <Stack.Screen name="App3" component={App3} />
        <Stack.Screen name="App4" component={App4} />
      </Stack.Navigator>
    </NavigationContainer>
    <View style={styles.container}>
    <Image
        style={styles.imagem}
        source={require('./spotify.png')}/>    
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}/> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Senha"
          placeholderTextColor="#003f5c"/> 
      </View> 
      <Text style={styles.textStyle}> 
  <Text 
    style={styles.hyperlink} 
    onPress={() => { 
      Linking.openURL('App2.js'); 
    }}> 
    Esqueceu sua senha?
  </Text> 
</Text>
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Esqueceu sua senha?</Text> 
      </TouchableOpacity> 
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>Fazer Login</Text> 
      </TouchableOpacity> 
    </View> 
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },

  imagem: {
    width: 250,
    height: 100,
    resizeMode: 'contain',
    margin: 20
  },
  inputView: {
    backgroundColor: "white",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  hyperlink: {
    color: "white",
    height: 30
  },
  loginBtn: {
    width: "70%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 0,
    backgroundColor: "#1DB954",
  },
});