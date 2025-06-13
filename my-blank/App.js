/*Zona 1 Importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-web';
import React, { useState } from 'react';

const Texto = ({style}) => {
  const [contenido, setContenido] = useState('Hola Mundo');
  const actualizarTexto = () => {
    setContenido('Estado actualizado');
  }


  return (
    <Text style={[styles.text, style]} onPress={actualizarTexto}>{contenido}</Text>
  );
}




/*Zona 2 Main  */
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />

   
      <Texto style={styles.red}></Texto>
      <Texto style={styles.green}></Texto>
      <Texto style={styles.blue}></Texto>
    


      <Button title='presioname'></Button>
      <StatusBar style="auto" />
    </View>
  );
}







/*Zona 3 estilos */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  text: {
    fontSize: 20,
    color: 'white',
    height:100,
    
  },
  red:{backgroundColor: 'red'},
  green:{backgroundColor: 'green'},
  blue:{backgroundColor: 'blue'},
});
