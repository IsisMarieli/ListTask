import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Modal,
} from 'react-native';

export default function Login({ navigation }) {
  const [apelido, setApelido] = useState('');
  const [isModalVisible, setModalVisible] = useState(false); 

  function handleLogin() {
    if (!apelido.trim()) {
      setModalVisible(true); 
      return;
    }
    
    navigation.navigate('ListTask', { 
      userApelido: apelido 
    }); 
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Apelido"
        placeholderTextColor="#aaa"
        value={apelido}
        onChangeText={setApelido}
        keyboardType="default"
        autoCapitalize="none"
      />

      <TouchableOpacity 
        style={styles.button} 
        onPress={handleLogin} 
      >
        <Text
          style={styles.buttonText}
        >
          Entrar
        </Text>
      </TouchableOpacity>

      <Modal
        animationType="fade"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Atenção!</Text>
            <Text style={styles.modalText}>Por favor, insira seu apelido antes de entrar.</Text>
            <TouchableOpacity
              style={[styles.button, styles.modalButton]}
              onPress={() => setModalVisible(false)} 
            >
              <Text style={styles.buttonText}>Entendi</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0D0714',
    padding: 20,
  },
  title: {
    fontSize: 26,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    padding: 12,
    borderWidth: 1,
    borderColor: '#9E78CF',
    borderRadius: 10,
    marginBottom: 15,
    color: '#fff',
  },
  button: {
    backgroundColor: '#9E78CF',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalView: {
    margin: 20,
    backgroundColor: '#1D1825',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  modalText: {
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
  },
  modalButton: {
    marginTop: 15,
  },
});