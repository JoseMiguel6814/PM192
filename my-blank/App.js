/*Zona 1 Importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-web';

const Texto = (props) => {
  const { contenido } = props
  return (
    <Text> {contenido} </Text>
  );
}




/*Zona 2 Main  */
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />

   
      <Texto contenido="hola"></Texto>
      <Texto contenido="mundo"></Texto>
      <Texto contenido="react native"></Texto>


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
    alignItems: 'center',
    justifyContent: 'center',
  },
});
