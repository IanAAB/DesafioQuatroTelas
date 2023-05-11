import React, { useState } from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import App from './App';
import App2 from './App2'; 
import App3 from './App3';
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
        <Stack.Screen name="App" component={App} />
        <Stack.Screen name="App2" component={App2} />
        <Stack.Screen name="App3" component={App3} />
      </Stack.Navigator>
    </NavigationContainer>
    <View style={styles.container}>
    <View style={styles.textos}>
      <Text style={styles.infinitamente}>Infinitamente grátis</Text>
      <Text style={styles.planoInfinito}>Plano Infinito</Text>
      <Text>R$ Grátis</Text>
      <View style={styles.vantagens}>
      <Text style={styles.um}>✔  Ouça músicas sem anúncios </Text>
      <Text style={styles.dois}>✔  Ouça em qualquer lugar — até quando estiver offline</Text>
      <Text style={styles.tres}>✔  Ouça músicas na ordem que quiser</Text>
      <Text style={styles.quatro}>✔  Faça um plano pré-pago ou uma assinatura</Text>
      </View> 
      <View style={{ borderBottomWidth: 1, borderBottomColor: 'black' }} />
      <Text style={styles.termos}>Somente no plano Individual. Depois, é só R$ 19,90/mês. Sujeito a Termos    e      Condições. Disponível apenas para quem nunca usou o Premium. A oferta termina em 16/05/2023.</Text>
    </View>
    <button type="button" style={styles.botao}>COMECE AGORA</button>
      </View> 
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#efefef",
    alignItems: "center",
    justifyContent: "center",
  },
  textos: {
    margin: 30,
    backgroundColor: "white",
    padding: 25,
    borderRadius: 4
  },
  infinitamente: {
    backgroundColor: "#1DB954",
    color: "#fffeff", 
    borderRadius: 5,
    padding: 5.5
  },
  planoInfinito: {
    fontSize: 22,
    fontWeight: "bold"
  }, 
  um: {
    margin: 10
  },
  dois: {
    margin: 10
  },
  tres: {
    margin: 10
  },
  quatro: {
    margin: 10
  },
  termos: {
    fontSize: 10, 
    margin: 5, 
    width: 220
  }, 
  botao: {
    backgroundColor: "#191414",
    color: "white",
    padding: 15, 
    borderRadius: 500, 
    border: 1,
    width: 280
  }
});