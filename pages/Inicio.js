import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Inicio({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Seja Bem-vindo(a) ao ListTask!</Text>
      <Text style={styles.subtitle}>Um app para listar suas tarefas com mais agilidade!</Text>

      <TouchableOpacity
        style={styles.button}
        
        onPress={() => navigation.navigate('Login')} 
      >
        <Text style={styles.buttonText}>Continuar</Text>
      </TouchableOpacity>
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
  welcomeText: {
    fontSize: 22,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30,
    fontWeight: 'bold',
  },
  subtitle:{
    fontSize: 16,
    color: '#C1B6E3',
    textAlign: 'center',
    marginBottom: 25,
    fontStyle: 'italic',
    lineHeight: 22,
    paddingHorizontal: 10,
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
});