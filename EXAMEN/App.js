import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Image,
  Alert,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const API_KEY = '13aeeb893d754330aea203302250707'; // Reemplaza por tu propia API key

export default function App() {
  const [city, setCity] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [weatherList, setWeatherList] = useState([]);
  const [loading, setLoading] = useState(false);

  // 🔍 Sugerencias automáticas
  useEffect(() => {
    const fetchSuggestions = async () => {
      if (city.length < 2) {
        setSuggestions([]);
        return;
      }
      try {
        const res = await fetch(
          `https://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${city}`
        );
        const data = await res.json();
        setSuggestions(data);
      } catch (err) {
        console.error('Error al buscar sugerencias:', err);
      }
    };
    fetchSuggestions();
  }, [city]);

  // 📥 Obtener clima
  const fetchWeather = async (cityName) => {
    setLoading(true);
    setSuggestions([]);
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cityName}&lang=es`
      );
      const data = await response.json();
      if (data.error) {
        Alert.alert('Error', data.error.message);
      } else {
        const exists = weatherList.some(
          (item) => item.location.name === data.location.name
        );
        if (!exists) {
          setWeatherList((prev) => [...prev, data]);
        } else {
          Alert.alert('Aviso', 'Esta ciudad ya fue agregada');
        }
        setCity('');
      }
    } catch (error) {
      Alert.alert('Error', 'No se pudo conectar con el servidor');
    } finally {
      setLoading(false);
    }
  };

  // ❌ Eliminar ciudad individual
  const removeCity = (index) => {
    const updatedList = [...weatherList];
    updatedList.splice(index, 1);
    setWeatherList(updatedList);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🌎 Clima Mundial</Text>
      <TextInput
        value={city}
        onChangeText={setCity}
        placeholder="Buscar ciudad..."
        style={styles.input}
        placeholderTextColor="#ccc"
      />

      {/* 🔽 Sugerencias */}
      {suggestions.length > 0 && (
        <FlatList
          data={suggestions}
          keyExtractor={(item) => `${item.id}-${item.name}`}
          style={styles.suggestionList}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => fetchWeather(item.name)}
              style={styles.suggestionItem}
            >
              <Text style={styles.suggestionText}>
                📍 {item.name}, {item.region}, {item.country}
              </Text>
            </TouchableOpacity>
          )}
        />
      )}

      {loading && <ActivityIndicator size="large" color="#00bfff" style={{ marginVertical: 10 }} />}

      <ScrollView style={styles.scroll}>
        {weatherList.map((item, index) => (
          <View key={index} style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.city}>
                {item.location.name}, {item.location.country}
              </Text>
              <TouchableOpacity onPress={() => removeCity(index)}>
                <Text style={styles.deleteButton}>✖️</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.condition}>{item.current.condition.text}</Text>
            <Image
              style={styles.icon}
              source={{ uri: 'https:' + item.current.condition.icon }}
            />
            <Text style={styles.temp}>{item.current.temp_c}°C</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: '#1e1e2e',
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#f8fafc',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#2c2c3c',
    color: '#fff',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#555',
  },
  suggestionList: {
    maxHeight: 150,
    backgroundColor: '#2c2c3c',
    borderRadius: 8,
    marginBottom: 10,
  },
  suggestionItem: {
    padding: 10,
    borderBottomColor: '#444',
    borderBottomWidth: 1,
  },
  suggestionText: {
    color: '#ddd',
  },
  scroll: {
    marginTop: 10,
  },
  card: {
    backgroundColor: '#29293d',
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  deleteButton: {
    fontSize: 22,
    color: '#ff6b6b',
  },
  city: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#f1f5f9',
  },
  condition: {
    fontSize: 16,
    color: '#cbd5e1',
    marginTop: 5,
    textTransform: 'capitalize',
  },
  temp: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#38bdf8',
    marginTop: 10,
  },
  icon: {
    width: 70,
    height: 70,
    alignSelf: 'center',
    marginVertical: 10,
  },
});
