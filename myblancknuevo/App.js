import { ImageBackground, Image, StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Alert, TextInput, Switch } from 'react-native';
import React, { useState, useEffect } from 'react';

const FondoBienvenida = () => {
  return (
    <View style={styles.fondo}>
      <View style={styles.contenido}>
        <Image
          source={require('./assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />

      </View>
    </View>
  );
};

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [aceptaTerminos, setAceptaTerminos] = useState(false);


  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);
  const handleRegister = () => {
  if (!nombre.trim() || !correo.trim()) {
    Alert.alert('Campos incompletos', 'Por favor ingresa tu nombre y correo electrónico.');
    return;
  }

  if (!aceptaTerminos) {
    Alert.alert('Términos y condiciones', 'Debes aceptar los términos y condiciones para continuar.');
    return;
  }

  Alert.alert('¡Felicidades, marine!', 'Estás registrado.');
};


  return (
    <SafeAreaView style={styles.container}>
      {showSplash ? (
        <FondoBienvenida />
      ) : (
        <ImageBackground
          source={require('./assets/fondoPrincipal.jpg')}
          style={styles.fondoPrincipal}
          resizeMode="cover"
        >
          <View style={styles.overlay}>
           
            <Text style={styles.mainText}>Registro Imperial</Text>

            <TextInput
              placeholder="Nombre completo"
              placeholderTextColor="#ccc"
              style={styles.input}
              value={nombre}
              onChangeText={setNombre}
            />
            <TextInput
              placeholder="Correo electrónico"
              placeholderTextColor="#ccc"
              style={styles.input}
              keyboardType="email-address"
              value={correo}
              onChangeText={setCorreo}
            />

            <View style={styles.switchContainer}>
              <Switch
                value={aceptaTerminos}
                onValueChange={setAceptaTerminos}
              />
              <Text style={styles.switchText}>Acepto términos y condiciones</Text>
            </View>

            <TouchableOpacity style={styles.button} onPress={handleRegister}>
              <Text style={styles.buttonText}>Registrarse</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      )}
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fondo: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contenido: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  fondoPrincipal: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  
  mainText: {
    fontSize: 28,
    color: '#f9f9f9',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    width: '90%',
    backgroundColor: '#222',
    color: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#555',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  switchText: {
    color: '#f9f9f9',
    marginLeft: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#8B0000',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  buttonText: {
    color: '#f9f9f9',
    fontSize: 18,
    fontWeight: 'bold',
  },
});