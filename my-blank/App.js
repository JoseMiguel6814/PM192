import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Button, ActivityIndicator } from 'react-native';


// ZONA DE COMPONENTE HIJO CON PROPS
const Indicadorcarga = ({color, size}) => {
  return ( 
  <ActivityIndicator style= {styles.indicador} color={color} size={size}>

  </ActivityIndicator>

  )
}


//Zona componente principal










//ZONA 2 
export default function App() {
  const[cargando, setCargando] = useState(false);


  //funcion carga
  const iniciarCarga = () => {
    setCargando(true);
    setTimeout(() => {
      setCargando(false);
    }, 3000);
  }
  return (
  <View style={styles.container}>
    <Text style= {styles.textoprincipal}>uso de ActivityIndicator</Text>
    {cargando ? (
      <Indicadorcarga color="deepskyblue" size="large" />
    ) : (
      <Text style={styles.textosecundario}>presiona el boton para comenzar</Text>
    )}

    <Button title = "Iniciar Carga" onPress={iniciarCarga} style={styles.boton}>

    </Button>
    <StatusBar style="auto" />
  </View>

  )
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: '#ccff90',
  
  alignItems: 'center',
  justifyContent: 'center',
  padding: 20,
 },
 textoprincipal: {
  fontSize: 20,
  fontWeight: 'bold',
  marginBottom: 20,
  color: 'f4f4f4',
  },
  textosecundario: {
  fontSize: 16,
  marginVertical: 10,
  color: '3a3a3a',
  },
  indicador: {
    marginBottom: 20,
  },
  boton: {    
    backgroundColor: 'deepskyblue',
    
  },
});