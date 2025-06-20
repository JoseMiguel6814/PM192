/*Zona 1 Importaciones */
import React,{useState} from "react";

import { View,Text, TextInput, Button, Alert, StyleSheet } from "react-native-web";




/*Zona 2 Main  */
export default function App() {
  const [nombre, setNombre] = useState('');
  
  const mostrarAlerta =()=>{
    if (nombre.trim()=== ''){
      Alert.alert('error', 'porfavor escribe algo');
      alert('Escribe algo');
    }else{
      Alert.alert('bienvenido', `hola ${nombre}, bienvenido a nuestra app :p`);
      alert(`Hola ${nombre}, bienvenido`);
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Escribe tu nombre:</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe tu nombre"
        value={nombre}
        onChangeText={setNombre}
      >
      </TextInput>

      <Button title="Enviar" onPress={mostrarAlerta}></Button>
    </View>
  )
 
};








/*Zona 3 estilos */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    pudding: 20,
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
    color: 'black',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#f0f0f0',
    color: 'black',
  },
 
});
